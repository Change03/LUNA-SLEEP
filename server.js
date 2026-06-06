const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const root = __dirname;
const port = Number(process.env.PORT || 5173);
const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml; charset=utf-8"
};

function resolveRequestPath(requestUrl) {
  const url = new URL(requestUrl, `http://localhost:${port}`);
  const decoded = decodeURIComponent(url.pathname);
  const requested = path.normalize(path.join(root, decoded));

  if (!requested.startsWith(root)) {
    return null;
  }

  if (fs.existsSync(requested) && fs.statSync(requested).isFile()) {
    return requested;
  }

  if (fs.existsSync(requested) && fs.statSync(requested).isDirectory()) {
    const indexPath = path.join(requested, "index.html");
    if (fs.existsSync(indexPath)) {
      return indexPath;
    }
  }

  return path.join(root, "index.html");
}

http
  .createServer((req, res) => {
    const filePath = resolveRequestPath(req.url || "/");

    if (!filePath) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }

      res.writeHead(200, {
        "content-type": contentTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream"
      });
      res.end(data);
    });
  })
  .listen(port, () => {
    console.log(`LUNA&SLEEP mock mall running at http://localhost:${port}`);
  });
