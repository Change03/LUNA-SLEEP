# 루나앤슬립 이미지/상품 관리 구현 메모

## 이미지 매칭 우선순위

상품 이미지는 고객 화면에서 출처 정보를 직접 노출하지 않고, 관리자에서만 출처와 허락 상태를 확인한다.

1. `public/images/products/imported/{productSlug}/` 안의 허락받은 쇼핑몰 이미지
2. `public/images/products/` 안에 직접 넣은 브랜드 소개서 추출 이미지
3. `public/images/products/manual/{productSlug}/` 안에 운영자가 직접 넣은 이미지
4. `public/images/products/placeholder/` 안의 브랜드형 placeholder 이미지

권한 상태가 `NEEDS_CONFIRMATION` 이거나 `isApproved` 가 `false` 인 이미지는 고객 화면에 노출하지 않는다.

## AdminAsset 모델

| 필드 | 설명 |
| --- | --- |
| `id` | 관리자 자산 ID |
| `productId` | 연결 상품 ID, 공통 배너는 `null` |
| `fileName` | 원본 또는 저장 파일명 |
| `filePath` | 프로젝트 저장 경로 |
| `sourceType` | `DIRECT_SHOOT`, `BRAND_PROVIDED`, `STORE_PERMISSION`, `NEEDS_CONFIRMATION` |
| `sourceUrl` | 출처 URL, 직접 업로드는 `null` 가능 |
| `permissionNote` | 허락 범위와 확인 메모 |
| `alt` | 접근성/SEO용 대체 텍스트 |
| `usageType` | `THUMBNAIL`, `GALLERY`, `DETAIL`, `BANNER` |
| `isApproved` | 고객 화면 노출 승인 여부 |
| `sortOrder` | 상품별 이미지 정렬 순서 |
| `createdAt` | 생성 시각 |
| `updatedAt` | 수정 시각 |

## 운영자 업로드 플로우

1. `/admin/assets` 에서 상품, 사용 위치, 출처 유형, alt text, 허락 메모를 입력한다.
2. `NEEDS_CONFIRMATION` 으로 저장된 이미지는 고객 화면에서 숨긴다.
3. 운영자가 출처와 허락 범위를 확인한 뒤 `isApproved` 를 켠다.
4. 대표 이미지는 `usageType=THUMBNAIL`, 가장 낮은 `sortOrder` 를 우선 사용한다.
5. 이미지 교체와 삭제는 관리자 화면에서만 수행한다.

## 실제 자료 수령 시 처리

운영자가 사진 ZIP을 제공하면 `public/images/products/manual/{productSlug}/` 에 압축을 풀고 파일명을 안전한 영문 slug로 정리한다. 운영자가 상품 URL을 제공하면 `assets/source-urls.json` 에 입력한 뒤 `npm run import:assets -- --dry-run` 으로 허락 도메인 매칭을 확인하고, 이후 `npm run import:assets` 로 가져온다. 운영자가 상세페이지 통이미지를 제공하면 `public/images/products/detail/{productSlug}/` 에 저장하고 상세 하단에서 lazy loading으로 렌더링한다.

## 상품 데이터 검수 필드

다음 필드는 `CONFIRMED` 또는 `NEEDS_CONFIRMATION` 상태를 함께 저장한다.

- 판매가
- 정상가
- 할인율
- 재고
- 배송비
- 무료배송 기준
- 제조국
- 제조자
- 수입자
- 소재
- 충전재
- 세탁방법
- 품질보증기준
- KC/인증정보
- A/S 전화번호
- 사업자 정보
- 통신판매업신고번호

검수 필요 필드가 남아 있어도 개발 seed에서는 임시 `ACTIVE` 를 허용하되, 관리자 목록과 상품 상세에 `운영자 확인 필요` 문구를 표시한다.
