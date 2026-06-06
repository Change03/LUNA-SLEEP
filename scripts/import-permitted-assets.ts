#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

const ROOT = process.cwd();
const ASSETS_DIR = path.join(ROOT, "assets");
const PUBLIC_IMPORT_DIR = path.join(ROOT, "public", "images", "products", "imported");
const MANIFEST_PATH = path.join(ASSETS_DIR, "asset-manifest.json");
const REQUEST_TIMEOUT_MS = 30000;

function tryRequire(packageName) {
  try {
    return require(packageName);
  } catch {
    return null;
  }
}

const sharp = tryRequire("sharp");

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function readJson(filePath, fallback) {
  if (!fs.existsSync(filePath)) {
    return fallback;
  }

  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, value) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function slugify(input) {
  const normalized = input
    .toString()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[-\s]+/g, "-");

  return normalized || "unnamed";
}

function sha256(buffer) {
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

function isPlaceholder(value) {
  if (!value) {
    return true;
  }

  return (
    value.includes("여기에") ||
    value.includes("운영자가 입력") ||
    value.includes("example.com") ||
    value.trim() === ""
  );
}

function parseUrl(value, base) {
  if (!value || isPlaceholder(value)) {
    return null;
  }

  try {
    return new URL(value, base);
  } catch {
    return null;
  }
}

function normalizeUrl(value, base) {
  const parsed = parseUrl(value, base);
  return parsed ? parsed.toString() : null;
}

function sourceMatchesUrl(source, targetUrl) {
  if (!source.allowed || source.baseUrl === "local-upload" || isPlaceholder(source.baseUrl)) {
    return false;
  }

  const target = parseUrl(targetUrl);
  const base = parseUrl(source.baseUrl);

  if (!target) {
    return false;
  }

  if (base) {
    const baseHref = base.toString().replace(/\/$/, "");
    const targetHref = target.toString().replace(/\/$/, "");
    return target.origin === base.origin || targetHref.startsWith(baseHref);
  }

  return targetUrl.startsWith(source.baseUrl);
}

function findAllowedSourceForUrl(targetUrl, sources) {
  return sources.find((source) => sourceMatchesUrl(source, targetUrl)) || null;
}

function getAttr(tag, attr) {
  const expression = new RegExp(`${attr}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s"'>]+))`, "i");
  const match = tag.match(expression);
  return match ? match[2] || match[3] || match[4] || "" : "";
}

function addSrcsetUrls(urls, pageUrl, srcset) {
  for (const candidate of srcset.split(",")) {
    const rawUrl = candidate.trim().split(/\s+/)[0];
    const resolved = normalizeUrl(rawUrl, pageUrl);
    if (resolved) {
      urls.add(resolved);
    }
  }
}

function extractImageUrlsFromHtml(pageUrl, html) {
  const urls = new Set();
  const tagExpression = /<(img|source|meta|link)\b[^>]*>/gi;
  const imageAttrs = ["src", "data-src", "data-original", "data-lazy", "data-url", "data-image"];
  const srcsetAttrs = ["srcset", "data-srcset"];
  let match;

  while ((match = tagExpression.exec(html))) {
    const tagName = match[1].toLowerCase();
    const tag = match[0];

    if (tagName === "img" || tagName === "source") {
      for (const attr of imageAttrs) {
        const value = getAttr(tag, attr);
        const resolved = normalizeUrl(value, pageUrl);
        if (resolved) {
          urls.add(resolved);
        }
      }

      for (const attr of srcsetAttrs) {
        const value = getAttr(tag, attr);
        if (value) {
          addSrcsetUrls(urls, pageUrl, value);
        }
      }
    }

    if (tagName === "meta") {
      const property = `${getAttr(tag, "property")} ${getAttr(tag, "name")}`.toLowerCase();
      if (property.includes("og:image") || property.includes("twitter:image")) {
        const resolved = normalizeUrl(getAttr(tag, "content"), pageUrl);
        if (resolved) {
          urls.add(resolved);
        }
      }
    }

    if (tagName === "link") {
      const rel = getAttr(tag, "rel").toLowerCase();
      if (rel.includes("image_src") || rel.includes("preload")) {
        const as = getAttr(tag, "as").toLowerCase();
        if (!as || as === "image") {
          const resolved = normalizeUrl(getAttr(tag, "href"), pageUrl);
          if (resolved) {
            urls.add(resolved);
          }
        }
      }
    }
  }

  return Array.from(urls);
}

function pageProductCode(pageUrl) {
  const match = pageUrl.match(/\/(?:display|deal)\/detail\/(\d+)/);
  return match ? match[1] : "";
}

function shouldImportImageForPage(imageUrl, pageUrl) {
  const parsed = parseUrl(imageUrl);
  const code = pageProductCode(pageUrl);

  if (!parsed) {
    return false;
  }

  const pathName = parsed.pathname.toLowerCase();

  if (!pathName.includes("/goods/")) {
    return false;
  }

  return code ? pathName.includes(code) : true;
}

async function fetchWithTimeout(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    return await fetch(url, {
      signal: controller.signal,
      headers: {
        "user-agent": "LUNA&SLEEP asset permission importer"
      }
    });
  } finally {
    clearTimeout(timer);
  }
}

async function fetchText(url) {
  const response = await fetchWithTimeout(url);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return await response.text();
}

async function fetchImage(url) {
  const response = await fetchWithTimeout(url);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const contentType = response.headers.get("content-type") || "";
  if (contentType && !contentType.toLowerCase().startsWith("image/")) {
    throw new Error(`not an image response: ${contentType}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  return {
    buffer: Buffer.from(arrayBuffer),
    contentType
  };
}

function extensionFromContentType(contentType) {
  const normalized = contentType.toLowerCase().split(";")[0].trim();
  const map = {
    "image/jpeg": ".jpg",
    "image/jpg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
    "image/gif": ".gif",
    "image/avif": ".avif"
  };

  return map[normalized] || "";
}

function filenameFromUrl(imageUrl, contentType, hash) {
  const parsed = parseUrl(imageUrl);
  const fallbackExt = extensionFromContentType(contentType) || ".img";
  let originalFilename = `${hash.slice(0, 12)}${fallbackExt}`;

  if (parsed) {
    const basename = path.basename(decodeURIComponent(parsed.pathname));
    if (basename && basename !== "/" && basename !== ".") {
      originalFilename = basename;
    }
  }

  const ext = path.extname(originalFilename) || fallbackExt;
  const baseName = path.basename(originalFilename, path.extname(originalFilename));
  const safeBase = slugify(baseName);

  return {
    originalFilename,
    safeFilename: `${safeBase}-${hash.slice(0, 10)}${ext.toLowerCase()}`
  };
}

async function saveOptimizedImage(buffer, outDir, safeFilename) {
  const sourceExt = path.extname(safeFilename);
  const baseName = path.basename(safeFilename, sourceExt);

  if (sharp) {
    const webpPath = path.join(outDir, `${baseName}.webp`);
    await sharp(buffer).webp({ quality: 82 }).toFile(webpPath);
    return webpPath;
  }

  const outPath = path.join(outDir, safeFilename);
  fs.writeFileSync(outPath, buffer);
  return outPath;
}

function readPreviousHashes() {
  const previous = readJson(MANIFEST_PATH, { downloaded: [] });
  return new Set((previous.downloaded || []).map((entry) => entry.hash).filter(Boolean));
}

function relativeProjectPath(filePath) {
  return path.relative(ROOT, filePath).replace(/\\/g, "/");
}

async function importAssets() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run") || process.env.npm_config_dry_run === "true";

  ensureDir(ASSETS_DIR);
  ensureDir(PUBLIC_IMPORT_DIR);

  const permissionsPath = path.join(ASSETS_DIR, "permissions.json");
  const sourceUrlsPath = path.join(ASSETS_DIR, "source-urls.json");
  const sourceUrlsExamplePath = path.join(ASSETS_DIR, "source-urls.example.json");

  const permissions = readJson(permissionsPath, { brand: "LUNA&SLEEP", permissionStatus: "UNKNOWN", allowedSources: [] });

  let sourceFileUsed = "none";
  let sourceUrls = { products: [] };

  if (fs.existsSync(sourceUrlsPath)) {
    sourceUrls = readJson(sourceUrlsPath, sourceUrls);
    sourceFileUsed = "assets/source-urls.json";
  } else if (fs.existsSync(sourceUrlsExamplePath)) {
    sourceUrls = readJson(sourceUrlsExamplePath, sourceUrls);
    sourceFileUsed = "assets/source-urls.example.json";
  }

  const allowedSources = (permissions.allowedSources || []).filter((source) => source.allowed);
  const seenHashes = readPreviousHashes();
  const manifest = {
    brand: permissions.brand || "LUNA&SLEEP",
    generatedAt: new Date().toISOString(),
    dryRun,
    sourceFileUsed,
    permissionStatus: permissions.permissionStatus || "UNKNOWN",
    downloaded: [],
    skipped: [],
    warnings: [],
    summary: {
      pagesChecked: 0,
      pagesSkipped: 0,
      imageUrlsFound: 0,
      imagesDownloaded: 0,
      imagesSkipped: 0,
      warnings: 0
    }
  };

  for (const product of sourceUrls.products || []) {
    const productSlug = slugify(product.slug || product.name || "unnamed");
    const outDir = path.join(PUBLIC_IMPORT_DIR, productSlug);

    if (!dryRun) {
      ensureDir(outDir);
    }

    for (const rawPageUrl of product.sourceUrls || []) {
      const page = parseUrl(rawPageUrl);

      if (!page) {
        manifest.skipped.push({
          productSlug,
          pageUrl: rawPageUrl,
          reason: "invalid-or-placeholder-url"
        });
        manifest.summary.pagesSkipped += 1;
        continue;
      }

      const pageUrl = page.toString();
      const matchedSource = findAllowedSourceForUrl(pageUrl, allowedSources);

      if (!matchedSource) {
        manifest.skipped.push({
          productSlug,
          pageUrl,
          reason: "page-domain-not-permitted"
        });
        manifest.summary.pagesSkipped += 1;
        continue;
      }

      manifest.summary.pagesChecked += 1;

      if (dryRun) {
        manifest.warnings.push({
          productSlug,
          pageUrl,
          permissionSource: matchedSource.name,
          note: "dry-run: page would be fetched"
        });
        continue;
      }

      let imageUrls = [];

      try {
        const html = await fetchText(pageUrl);
        imageUrls = extractImageUrlsFromHtml(pageUrl, html);
        manifest.summary.imageUrlsFound += imageUrls.length;
      } catch (error) {
        manifest.warnings.push({
          productSlug,
          pageUrl,
          note: `failed to fetch page: ${String(error)}`
        });
        continue;
      }

      for (const imageUrl of imageUrls) {
        if (!shouldImportImageForPage(imageUrl, pageUrl)) {
          manifest.skipped.push({
            productSlug,
            pageUrl,
            imageUrl,
            reason: "not-current-product-goods-image"
          });
          manifest.summary.imagesSkipped += 1;
          continue;
        }

        const imageSource = findAllowedSourceForUrl(imageUrl, allowedSources);

        if (!imageSource) {
          manifest.skipped.push({
            productSlug,
            pageUrl,
            imageUrl,
            reason: "image-domain-not-permitted"
          });
          manifest.summary.imagesSkipped += 1;
          continue;
        }

        try {
          const image = await fetchImage(imageUrl);
          const hash = sha256(image.buffer);

          if (seenHashes.has(hash)) {
            manifest.skipped.push({
              productSlug,
              pageUrl,
              imageUrl,
              reason: "duplicate-hash",
              hash
            });
            manifest.summary.imagesSkipped += 1;
            continue;
          }

          seenHashes.add(hash);
          const names = filenameFromUrl(imageUrl, image.contentType, hash);
          const savedPath = await saveOptimizedImage(image.buffer, outDir, names.safeFilename);
          const record = {
            productSlug,
            originalUrl: imageUrl,
            originalFilename: names.originalFilename,
            savedPath: relativeProjectPath(savedPath),
            downloadedAt: new Date().toISOString(),
            hash,
            sourcePage: pageUrl,
            permissionSource: imageSource.name,
            permissionStatus: permissions.permissionStatus || "UNKNOWN",
            contentType: image.contentType
          };

          manifest.downloaded.push(record);
          manifest.summary.imagesDownloaded += 1;
          console.log(`Saved ${record.savedPath}`);
        } catch (error) {
          manifest.warnings.push({
            productSlug,
            pageUrl,
            imageUrl,
            note: `failed to download image: ${String(error)}`
          });
        }
      }
    }
  }

  manifest.summary.warnings = manifest.warnings.length;
  writeJson(MANIFEST_PATH, manifest);

  if (manifest.warnings.length) {
    for (const warning of manifest.warnings) {
      console.warn(`Warning: ${JSON.stringify(warning)}`);
    }
  }

  console.log(`Asset import completed: ${relativeProjectPath(MANIFEST_PATH)}`);
}

importAssets().catch((error) => {
  console.error(`Unexpected import failure: ${String(error)}`);
  process.exitCode = 1;
});
