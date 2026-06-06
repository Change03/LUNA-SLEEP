const TODAY = "2026-06-06T00:00:00.000Z";
const DATA_VERSION = "2026-06-06-web-detail-content";

const sourceLabels = {
  DIRECT_SHOOT: "직접 촬영",
  BRAND_PROVIDED: "브랜드 제공",
  STORE_PERMISSION: "판매처 사용 허락",
  NEEDS_CONFIRMATION: "사용 권한 확인 필요"
};

const usageLabels = {
  THUMBNAIL: "대표",
  GALLERY: "갤러리",
  DETAIL: "상세",
  BANNER: "배너"
};

const reviewLabels = {
  salePrice: "판매가",
  originalPrice: "정상가",
  discountRate: "할인율",
  stock: "재고",
  shippingFee: "배송비",
  freeShippingThreshold: "무료배송 기준",
  countryOfOrigin: "제조국",
  manufacturer: "제조자",
  importer: "수입자",
  material: "소재",
  filling: "충전재",
  care: "세탁방법",
  warranty: "품질보증기준",
  certification: "KC/인증정보",
  servicePhone: "A/S 전화번호",
  businessInfo: "사업자 정보",
  ecommerceRegistration: "통신판매업신고번호"
};

const products = [
  {
    id: "prod-daily-cool",
    slug: "daily-cool-full-package-8pcs",
    name: "일상냉감 패드 풀패키지 8종세트",
    line: "Daily Cool",
    category: "침구",
    status: "ACTIVE",
    price: 89900,
    originalPrice: 89900,
    discountRate: 0,
    stock: 32,
    shippingFee: 3000,
    freeShippingThreshold: 50000,
    mainCopy: "매일 덮는 시원함, 편안함이 일상이 됩니다.",
    subCopy: "더운 계절의 침실을 산뜻하게 바꿔주는 루나앤슬립 시즌 패키지.",
    why: "한 번의 구성으로 침실 전체의 촉감과 분위기를 맞출 수 있도록 패드와 베개커버를 함께 담았습니다.",
    points: [
      "패드와 베개커버를 함께 구성한 실속형 풀패키지",
      "다마스크와 모던 디자인을 번갈아 사용할 수 있는 구성",
      "그레이, 블루, 화이트 컬러로 침실 분위기에 맞게 선택",
      "SS, Q, K 사이즈 구성",
      "매일 사용하기 좋은 산뜻한 촉감"
    ],
    composition: "냉감패드 2장, 냉감베개커버 4장, 베개솜 2개로 구성된 시즌 패키지",
    colors: ["그레이", "블루", "핑크"],
    sizes: ["SS", "Q", "K"],
    materialCare: "소재와 세탁법은 운영자 확인 후 확정합니다. 단독 세탁과 자연 건조를 권장합니다.",
    recommendedFor: ["여름 침실을 가볍게 바꾸고 싶은 분", "침구 컬러를 세트로 맞추고 싶은 분", "패드와 커버를 함께 준비하려는 분"],
    notice: "상세 상품정보고시는 운영자 확인 후 고시 항목에 맞춰 보강합니다.",
    shippingReturns: "결제 완료 후 순차 출고됩니다. 교환/반품 조건은 실제 운영 정책 적용 전까지 mock 기준으로 표시됩니다.",
    options: [
      { name: "사이즈", values: ["SS", "Q", "K"] },
      { name: "컬러", values: ["그레이", "블루", "핑크"] }
    ],
    reviewFields: makeReviewFields(["countryOfOrigin", "manufacturer", "material", "care", "certification", "businessInfo", "ecommerceRegistration"])
  },
  {
    id: "prod-memory-pillow",
    slug: "memory-cube-sleep-pillow",
    name: "기능성 메모리큐브 숙면베개",
    line: "Sleep Support",
    category: "베개",
    status: "ACTIVE",
    price: 71910,
    originalPrice: 79900,
    discountRate: 10,
    stock: 48,
    shippingFee: 3000,
    freeShippingThreshold: 50000,
    mainCopy: "하루의 끝을 편안하게 받쳐주는 숙면 베개.",
    subCopy: "머리와 목을 부드럽게 지지해 매일의 잠자리를 편안하게 완성합니다.",
    why: "매일 닿는 베개는 과한 장식보다 안정적인 형태와 관리하기 쉬운 구성이 중요하다고 보았습니다.",
    points: [
      "데일리 베개로 사용하기 좋은 균형감",
      "침실 분위기를 해치지 않는 깔끔한 디자인",
      "베개 4개와 커버 4장을 함께 담은 패키지",
      "화이트와 그레이 커버를 함께 구성한 실용적인 옵션"
    ],
    composition: "베개 4개 + 베개커버 4장",
    colors: ["화이트", "그레이"],
    sizes: ["40x60x5cm"],
    materialCare: "커버 분리 세탁 가능 여부와 충전재 정보는 운영자 확인 후 확정합니다.",
    recommendedFor: ["차분한 침실 분위기를 원하는 분", "매일 쓰는 베개를 실용적으로 고르고 싶은 분", "가족용 베개와 커버를 한 번에 준비하려는 분"],
    notice: "기능성 표현과 인증 정보는 근거 자료 확인 전까지 부드러운 표현으로 유지합니다.",
    shippingReturns: "제품 수령 후 사용 흔적이 없는 경우 mock 교환/반품 절차를 진행할 수 있습니다.",
    options: [
      { name: "구성", values: ["베개 4개 + 베개커버 4장"] },
      { name: "컬러", values: ["화이트 2개 + 그레이 2개"] }
    ],
    reviewFields: makeReviewFields(["filling", "care", "warranty", "certification", "servicePhone", "businessInfo", "ecommerceRegistration"])
  },
  {
    id: "prod-sofa-pad",
    slug: "cotton-quilting-washing-sofa-pad-carpet",
    name: "목화솜 자수퀼팅 통워싱 소파패드 & 카페트",
    line: "Living Soft",
    category: "리빙",
    status: "ACTIVE",
    price: 62910,
    originalPrice: 69900,
    discountRate: 10,
    stock: 21,
    shippingFee: 3000,
    freeShippingThreshold: 50000,
    mainCopy: "거실에 포근함을 더하는 루나앤슬립 리빙 패드.",
    subCopy: "소파 위, 거실 바닥, 침실 포인트 공간까지 부드럽게 정돈합니다.",
    why: "침실 밖 생활 공간에서도 루나앤슬립의 차분한 촉감과 색감을 이어갈 수 있도록 만든 리빙 라인입니다.",
    points: [
      "거실 공간에 어울리는 차분한 디자인",
      "소파패드와 카페트로 활용 가능한 구성",
      "계절에 맞춰 선택할 수 있는 소재감",
      "생활 공간을 편안하게 만드는 리빙 라인 제품"
    ],
    composition: "소파패드 2장 + 다용도 멀티매트 1장",
    colors: ["그레이", "베이지", "블루", "핑크"],
    sizes: ["소파패드 90x240cm", "멀티매트 40x60cm"],
    materialCare: "소재와 통워싱 상세 기준은 운영자 확인 후 확정합니다.",
    recommendedFor: ["거실 분위기를 정돈하고 싶은 분", "소파와 바닥을 함께 스타일링하려는 분", "부드러운 리빙 패드를 찾는 분"],
    notice: "제조자, 원산지, 소재 세부 정보는 운영자 확인 필요 상태입니다.",
    shippingReturns: "부피 상품의 배송비와 반품비는 실제 계약 택배 기준 확정 전까지 mock 기준입니다.",
    options: [
      { name: "구성", values: ["와이드 4인 패키지"] },
      { name: "컬러", values: ["그레이", "베이지", "블루", "핑크"] }
    ],
    reviewFields: makeReviewFields(["shippingFee", "countryOfOrigin", "manufacturer", "material", "care", "businessInfo", "ecommerceRegistration"])
  },
  {
    id: "prod-washing-spread",
    slug: "high-frequency-washing-spread-3pcs",
    name: "고주파 워싱 스프레드 3종 베개커버 패키지",
    line: "Sleep Line",
    category: "침구",
    status: "ACTIVE",
    price: 71910,
    originalPrice: 79900,
    discountRate: 10,
    stock: 35,
    shippingFee: 0,
    freeShippingThreshold: 0,
    mainCopy: "침실을 가볍고 단정하게 정돈하는 워싱 스프레드.",
    subCopy: "잠드는 순간의 편안함을 위해 차분한 패턴과 실용적인 구성을 담았습니다.",
    why: "루나앤슬립의 Sleep Line은 매일 쓰는 침구가 부담 없이 편안해야 한다는 생각에서 출발합니다.",
    points: [
      "침실 분위기를 부드럽게 만드는 차분한 패턴",
      "계절에 따라 단독 또는 레이어드로 사용 가능한 구성",
      "SS, Q, SK 사이즈 선택 가능",
      "베개커버 패키지 옵션으로 침구 톤을 맞추기 좋은 구성"
    ],
    composition: "스프레드 3장 + 베개커버 6장",
    colors: ["선데이", "프랑", "뜨왈"],
    sizes: ["SS", "Q", "SK"],
    materialCare: "소재와 세탁법은 운영자 확인 후 확정합니다. 중성세제 단독 세탁을 권장합니다.",
    recommendedFor: ["가볍게 침실을 바꾸고 싶은 분", "스프레드와 커버를 함께 맞추려는 분", "부담 없는 데일리 침구를 찾는 분"],
    notice: "상품정보고시 항목은 판매처 정보와 운영자 확인 자료를 기준으로 보강합니다.",
    shippingReturns: "무료배송 기준으로 표시하며, 실제 운영 정책 확정 시 교환/반품비를 반영합니다.",
    options: [
      { name: "구성", values: ["스프레드 3종", "베개커버 패키지"] },
      { name: "사이즈", values: ["SS", "Q", "SK"] }
    ],
    reviewFields: makeReviewFields(["material", "care", "warranty", "certification", "servicePhone", "businessInfo", "ecommerceRegistration"])
  },
  {
    id: "prod-blanket",
    slug: "soft-season-blanket",
    name: "루나앤슬립 시즌 블랭킷",
    line: "Season Touch",
    category: "블랭킷",
    status: "ACTIVE",
    price: 49000,
    originalPrice: 69000,
    discountRate: 29,
    stock: 40,
    shippingFee: 3000,
    freeShippingThreshold: 50000,
    mainCopy: "소파와 침대 어디서나 포근하게.",
    subCopy: "계절의 온도에 맞춰 일상의 휴식을 감싸주는 루나앤슬립 블랭킷.",
    why: "작은 휴식 공간에도 브랜드의 촉감과 색감을 더할 수 있도록 가볍게 쓰기 좋은 구성을 준비했습니다.",
    points: [
      "침대와 거실에서 함께 사용 가능",
      "포근한 촉감의 시즌 아이템",
      "선물용으로도 좋은 실용적인 구성",
      "공간에 부드러운 분위기를 더하는 디자인"
    ],
    composition: "블랭킷 단품",
    colors: ["크림", "세이지", "코랄"],
    sizes: ["싱글", "라지"],
    materialCare: "소재 혼용률과 세탁법은 운영자 확인 후 확정합니다.",
    recommendedFor: ["거실에서 가볍게 덮을 제품을 찾는 분", "선물용 침구 소품을 고르는 분", "침대 위 포인트 아이템이 필요한 분"],
    notice: "상세 고시 정보는 실제 판매 전 운영자 검수 항목에 따라 보강합니다.",
    shippingReturns: "mock 결제 완료 후 주문 내역에서 상태를 확인할 수 있습니다.",
    options: [
      { name: "사이즈", values: ["싱글", "라지"] },
      { name: "컬러", values: ["크림", "세이지", "코랄"] }
    ],
    reviewFields: makeReviewFields(["material", "care", "warranty", "certification", "servicePhone", "businessInfo", "ecommerceRegistration"])
  }
];

const sharedCare = [
  "30도 이하의 미지근한 물에 중성세제를 사용해 세탁하세요.",
  "세탁기 사용 시 다른 세탁물과 분리하고 울코스를 권장합니다.",
  "약하게 탈수한 뒤 그늘에서 건조하세요.",
  "염색제와 표백제 사용은 피해주세요.",
  "제품 라벨의 세탁 방법을 우선 확인하세요.",
  "건조기 사용은 권장하지 않습니다."
];

const sharedShipping = {
  delivery: "기본 무료배송, 제주/도서지역 추가 배송비 5,000원",
  schedule: "결제 다음날부터 최대 3일 이내 출고 기준, 토/일/공휴일 제외",
  returnFee: "단순 변심 반품/교환 배송비 6,000원, 제주/도서지역 추가 비용 별도",
  limitation: "사용 후에는 반품이 제한되며, 제품 하자는 수령 후 30일 이내 기준으로 안내합니다."
};

const productWebDetails = {
  "prod-daily-cool": {
    sourceUrl: "https://m.shinsegaetvshopping.com/display/detail/20072803",
    sourceLabel: "신세계쇼핑 냉감패드 상품정보와 브랜드 소개서 일상냉감 구성",
    specs: [
      ["상품번호", "20072803"],
      ["제품소재", "앞면 냉감 폴리에틸렌 100%, 뒷면 폴리에스터 100%, 충전재 폴리에스터 100%"],
      ["색상", "그레이 / 블루 / 핑크"],
      ["사이즈", "SS 110x200cm, Q 150x200cm, K 165x210cm"],
      ["구성", "냉감패드 2장, 냉감베개커버 4장, 베개솜 2개"],
      ["제조자", "(주)더하라OEM"],
      ["제조국", "중국"],
      ["품질보증", "공정거래위원회 고시 소비자분쟁해결기준 기준"],
      ["A/S", "(주)리빙룸 고객센터 070-5066-3434"]
    ],
    care: ["패드는 16kg 이상 세탁기 사용을 권장합니다.", ...sharedCare],
    faqs: [
      ["Q 사이즈 기준 구성은 어떻게 되나요?", "Q 기준 냉감패드와 베개커버 구성이 확인되며, 자사몰 패키지는 브랜드 소개서 기준의 베개솜 포함 풀패키지 옵션을 함께 안내합니다."],
      ["냉감 표현은 어떻게 쓰나요?", "확인된 소재와 구성 중심으로 표현하고, 검증 수치가 없는 성능 수치나 과장 표현은 사용하지 않습니다."],
      ["건조기를 사용할 수 있나요?", "제품 변형을 줄이기 위해 건조기 사용은 권장하지 않습니다."]
    ]
  },
  "prod-memory-pillow": {
    sourceUrl: "https://m.shinsegaetvshopping.com/display/detail/20072551",
    sourceLabel: "신세계쇼핑 메모리큐브 경추지지베개 상품정보",
    specs: [
      ["상품번호", "20072551"],
      ["제품소재", "겉감/안감/솜누빔 폴리에스터 100%, 3D 에어메쉬 폴리에스터 100%"],
      ["충전재", "폴리우레탄 1,000g 기준 메모리큐브 80% + 소프트화이버 20%, 기타 충전재 폴리에스터 100%"],
      ["색상", "화이트 / 그레이"],
      ["치수", "베개 40x60x5cm, 베개커버 41x61cm"],
      ["구성", "베개 4개 + 베개커버 4장"],
      ["제조자", "(주)더하라OEM"],
      ["제조국", "중국"],
      ["품질보증", "공정거래위원회 고시 소비자분쟁해결기준 기준"],
      ["A/S", "(주)리빙룸 고객센터 070-5066-3434"]
    ],
    care: sharedCare,
    faqs: [
      ["베개와 커버가 함께 오나요?", "현재 구성은 베개 4개와 베개커버 4장입니다."],
      ["커버 컬러는 어떻게 구성되나요?", "화이트 2개와 그레이 2개 구성으로 정리했습니다."],
      ["메모리큐브라는 표현은 어떻게 써야 하나요?", "상품명과 충전재 구성에 근거해 사용하고, 의학적 효과처럼 오해될 수 있는 표현은 피합니다."]
    ]
  },
  "prod-sofa-pad": {
    sourceUrl: "https://m.shinsegaetvshopping.com/display/detail/20072537",
    sourceLabel: "신세계쇼핑 목화솜 자수퀼팅 워싱 소파패드 상품정보",
    specs: [
      ["상품번호", "20072537"],
      ["제품소재", "겉감1 폴리에스터 100% 소프트플란넬, 겉감2 폴리에스터 100% 논슬립"],
      ["충전재", "면 96% + 폴리에스터 4% 목화솜"],
      ["색상", "그레이 / 베이지 / 블루 / 핑크"],
      ["치수", "소파패드 90x240cm, 다용도 멀티패드 40x60cm"],
      ["구성", "소파패드 2장 + 다용도 멀티매트 1장"],
      ["제조자", "(주)더하라OEM"],
      ["제조국", "중국"],
      ["품질보증", "공정거래위원회 고시 소비자분쟁해결기준 기준"],
      ["A/S", "(주)리빙룸 고객센터 070-5066-3434"]
    ],
    care: sharedCare,
    faqs: [
      ["미끄럼 방지 처리가 있나요?", "상품정보 기준 뒷면에 논슬립 원단이 사용된 구성입니다."],
      ["소파 외 공간에도 사용할 수 있나요?", "다용도 멀티매트가 포함되어 거실과 침실 포인트 공간에 함께 활용할 수 있습니다."],
      ["색상은 선택형인가요?", "판매처 기준 그레이, 베이지, 블루, 핑크 색상 선택형으로 정리했습니다."]
    ]
  },
  "prod-washing-spread": {
    sourceUrl: "https://m.shinsegaetvshopping.com/display/detail/20072391",
    sourceLabel: "신세계쇼핑 고주파 워싱 스프레드 패키지 상품정보",
    specs: [
      ["상품번호", "20072391"],
      ["제품소재", "겉감/안감/충전재 폴리에스터 100% 소프트플란넬"],
      ["색상", "선데이 / 프랑 / 뜨왈"],
      ["치수", "SS 스프레드 160x210cm, Q 180x210cm, SK 200x220cm, 베개커버 50x70cm"],
      ["구성", "스프레드 3장 + 베개커버 6장"],
      ["제조자", "(주)더하라OEM"],
      ["제조국", "중국"],
      ["품질보증", "공정거래위원회 고시 소비자분쟁해결기준 기준"],
      ["A/S", "(주)리빙룸 고객센터 070-5066-3434"]
    ],
    care: sharedCare,
    faqs: [
      ["베개커버 포함 패키지인가요?", "현재 연결한 상품은 스프레드 3장과 베개커버 6장 패키지입니다."],
      ["사이즈별 스프레드 크기가 다른가요?", "SS, Q, SK 옵션에 따라 스프레드 크기가 다르게 안내됩니다."],
      ["단독으로 써도 되나요?", "계절과 실내 온도에 따라 단독 또는 레이어드 침구로 사용할 수 있도록 설명했습니다."]
    ]
  },
  "prod-blanket": {
    sourceUrl: "루나앤슬립 브랜드 소개서-1.pptx",
    sourceLabel: "루나앤슬립 브랜드 소개서 Season Line 블랭킷 이미지/카피",
    specs: [
      ["라인", "Season Line"],
      ["제품명", "양면 밍크극세사 블랭킷"],
      ["구성", "블랭킷 단품"],
      ["사용 공간", "침대, 소파, 거실 휴식 공간"],
      ["확인 상태", "가격, 소재 혼용률, 제조국, A/S 정보는 운영자 확인 필요"]
    ],
    care: ["소재 혼용률과 세탁 라벨 확인 전까지 단독 약세탁과 자연 건조를 권장합니다."],
    faqs: [
      ["선물용으로 안내해도 되나요?", "브랜드 소개서 톤에 맞춰 실용적인 시즌 아이템으로 안내할 수 있습니다."],
      ["상세 고시 정보는 충분한가요?", "현재는 브랜드 소개서 기반이라 실제 판매 전 소재, 제조국, A/S 정보를 추가 확인해야 합니다."],
      ["어떤 계절 상품인가요?", "계절 온도에 맞춰 일상의 휴식을 감싸주는 Season Line 제품으로 구성했습니다."]
    ]
  }
};

for (const product of products) {
  Object.assign(product, productWebDetails[product.id] || {});
  product.shippingPolicy = sharedShipping;
}

const seedAssets = [
  ...assetsFor("prod-daily-cool", "STORE_PERMISSION", "https://m.shinsegaetvshopping.com/display/detail/20072803", "일상냉감 패드 풀패키지", [
    "public/images/products/imported/daily-cool-full-package-8pcs/20072803_l_20260408173906-25de892954.jpg",
    "public/images/products/imported/daily-cool-full-package-8pcs/20072803_i_20260408173906-d234ee03c5.jpg",
    "public/images/products/imported/daily-cool-full-package-8pcs/20072803_al_20260408173906-c184ddbf57.jpg",
    "public/images/products/imported/daily-cool-full-package-8pcs/20072803_bl_20260408173906-3c14cffe73.jpg",
    "public/images/products/imported/daily-cool-full-package-8pcs/20072803_cl_20260408173906-87672e3567.jpg"
  ]),
  ...assetsFor("prod-daily-cool", "BRAND_PROVIDED", "루나앤슬립 브랜드 소개서-1.pptx", "일상냉감 패드 풀패키지", [
    "public/images/products/brand-deck/daily-cool-full-package-8pcs/daily-cool-bedroom-blue.jpeg",
    "public/images/products/brand-deck/daily-cool-full-package-8pcs/daily-cool-colors.jpeg",
    "public/images/products/brand-deck/daily-cool-full-package-8pcs/daily-cool-white-bed.jpeg",
    "public/images/products/brand-deck/daily-cool-full-package-8pcs/daily-cool-pink-bed.jpeg",
    "public/images/products/brand-deck/daily-cool-full-package-8pcs/daily-cool-blue-close.jpeg",
    "public/images/products/brand-deck/daily-cool-full-package-8pcs/daily-cool-pillow-detail.jpeg",
    "public/images/products/brand-deck/daily-cool-full-package-8pcs/daily-cool-mat-detail.jpeg",
    "public/images/products/brand-deck/daily-cool-full-package-8pcs/daily-cool-pattern-detail.jpeg"
  ]),
  ...assetsFor("prod-memory-pillow", "STORE_PERMISSION", "https://m.shinsegaetvshopping.com/display/detail/20072551", "메모리큐브 숙면베개", [
    "public/images/products/imported/memory-cube-sleep-pillow/20072551_l_20260330174358-6f6c3b1395.jpg",
    "public/images/products/imported/memory-cube-sleep-pillow/20072551_i_20260330174358-048ca8798b.jpg",
    "public/images/products/imported/memory-cube-sleep-pillow/20072551_al_20260330174358-6f037aa0a8.jpg",
    "public/images/products/imported/memory-cube-sleep-pillow/20072551_bl_20260330174358-20e1f4e66b.jpg",
    "public/images/products/imported/memory-cube-sleep-pillow/20072551_cl_20260330174358-91487ed431.jpg",
    "public/images/products/imported/memory-cube-sleep-pillow/20072551_dl_20260330174358-9c9b16d8b5.jpg"
  ]),
  ...assetsFor("prod-washing-spread", "STORE_PERMISSION", "https://m.shinsegaetvshopping.com/display/detail/20072391", "고주파 워싱 스프레드", [
    "public/images/products/imported/high-frequency-washing-spread-3pcs/20072391_l_20260320160345-2622c8169d.jpg",
    "public/images/products/imported/high-frequency-washing-spread-3pcs/20072391_i_20260320160345-964d865b55.jpg",
    "public/images/products/imported/high-frequency-washing-spread-3pcs/20072391_al_20260320160345-d8eb30a36d.jpg",
    "public/images/products/imported/high-frequency-washing-spread-3pcs/20072391_bl_20260320160345-ac1fe4efed.jpg",
    "public/images/products/imported/high-frequency-washing-spread-3pcs/20072391_cl_20260320160345-142f31d364.jpg",
    "public/images/products/imported/high-frequency-washing-spread-3pcs/20072391_dl_20260320160345-b42e1e946a.jpg"
  ]),
  ...assetsFor("prod-washing-spread", "BRAND_PROVIDED", "루나앤슬립 브랜드 소개서-1.pptx", "고주파 워싱 스프레드", [
    "public/images/products/brand-deck/high-frequency-washing-spread-3pcs/washing-spread-white-bed.jpeg",
    "public/images/products/brand-deck/high-frequency-washing-spread-3pcs/washing-spread-stack.jpeg",
    "public/images/products/brand-deck/high-frequency-washing-spread-3pcs/washing-spread-room.jpeg"
  ]),
  ...assetsFor("prod-sofa-pad", "STORE_PERMISSION", "https://m.shinsegaetvshopping.com/display/detail/20072537", "소파패드와 카페트", [
    "public/images/products/imported/cotton-quilting-washing-sofa-pad-carpet/20072537_l_20260327165624-85c4e0a17c.jpg",
    "public/images/products/imported/cotton-quilting-washing-sofa-pad-carpet/20072537_i_20260327165624-55ff17a77d.jpg",
    "public/images/products/imported/cotton-quilting-washing-sofa-pad-carpet/20072537_al_20260327165624-c0962c44b8.jpg",
    "public/images/products/imported/cotton-quilting-washing-sofa-pad-carpet/20072537_bl_20260327165624-65056e7917.jpg",
    "public/images/products/imported/cotton-quilting-washing-sofa-pad-carpet/20072537_cl_20260327165624-43448b51f1.jpg",
    "public/images/products/imported/cotton-quilting-washing-sofa-pad-carpet/20072537_dl_20260327165624-b3dc372001.jpg"
  ]),
  ...assetsFor("prod-sofa-pad", "BRAND_PROVIDED", "루나앤슬립 브랜드 소개서-1.pptx", "소파패드와 카페트", [
    "public/images/products/brand-deck/cotton-quilting-washing-sofa-pad-carpet/sofa-pad-main.png",
    "public/images/products/brand-deck/cotton-quilting-washing-sofa-pad-carpet/sofa-pad-room.jpeg",
    "public/images/products/brand-deck/cotton-quilting-washing-sofa-pad-carpet/sofa-pad-colors.jpeg",
    "public/images/products/brand-deck/cotton-quilting-washing-sofa-pad-carpet/sofa-pad-gray-detail.jpeg",
    "public/images/products/brand-deck/cotton-quilting-washing-sofa-pad-carpet/sofa-pad-pink-detail.jpeg",
    "public/images/products/brand-deck/cotton-quilting-washing-sofa-pad-carpet/sofa-pad-blue-detail.jpeg",
    "public/images/products/brand-deck/cotton-quilting-washing-sofa-pad-carpet/sofa-pad-living-room.jpeg",
    "public/images/products/brand-deck/cotton-quilting-washing-sofa-pad-carpet/sofa-pad-cup-detail.jpeg",
    "public/images/products/brand-deck/cotton-quilting-washing-sofa-pad-carpet/sofa-pad-beige-detail.jpeg",
    "public/images/products/brand-deck/cotton-quilting-washing-sofa-pad-carpet/sofa-pad-pink-tray.jpeg"
  ]),
  ...assetsFor("prod-blanket", "BRAND_PROVIDED", "루나앤슬립 브랜드 소개서-1.pptx", "시즌 블랭킷", [
    "public/images/products/brand-deck/soft-season-blanket/blanket-bedroom.jpeg",
    "public/images/products/brand-deck/soft-season-blanket/blanket-pattern-blue.jpeg",
    "public/images/products/brand-deck/soft-season-blanket/blanket-pattern-cream.jpeg",
    "public/images/products/brand-deck/soft-season-blanket/blanket-gray-detail.jpeg",
    "public/images/products/brand-deck/soft-season-blanket/blanket-sofa.jpeg"
  ])
];

const seedOrders = [
  {
    id: "ORD-20260606-001",
    createdAt: TODAY,
    customer: "샘플 고객",
    total: 129000,
    status: "결제 mock 완료",
    items: [{ productId: "prod-daily-cool", qty: 1 }]
  }
];

const seedCoupons = [
  { id: "CP-WELCOME", name: "웰컴 10%", discount: "10%", enabled: true },
  { id: "CP-SLEEP", name: "슬립 라인 5천원", discount: "5,000원", enabled: false }
];

const seedReviews = [
  { id: "RV-001", productId: "prod-daily-cool", author: "sample", rating: 5, body: "관리자 승인 흐름 확인용 리뷰입니다.", approved: false }
];

const seedQnas = [
  { id: "QA-001", productId: "prod-memory-pillow", author: "sample", question: "커버 포함 옵션이 있나요?", answer: "", status: "대기" }
];

if (localStorage.getItem("luna:dataVersion") !== DATA_VERSION) {
  localStorage.removeItem("luna:adminAssets");
  localStorage.setItem("luna:dataVersion", DATA_VERSION);
}

const state = {
  cart: readStorage("cart", []),
  user: readStorage("user", null),
  assets: readStorage("adminAssets", seedAssets),
  orders: readStorage("orders", seedOrders),
  coupons: readStorage("coupons", seedCoupons),
  reviews: readStorage("reviews", seedReviews),
  qnas: readStorage("qnas", seedQnas),
  selectedImage: {}
};

function makeReviewFields(needsKeys) {
  const fields = {};
  for (const key of Object.keys(reviewLabels)) {
    fields[key] = {
      value: "",
      status: needsKeys.includes(key) ? "NEEDS_CONFIRMATION" : "CONFIRMED"
    };
  }
  return fields;
}

function asset(id, productId, fileName, filePath, sourceType, sourceUrl, alt, usageType, isApproved, sortOrder) {
  const permissionNotes = {
    DIRECT_SHOOT: "운영자가 직접 촬영한 이미지.",
    BRAND_PROVIDED: "루나앤슬립 브랜드 소개서에서 추출한 이미지. 관계자 사용 허가 확인.",
    STORE_PERMISSION: "루나앤슬립 관계자 허가 범위 안에서 판매처 상품 이미지 사용.",
    NEEDS_CONFIRMATION: "출처와 허락 범위 확인 전까지 고객 화면 비노출."
  };

  return {
    id,
    productId,
    fileName,
    filePath,
    sourceType,
    sourceUrl,
    permissionNote: permissionNotes[sourceType],
    alt,
    usageType,
    isApproved,
    sortOrder,
    createdAt: TODAY,
    updatedAt: TODAY
  };
}

function assetsFor(productId, sourceType, sourceUrl, altBase, filePaths) {
  return filePaths.map((filePath, index) => {
    const normalized = filePath.replaceAll("\\", "/");
    const fileName = normalized.split("/").pop();
    return asset(
      `asset-${productId}-${sourceType.toLowerCase()}-${index + 1}`,
      productId,
      fileName,
      normalized,
      sourceType,
      sourceUrl,
      `${altBase} ${index + 1}`,
      index === 0 ? "THUMBNAIL" : "GALLERY",
      true,
      index + 1
    );
  });
}

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(`luna:${key}`);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(`luna:${key}`, JSON.stringify(value));
}

function money(value) {
  return `${Number(value || 0).toLocaleString("ko-KR")}원`;
}

function priceMarkup(product, style = "") {
  const showDiscount = Number(product.discountRate) > 0;
  const showOriginal = Number(product.originalPrice) > Number(product.price);
  return `
    <div class="price-row" ${style ? `style="${style}"` : ""}>
      ${showDiscount ? `<span class="discount">${product.discountRate}%</span>` : ""}
      <span class="price">${money(product.price)}</span>
      ${showOriginal ? `<span class="original">${money(product.originalPrice)}</span>` : ""}
    </div>
  `;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function slugify(value) {
  const slug = String(value || "")
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[-\s]+/g, "-");
  return slug || "manual-upload";
}

function byId(id) {
  return products.find((product) => product.id === id);
}

function bySlug(slug) {
  return products.find((product) => product.slug === slug);
}

function pathToSrc(assetOrPath) {
  const value = typeof assetOrPath === "string" ? assetOrPath : assetOrPath.previewUrl || assetOrPath.filePath;
  if (!value) {
    return "/public/images/products/placeholder/daily-cool-placeholder.png";
  }
  if (value.startsWith("data:") || value.startsWith("blob:") || value.startsWith("http") || value.startsWith("/")) {
    return value;
  }
  return `/${value}`;
}

function assetPriority(assetItem, product) {
  const filePath = assetItem.filePath || "";
  if (filePath.includes(`/imported/${product.slug}/`) || filePath.includes(`\\imported\\${product.slug}\\`)) {
    return 1;
  }
  if (filePath.startsWith("public/images/products/") && assetItem.sourceType === "BRAND_PROVIDED" && !filePath.includes("/placeholder/")) {
    return 2;
  }
  if (filePath.includes(`/manual/${product.slug}/`) || filePath.includes(`\\manual\\${product.slug}\\`)) {
    return 3;
  }
  return 4;
}

function visibleAssets(product, usageTypes) {
  const types = Array.isArray(usageTypes) ? usageTypes : [usageTypes];
  const assets = state.assets
    .filter((assetItem) => assetItem.productId === product.id)
    .filter((assetItem) => types.includes(assetItem.usageType))
    .filter((assetItem) => assetItem.isApproved && assetItem.sourceType !== "NEEDS_CONFIRMATION")
    .sort((a, b) => assetPriority(a, product) - assetPriority(b, product) || a.sortOrder - b.sortOrder);

  return assets.length ? assets : seedAssets.filter((assetItem) => assetItem.productId === product.id && assetItem.usageType === "THUMBNAIL");
}

function primaryImage(product) {
  return visibleAssets(product, ["THUMBNAIL", "GALLERY"])[0];
}

function needsReview(product) {
  return Object.values(product.reviewFields).some((field) => field.status === "NEEDS_CONFIRMATION");
}

function reviewNeededLabels(product) {
  return Object.entries(product.reviewFields)
    .filter(([, field]) => field.status === "NEEDS_CONFIRMATION")
    .map(([key]) => reviewLabels[key]);
}

function cartCount() {
  return state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function cartTotal() {
  return state.cart.reduce((sum, item) => sum + item.qty * item.price, 0);
}

function setActiveNav() {
  const current = location.pathname;
  document.querySelectorAll("[data-route]").forEach((link) => {
    const href = link.getAttribute("href");
    link.classList.toggle("active", href === current || (href !== "/" && current.startsWith(href)));
  });
  document.getElementById("cart-count").textContent = String(cartCount());
}

function go(path) {
  history.pushState(null, "", path);
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toast(message) {
  const node = document.getElementById("toast");
  node.textContent = message;
  node.classList.add("show");
  clearTimeout(window.lunaToastTimer);
  window.lunaToastTimer = setTimeout(() => node.classList.remove("show"), 2200);
}

function render() {
  setActiveNav();
  const path = location.pathname;

  if (path === "/") return renderHome();
  if (path.startsWith("/products/")) return renderProduct(path.split("/").pop());
  if (path === "/cart") return renderCart();
  if (path === "/checkout") return renderCheckout();
  if (path === "/login") return renderLogin();
  if (path === "/mypage") return renderMypage();
  if (path.startsWith("/admin")) return renderAdmin(path);
  if (path.startsWith("/order-complete/")) return renderOrderComplete(path.split("/").pop());

  return renderNotFound();
}

function renderHome() {
  document.getElementById("app").innerHTML = `
    <section class="hero">
      <div class="hero-media"><img src="/public/images/brand/brand-hero-bed.jpeg" alt="루나앤슬립 침실 스타일링"></div>
      <div class="hero-copy">
        <p class="eyebrow">Sleep / Living / Season</p>
        <h1>LUNA&SLEEP</h1>
        <p>잠이 드는 방부터 하루가 머무는 거실까지, 매일 닿는 촉감과 계절의 온도를 차분하게 설계합니다.</p>
        <div class="hero-actions">
          <a class="solid-button" href="#products">상품 보기</a>
          <a class="ghost-button" href="#brand-lines">브랜드 라인</a>
        </div>
      </div>
      <div class="hero-strip">
        <span><strong>Sleep Line</strong> 침실을 단정하게</span>
        <span><strong>Living Line</strong> 거실을 부드럽게</span>
        <span><strong>Season Line</strong> 계절을 산뜻하게</span>
      </div>
    </section>
    <section id="products">
      <div class="section-title">
        <div>
          <p class="eyebrow">Curated Collection</p>
          <h2>집 안의 편안함을 고르는 방식</h2>
          <p>수면, 생활 공간, 계절까지 필요한 장면별로 구성했습니다.</p>
        </div>
      </div>
      <div class="product-grid">
        ${products.map(productCard).join("")}
      </div>
    </section>
    <section class="brand-band">
      <div>
        <p class="eyebrow">Brand Definition</p>
        <h2>편안함을 누구나 일상으로.</h2>
      </div>
      <p>루나앤슬립은 고가의 프리미엄보다 매일 부담 없이 누릴 수 있는 합리적인 편안함을 제안합니다. 좋은 수면과 생활 공간의 휴식이 자연스럽게 이어지는 브랜드를 지향합니다.</p>
    </section>
    <section id="brand-lines" class="line-grid">
      ${lineCard("Sleep Line", "잠드는 순간의 편안함", "베개, 스프레드, 이불처럼 하루의 끝을 편안하게 만드는 제품군입니다.", "/public/images/products/brand-deck/high-frequency-washing-spread-3pcs/washing-spread-room.jpeg")}
      ${lineCard("Living Line", "머무는 순간의 편안함", "소파패드와 카페트로 거실과 침실 포인트 공간의 휴식을 정돈합니다.", "/public/images/products/brand-deck/cotton-quilting-washing-sofa-pad-carpet/sofa-pad-living-room.jpeg")}
      ${lineCard("Season Line", "환경에 맞는 편안함", "여름 냉감과 겨울 블랭킷처럼 계절의 온도에 맞는 휴식을 제안합니다.", "/public/images/products/brand-deck/daily-cool-full-package-8pcs/daily-cool-bedroom-blue.jpeg")}
    </section>
    <section class="cool-band">
      <img src="/public/images/brand/daily-cool-logo.png" alt="일상냉감">
      <div>
        <p class="eyebrow">LUNA&SLEEP COOL LINE</p>
        <h2>매일 덮는 시원함, 편안함이 일상이 됩니다.</h2>
        <p>일상냉감은 더운 계절에도 과하지 않게, 충분히 산뜻한 침실을 만드는 루나앤슬립의 시즌 라인입니다.</p>
      </div>
    </section>
  `;
}

function lineCard(title, subtitle, body, image) {
  return `
    <article class="line-card">
      <img src="${escapeHtml(image)}" alt="${escapeHtml(title)}">
      <div>
        <span class="line-label">${escapeHtml(title)}</span>
        <h3>${escapeHtml(subtitle)}</h3>
        <p>${escapeHtml(body)}</p>
      </div>
    </article>
  `;
}

function productCard(product) {
  const image = primaryImage(product);
  return `
    <article class="product-card">
      <a href="/products/${product.slug}" data-route>
        <div class="product-media">
          <img src="${escapeHtml(pathToSrc(image))}" alt="${escapeHtml(image.alt || product.name)}" loading="lazy">
        </div>
        <div class="product-body">
          <span class="line-label">${escapeHtml(product.line)}</span>
          <h3>${escapeHtml(product.name)}</h3>
          <p class="product-summary">${escapeHtml(product.composition)}</p>
          ${priceMarkup(product)}
          <div class="product-meta">
            <span>${escapeHtml(product.category)}</span>
            <span>${product.shippingFee === 0 ? "무료배송" : `${money(product.freeShippingThreshold)} 이상 무료배송`}</span>
          </div>
        </div>
      </a>
    </article>
  `;
}

function renderProduct(slug) {
  const product = bySlug(slug);
  if (!product) return renderNotFound();

  const gallery = visibleAssets(product, ["THUMBNAIL", "GALLERY"]);
  const selectedId = state.selectedImage[product.id] || gallery[0].id;
  const selected = gallery.find((assetItem) => assetItem.id === selectedId) || gallery[0];
  const detailImages = visibleAssets(product, "DETAIL");

  document.getElementById("app").innerHTML = `
    <section class="detail-layout">
      <div class="gallery-shell">
        <div class="gallery-main">
          <img src="${escapeHtml(pathToSrc(selected))}" alt="${escapeHtml(selected.alt || product.name)}">
        </div>
        <div class="thumbnail-carousel">
          <button class="gallery-arrow" type="button" data-action="gallery-scroll" data-track-id="thumbs-${product.id}" data-delta="-1" aria-label="이전 이미지">‹</button>
          <div id="thumbs-${product.id}" class="thumbnail-row">
            ${gallery.map((assetItem) => `
              <button class="thumb-button ${assetItem.id === selected.id ? "active" : ""}" data-action="select-image" data-product-id="${product.id}" data-asset-id="${assetItem.id}" aria-label="이미지 선택">
                <img src="${escapeHtml(pathToSrc(assetItem))}" alt="${escapeHtml(assetItem.alt || product.name)}" loading="lazy">
              </button>
            `).join("")}
          </div>
          <button class="gallery-arrow" type="button" data-action="gallery-scroll" data-track-id="thumbs-${product.id}" data-delta="1" aria-label="다음 이미지">›</button>
        </div>
      </div>
      <div class="detail-copy">
        <span class="line-label">${escapeHtml(product.line)}</span>
        <h1>${escapeHtml(product.mainCopy)}</h1>
        <p class="subcopy">${escapeHtml(product.subCopy)}</p>
        ${priceMarkup(product, "margin-top: 18px;")}
        <div class="product-brief">
          <div><span>구성</span><strong>${escapeHtml(product.composition)}</strong></div>
          <div><span>컬러</span><strong>${escapeHtml(product.colors.slice(0, 4).join(" / "))}</strong></div>
          <div><span>사이즈</span><strong>${escapeHtml(product.sizes.join(" / "))}</strong></div>
        </div>
        <form data-form="add-cart" data-product-id="${product.id}">
          <div class="option-grid">
            ${product.options.map((option) => `
              <label class="field">
                <span>${escapeHtml(option.name)}</span>
                <select name="${escapeHtml(option.name)}">
                  ${option.values.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("")}
                </select>
              </label>
            `).join("")}
            <label class="field">
              <span>수량</span>
              <input type="number" name="qty" value="1" min="1" max="99">
            </label>
          </div>
          <div class="button-row">
            <button class="solid-button" type="submit">장바구니 담기</button>
            <a class="ghost-button" href="/cart" data-route>장바구니 보기</a>
          </div>
        </form>
      </div>
    </section>
    <section class="content-sections">
      ${detailSection("브랜드가 제안하는 편안함", product.why)}
      ${pointsSection(product)}
      ${detailSection("구성", product.composition)}
      ${detailSection("컬러", product.colors.join(", "))}
      ${detailSection("사이즈", product.sizes.join(", "))}
      ${listSection("이런 분께 추천", product.recommendedFor)}
      ${productNoticeSection(product)}
      ${careNoticeSection(product)}
      ${shippingReturnsSection(product)}
      ${faqSection(product)}
      ${detailImages.length ? `
        <div class="detail-section">
          <h2>상세 이미지</h2>
          ${detailImages.map((assetItem) => `<img src="${escapeHtml(pathToSrc(assetItem))}" alt="${escapeHtml(assetItem.alt)}" loading="lazy">`).join("")}
        </div>
      ` : ""}
      ${reviewQnaSection(product)}
    </section>
  `;
}

function detailSection(title, body) {
  return `
    <div class="detail-section">
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(body)}</p>
    </div>
  `;
}

function pointsSection(product) {
  return `
    <div class="detail-section">
      <h2>상품 포인트</h2>
      <ul class="point-grid">
        ${product.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
      </ul>
    </div>
  `;
}

function listSection(title, items) {
  return `
    <div class="detail-section">
      <h2>${escapeHtml(title)}</h2>
      <ul>
        ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </div>
  `;
}

function productNoticeSection(product) {
  if (!product.specs?.length) {
    return detailSection("상품정보고시", product.notice);
  }
  return `
    <div class="detail-section">
      <h2>상품정보고시</h2>
      <table class="spec-table">
        <tbody>
          ${product.specs.map(([label, value]) => `
            <tr>
              <th>${escapeHtml(label)}</th>
              <td>${escapeHtml(value)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function careNoticeSection(product) {
  const items = product.care?.length ? product.care : [product.materialCare];
  return `
    <div class="detail-section">
      <h2>세탁 및 주의사항</h2>
      <ul class="notice-list">
        ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </div>
  `;
}

function shippingReturnsSection(product) {
  const policy = product.shippingPolicy || {};
  const rows = [
    ["배송비", policy.delivery || product.shippingReturns],
    ["출고 기준", policy.schedule || "결제 완료 후 순차 출고"],
    ["교환/반품비", policy.returnFee || "운영 정책에 따라 안내"],
    ["반품 제한", policy.limitation || "사용 흔적이 있는 상품은 반품이 제한될 수 있습니다."]
  ];
  return `
    <div class="detail-section">
      <h2>배송/교환/반품</h2>
      <div class="policy-grid">
        ${rows.map(([label, value]) => `
          <div class="policy-item">
            <strong>${escapeHtml(label)}</strong>
            <span>${escapeHtml(value)}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function faqSection(product) {
  if (!product.faqs?.length) {
    return "";
  }
  return `
    <div class="detail-section">
      <h2>자주 묻는 질문</h2>
      <div class="faq-list">
        ${product.faqs.map(([question, answer]) => `
          <details>
            <summary>${escapeHtml(question)}</summary>
            <p>${escapeHtml(answer)}</p>
          </details>
        `).join("")}
      </div>
    </div>
  `;
}

function reviewQnaSection(product) {
  const reviews = state.reviews.filter((review) => review.productId === product.id && review.approved);
  const qnas = state.qnas.filter((qna) => qna.productId === product.id && qna.answer);
  return `
    <div class="detail-section">
      <h2>리뷰</h2>
      ${reviews.length ? reviews.map((review) => `<p><strong>${escapeHtml(review.author)}</strong> ${"★".repeat(review.rating)}<br>${escapeHtml(review.body)}</p>`).join("") : `<p>아직 등록된 리뷰가 없습니다.</p>`}
    </div>
    <div class="detail-section">
      <h2>Q&A</h2>
      ${qnas.length ? qnas.map((qna) => `<p><strong>Q.</strong> ${escapeHtml(qna.question)}<br><strong>A.</strong> ${escapeHtml(qna.answer)}</p>`).join("") : `<p>아직 답변 완료된 문의가 없습니다.</p>`}
    </div>
  `;
}

function renderCart() {
  const items = state.cart.map((item) => ({ ...item, product: byId(item.productId) })).filter((item) => item.product);
  document.getElementById("app").innerHTML = `
    <div class="section-title">
      <div>
        <h1>장바구니</h1>
        <p>선택한 상품을 확인하세요.</p>
      </div>
    </div>
    <section class="two-column">
      <div class="cart-list">
        ${items.length ? items.map(cartItem).join("") : `<div class="empty-state">장바구니가 비어 있습니다.</div>`}
      </div>
      <aside class="summary-box">
        <div class="summary-line"><span>상품 금액</span><strong>${money(cartTotal())}</strong></div>
        <div class="summary-line"><span>배송비</span><strong>${state.cart.length ? money(3000) : money(0)}</strong></div>
        <div class="summary-line"><span>합계</span><strong>${money(cartTotal() + (state.cart.length ? 3000 : 0))}</strong></div>
        <div class="button-row" style="margin-top: 16px;">
          <a class="solid-button" href="/checkout" data-route>주문하기</a>
          <a class="ghost-button" href="/" data-route>계속 쇼핑</a>
        </div>
      </aside>
    </section>
  `;
}

function cartItem(item, index) {
  const options = Object.entries(item.options || {}).map(([key, value]) => `${key}: ${value}`).join(" / ");
  return `
    <article class="cart-item">
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.product.name)}">
      <div>
        <strong>${escapeHtml(item.product.name)}</strong>
        <p>${escapeHtml(options)}</p>
        <div class="price-row"><span class="price">${money(item.price)}</span></div>
      </div>
      <div class="button-row">
        <button class="ghost-button" data-action="qty" data-index="${index}" data-delta="-1">-</button>
        <strong>${item.qty}</strong>
        <button class="ghost-button" data-action="qty" data-index="${index}" data-delta="1">+</button>
        <button class="ghost-button danger-button" data-action="remove-cart" data-index="${index}">삭제</button>
      </div>
    </article>
  `;
}

function renderCheckout() {
  if (!state.cart.length) {
    go("/cart");
    return;
  }

  document.getElementById("app").innerHTML = `
    <div class="section-title">
      <div>
        <h1>주문/결제</h1>
        <p>배송지와 결제 정보를 입력하세요.</p>
      </div>
    </div>
    <form class="admin-card" data-form="checkout">
      <div class="checkout-grid">
        <label class="field"><span>주문자명</span><input name="customer" required value="${escapeHtml(state.user?.name || "")}"></label>
        <label class="field"><span>연락처</span><input name="phone" required placeholder="010-0000-0000"></label>
        <label class="field wide"><span>배송지</span><input name="address" required placeholder="주소 입력"></label>
        <label class="field"><span>결제수단</span><select name="payment"><option>카드 mock</option><option>무통장 mock</option><option>네이버페이 연결 예정</option></select></label>
        <label class="field"><span>쿠폰</span><select name="coupon"><option value="">선택 안 함</option>${state.coupons.filter((coupon) => coupon.enabled).map((coupon) => `<option>${escapeHtml(coupon.name)}</option>`).join("")}</select></label>
      </div>
      <div class="summary-box" style="margin-top: 16px;">
        <div class="summary-line"><span>상품 금액</span><strong>${money(cartTotal())}</strong></div>
        <div class="summary-line"><span>배송비</span><strong>${money(3000)}</strong></div>
        <div class="summary-line"><span>결제 예정</span><strong>${money(cartTotal() + 3000)}</strong></div>
      </div>
      <div class="button-row" style="margin-top: 16px;">
        <button class="solid-button" type="submit">mock 결제 완료</button>
        <a class="ghost-button" href="/cart" data-route>이전</a>
      </div>
    </form>
  `;
}

function renderOrderComplete(orderId) {
  const order = state.orders.find((item) => item.id === orderId);
  document.getElementById("app").innerHTML = `
    <section class="auth-panel">
      <h1>주문 완료</h1>
      <p>${order ? `${escapeHtml(order.customer)}님의 주문 ${escapeHtml(order.id)} 이 접수되었습니다.` : "주문 정보를 찾을 수 없습니다."}</p>
      <div class="button-row">
        <a class="solid-button" href="/mypage" data-route>마이페이지</a>
        <a class="ghost-button" href="/" data-route>쇼핑으로</a>
      </div>
    </section>
  `;
}

function renderLogin() {
  document.getElementById("app").innerHTML = `
    <div class="section-title"><h1>로그인</h1></div>
    <form class="auth-panel" data-form="login">
      <div class="auth-grid">
        <label class="field"><span>이름</span><input name="name" required value="루나 고객"></label>
        <label class="field"><span>이메일</span><input type="email" name="email" required value="hello@lunasleep.local"></label>
        <label class="field wide"><span>비밀번호</span><input type="password" name="password" required value="password"></label>
      </div>
      <div class="button-row" style="margin-top: 16px;">
        <button class="solid-button" type="submit">로그인</button>
        <a class="ghost-button" href="/mypage" data-route>마이페이지</a>
      </div>
    </form>
  `;
}

function renderMypage() {
  if (!state.user) {
    document.getElementById("app").innerHTML = `
      <section class="auth-panel">
        <h1>마이페이지</h1>
        <p>로그인이 필요합니다.</p>
        <a class="solid-button" href="/login" data-route>로그인</a>
      </section>
    `;
    return;
  }

  const orders = state.orders.filter((order) => order.customer === state.user.name || order.customer === "샘플 고객");
  document.getElementById("app").innerHTML = `
    <div class="section-title">
      <div>
        <h1>마이페이지</h1>
        <p>${escapeHtml(state.user.name)}님의 주문 내역</p>
      </div>
      <button class="ghost-button" data-action="logout">로그아웃</button>
    </div>
    <div class="simple-list">
      ${orders.map((order) => `
        <article class="admin-card">
          <strong>${escapeHtml(order.id)}</strong>
          <p>${escapeHtml(order.status)} · ${money(order.total)}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function renderAdmin(path) {
  const page = path.split("/")[2] || "products";
  const routes = [
    ["products", "상품"],
    ["assets", "자료 업로드"],
    ["orders", "주문"],
    ["coupons", "쿠폰"],
    ["reviews", "리뷰"],
    ["qna", "Q&A"]
  ];
  const content = {
    products: adminProducts(),
    assets: adminAssets(),
    orders: adminOrders(),
    coupons: adminCoupons(),
    reviews: adminReviews(),
    qna: adminQna()
  }[page] || adminProducts();

  document.getElementById("app").innerHTML = `
    <div class="section-title">
      <div>
        <h1>관리자</h1>
        <p>운영 데이터</p>
      </div>
    </div>
    <section class="admin-layout">
      <nav class="admin-nav" aria-label="관리자 메뉴">
        ${routes.map(([key, label]) => `<a class="${key === page ? "active" : ""}" href="/admin/${key}" data-route>${label}</a>`).join("")}
      </nav>
      <div class="admin-grid">${content}</div>
    </section>
  `;
}

function adminProducts() {
  const params = new URLSearchParams(location.search);
  const filter = params.get("filter") || "all";
  const rows = products.filter((product) => filter === "review" ? needsReview(product) : true);
  return `
    <div class="admin-card">
      <div class="button-row">
        <a class="pill-button ${filter === "all" ? "active" : ""}" href="/admin/products" data-route>전체</a>
        <a class="pill-button ${filter === "review" ? "active" : ""}" href="/admin/products?filter=review" data-route>검수 필요</a>
      </div>
    </div>
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead><tr><th>상품</th><th>상태</th><th>가격</th><th>검수 필요</th><th>작업</th></tr></thead>
        <tbody>
          ${rows.map((product) => `
            <tr>
              <td><strong>${escapeHtml(product.name)}</strong><br><span class="line-label">${escapeHtml(product.line)}</span></td>
              <td><span class="status-chip active">${escapeHtml(product.status)}</span></td>
              <td>${money(product.price)}<br><span class="original">${money(product.originalPrice)}</span></td>
              <td>${needsReview(product) ? `<span class="status-chip needs">운영자 확인 필요</span><p class="warning-text">${escapeHtml(reviewNeededLabels(product).join(", "))}</p>` : `<span class="status-chip confirmed">확인 완료</span>`}</td>
              <td><button class="ghost-button" data-action="activate-product" data-product-id="${product.id}">ACTIVE 전환</button></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function adminAssets() {
  return `
    <form class="admin-card" data-form="asset-upload">
      <h2>자료 업로드</h2>
      <div class="upload-grid">
        <label class="field"><span>상품</span><select name="productId">${products.map((product) => `<option value="${product.id}">${escapeHtml(product.name)}</option>`).join("")}</select></label>
        <label class="field"><span>사용 위치</span><select name="usageType">${Object.entries(usageLabels).map(([key, label]) => `<option value="${key}">${label}</option>`).join("")}</select></label>
        <label class="field"><span>허락 상태</span><select name="sourceType">${Object.entries(sourceLabels).map(([key, label]) => `<option value="${key}">${label}</option>`).join("")}</select></label>
        <label class="field"><span>정렬 순서</span><input name="sortOrder" type="number" min="1" value="1"></label>
        <label class="field wide"><span>alt text</span><input name="alt" required placeholder="상품 이미지 설명"></label>
        <label class="field wide"><span>출처 URL</span><input name="sourceUrl" placeholder="허락받은 상품 URL 또는 원본 위치"></label>
        <label class="field wide"><span>허락 메모</span><textarea name="permissionNote" placeholder="허락 범위와 확인자 메모"></textarea></label>
        <label class="file-input wide">이미지 파일 선택<input name="file" type="file" accept="image/*"></label>
        <label class="field"><span>승인</span><select name="isApproved"><option value="true">승인</option><option value="false">확인 전</option></select></label>
      </div>
      <div class="button-row" style="margin-top: 16px;">
        <button class="solid-button" type="submit">저장</button>
      </div>
    </form>
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead>
          <tr>
            <th>미리보기</th><th>파일명</th><th>경로</th><th>출처 URL</th><th>permission status</th><th>alt text</th><th>대표</th><th>순서</th><th>작업</th>
          </tr>
        </thead>
        <tbody>
          ${state.assets.slice().sort((a, b) => a.productId.localeCompare(b.productId) || a.sortOrder - b.sortOrder).map(assetRow).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function assetRow(assetItem) {
  const product = byId(assetItem.productId);
  const permissionClass = assetItem.sourceType === "NEEDS_CONFIRMATION" || !assetItem.isApproved ? "needs" : "confirmed";
  return `
    <tr>
      <td><img class="asset-preview" src="${escapeHtml(pathToSrc(assetItem))}" alt="${escapeHtml(assetItem.alt)}"></td>
      <td><strong>${escapeHtml(assetItem.fileName)}</strong><br><span>${escapeHtml(product?.name || "공통")}</span></td>
      <td>${escapeHtml(assetItem.filePath)}</td>
      <td>${assetItem.sourceUrl ? escapeHtml(assetItem.sourceUrl) : "-"}</td>
      <td><span class="source-chip ${assetItem.sourceType}">${escapeHtml(sourceLabels[assetItem.sourceType])}</span><br><span class="status-chip ${permissionClass}">${assetItem.isApproved ? "approved" : "needs confirmation"}</span></td>
      <td>${escapeHtml(assetItem.alt)}</td>
      <td>${assetItem.usageType === "THUMBNAIL" ? "대표" : usageLabels[assetItem.usageType]}</td>
      <td>${assetItem.sortOrder}</td>
      <td>
        <div class="button-row">
          <button class="ghost-button" data-action="toggle-asset" data-asset-id="${assetItem.id}">${assetItem.isApproved ? "비승인" : "승인"}</button>
          <button class="ghost-button" data-action="move-asset" data-asset-id="${assetItem.id}" data-delta="-1">위</button>
          <button class="ghost-button" data-action="move-asset" data-asset-id="${assetItem.id}" data-delta="1">아래</button>
          <label class="ghost-button">교체<input class="hidden-file" data-file-action="replace-asset" data-asset-id="${assetItem.id}" type="file" accept="image/*"></label>
          <button class="ghost-button danger-button" data-action="delete-asset" data-asset-id="${assetItem.id}">삭제</button>
        </div>
      </td>
    </tr>
  `;
}

function adminOrders() {
  return `
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead><tr><th>주문번호</th><th>고객</th><th>금액</th><th>상태</th><th>작업</th></tr></thead>
        <tbody>
          ${state.orders.map((order) => `
            <tr>
              <td>${escapeHtml(order.id)}</td>
              <td>${escapeHtml(order.customer)}</td>
              <td>${money(order.total)}</td>
              <td><span class="status-chip mock">${escapeHtml(order.status)}</span></td>
              <td><button class="ghost-button" data-action="advance-order" data-order-id="${order.id}">상태 변경</button></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function adminCoupons() {
  return `
    <div class="admin-card">
      <form class="button-row" data-form="coupon">
        <input name="name" placeholder="쿠폰명" required>
        <input name="discount" placeholder="할인" required>
        <button class="solid-button" type="submit">쿠폰 추가</button>
      </form>
    </div>
    <div class="simple-list">
      ${state.coupons.map((coupon) => `
        <article class="admin-card">
          <strong>${escapeHtml(coupon.name)}</strong>
          <p>${escapeHtml(coupon.discount)} · ${coupon.enabled ? "사용" : "중지"}</p>
          <button class="ghost-button" data-action="toggle-coupon" data-coupon-id="${coupon.id}">${coupon.enabled ? "중지" : "사용"}</button>
        </article>
      `).join("")}
    </div>
  `;
}

function adminReviews() {
  return `
    <div class="simple-list">
      ${state.reviews.map((review) => {
        const product = byId(review.productId);
        return `
          <article class="admin-card">
            <strong>${escapeHtml(product?.name || "상품")}</strong>
            <p>${escapeHtml(review.body)}</p>
            <span class="status-chip ${review.approved ? "confirmed" : "needs"}">${review.approved ? "승인" : "대기"}</span>
            <div class="button-row" style="margin-top: 10px;"><button class="ghost-button" data-action="toggle-review" data-review-id="${review.id}">${review.approved ? "숨김" : "승인"}</button></div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function adminQna() {
  return `
    <div class="simple-list">
      ${state.qnas.map((qna) => {
        const product = byId(qna.productId);
        return `
          <article class="admin-card">
            <strong>${escapeHtml(product?.name || "상품")}</strong>
            <p><b>Q.</b> ${escapeHtml(qna.question)}</p>
            <p><b>A.</b> ${escapeHtml(qna.answer || "답변 대기")}</p>
            <button class="ghost-button" data-action="answer-qna" data-qna-id="${qna.id}">답변</button>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function renderNotFound() {
  document.getElementById("app").innerHTML = `
    <section class="empty-state">
      <h1>페이지를 찾을 수 없습니다.</h1>
      <a class="solid-button" href="/" data-route>쇼핑으로</a>
    </section>
  `;
}

function formDataObject(form) {
  const formData = new FormData(form);
  const values = {};
  for (const [key, value] of formData.entries()) {
    if (!(value instanceof File)) {
      values[key] = value;
    }
  }
  return values;
}

function fileToDataUrl(file) {
  return new Promise((resolve) => {
    if (!file || !file.size) {
      resolve("");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => resolve("");
    reader.readAsDataURL(file);
  });
}

function saveAssets() {
  writeStorage("adminAssets", state.assets);
}

function saveCart() {
  writeStorage("cart", state.cart);
  setActiveNav();
}

document.addEventListener("click", (event) => {
  const route = event.target.closest("[data-route]");
  if (route) {
    event.preventDefault();
    go(route.getAttribute("href"));
    return;
  }

  const actionNode = event.target.closest("[data-action]");
  if (!actionNode) {
    return;
  }

  const action = actionNode.dataset.action;

  if (action === "select-image") {
    state.selectedImage[actionNode.dataset.productId] = actionNode.dataset.assetId;
    render();
  }

  if (action === "gallery-scroll") {
    const track = document.getElementById(actionNode.dataset.trackId);
    if (track) {
      track.scrollBy({
        left: Number(actionNode.dataset.delta) * Math.max(220, track.clientWidth * 0.78),
        behavior: "smooth"
      });
    }
  }

  if (action === "qty") {
    const index = Number(actionNode.dataset.index);
    const delta = Number(actionNode.dataset.delta);
    state.cart[index].qty = Math.max(1, state.cart[index].qty + delta);
    saveCart();
    renderCart();
  }

  if (action === "remove-cart") {
    state.cart.splice(Number(actionNode.dataset.index), 1);
    saveCart();
    renderCart();
  }

  if (action === "logout") {
    state.user = null;
    writeStorage("user", null);
    toast("로그아웃되었습니다.");
    renderMypage();
  }

  if (action === "activate-product") {
    const product = byId(actionNode.dataset.productId);
    if (needsReview(product)) {
      alert(`운영자 확인 필요 항목이 남아 있습니다.\n${reviewNeededLabels(product).join(", ")}`);
    } else {
      toast("ACTIVE 상태로 전환 가능합니다.");
    }
  }

  if (action === "toggle-asset") {
    const assetItem = state.assets.find((item) => item.id === actionNode.dataset.assetId);
    assetItem.isApproved = !assetItem.isApproved;
    assetItem.updatedAt = new Date().toISOString();
    saveAssets();
    renderAdmin("/admin/assets");
  }

  if (action === "move-asset") {
    const assetItem = state.assets.find((item) => item.id === actionNode.dataset.assetId);
    assetItem.sortOrder = Math.max(1, Number(assetItem.sortOrder) + Number(actionNode.dataset.delta));
    assetItem.updatedAt = new Date().toISOString();
    saveAssets();
    renderAdmin("/admin/assets");
  }

  if (action === "delete-asset") {
    state.assets = state.assets.filter((item) => item.id !== actionNode.dataset.assetId);
    saveAssets();
    renderAdmin("/admin/assets");
  }

  if (action === "advance-order") {
    const order = state.orders.find((item) => item.id === actionNode.dataset.orderId);
    const next = {
      "결제 mock 완료": "배송 준비",
      "배송 준비": "배송중",
      "배송중": "배송 완료",
      "배송 완료": "배송 완료"
    };
    order.status = next[order.status] || "배송 준비";
    writeStorage("orders", state.orders);
    renderAdmin("/admin/orders");
  }

  if (action === "toggle-coupon") {
    const coupon = state.coupons.find((item) => item.id === actionNode.dataset.couponId);
    coupon.enabled = !coupon.enabled;
    writeStorage("coupons", state.coupons);
    renderAdmin("/admin/coupons");
  }

  if (action === "toggle-review") {
    const review = state.reviews.find((item) => item.id === actionNode.dataset.reviewId);
    review.approved = !review.approved;
    writeStorage("reviews", state.reviews);
    renderAdmin("/admin/reviews");
  }

  if (action === "answer-qna") {
    const qna = state.qnas.find((item) => item.id === actionNode.dataset.qnaId);
    const answer = prompt("답변 입력", qna.answer || "확인 후 안내드리겠습니다.");
    if (answer !== null) {
      qna.answer = answer;
      qna.status = "답변 완료";
      writeStorage("qnas", state.qnas);
      renderAdmin("/admin/qna");
    }
  }
});

document.addEventListener("submit", async (event) => {
  const form = event.target;
  const formName = form.dataset.form;
  if (!formName) {
    return;
  }

  event.preventDefault();

  if (formName === "add-cart") {
    const product = byId(form.dataset.productId);
    const values = formDataObject(form);
    const qty = Math.max(1, Number(values.qty || 1));
    delete values.qty;
    const image = pathToSrc(primaryImage(product));
    const key = `${product.id}:${JSON.stringify(values)}`;
    const existing = state.cart.find((item) => item.key === key);

    if (existing) {
      existing.qty += qty;
    } else {
      state.cart.push({ key, productId: product.id, qty, options: values, price: product.price, image });
    }

    saveCart();
    toast("장바구니에 담았습니다.");
  }

  if (formName === "checkout") {
    const values = formDataObject(form);
    const orderId = `ORD-${Date.now()}`;
    const total = cartTotal() + 3000;
    const order = {
      id: orderId,
      createdAt: new Date().toISOString(),
      customer: values.customer,
      phone: values.phone,
      address: values.address,
      payment: values.payment,
      coupon: values.coupon,
      total,
      status: "결제 mock 완료",
      items: state.cart.map((item) => ({ productId: item.productId, qty: item.qty, options: item.options }))
    };
    state.orders.unshift(order);
    state.cart = [];
    writeStorage("orders", state.orders);
    saveCart();
    go(`/order-complete/${orderId}`);
  }

  if (formName === "login") {
    const values = formDataObject(form);
    state.user = { name: values.name, email: values.email };
    writeStorage("user", state.user);
    toast("로그인되었습니다.");
    go("/mypage");
  }

  if (formName === "asset-upload") {
    const values = formDataObject(form);
    const product = byId(values.productId);
    const file = form.elements.file.files[0];
    const fileName = file?.name || `${product.slug}-manual-upload.png`;
    const safeFileName = `${slugify(fileName.replace(/\.[^.]+$/, ""))}${fileName.includes(".") ? fileName.slice(fileName.lastIndexOf(".")).toLowerCase() : ".png"}`;
    const previewUrl = await fileToDataUrl(file);
    const sourceType = values.sourceType;
    const newAsset = {
      id: `asset-${Date.now()}`,
      productId: product.id,
      fileName: safeFileName,
      filePath: `public/images/products/manual/${product.slug}/${safeFileName}`,
      sourceType,
      sourceUrl: values.sourceUrl || null,
      permissionNote: values.permissionNote || (sourceType === "NEEDS_CONFIRMATION" ? "운영자 확인 필요" : "운영자 확인 완료"),
      alt: values.alt,
      usageType: values.usageType,
      isApproved: values.isApproved === "true" && sourceType !== "NEEDS_CONFIRMATION",
      sortOrder: Number(values.sortOrder || 1),
      previewUrl,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    state.assets.push(newAsset);
    saveAssets();
    toast("이미지를 저장했습니다.");
    renderAdmin("/admin/assets");
  }

  if (formName === "coupon") {
    const values = formDataObject(form);
    state.coupons.unshift({ id: `CP-${Date.now()}`, name: values.name, discount: values.discount, enabled: true });
    writeStorage("coupons", state.coupons);
    renderAdmin("/admin/coupons");
  }
});

document.addEventListener("change", async (event) => {
  const input = event.target;
  if (input.dataset.fileAction !== "replace-asset") {
    return;
  }

  const file = input.files[0];
  if (!file) {
    return;
  }

  const assetItem = state.assets.find((item) => item.id === input.dataset.assetId);
  const product = byId(assetItem.productId);
  const fileName = `${slugify(file.name.replace(/\.[^.]+$/, ""))}${file.name.includes(".") ? file.name.slice(file.name.lastIndexOf(".")).toLowerCase() : ".png"}`;
  assetItem.fileName = fileName;
  assetItem.filePath = `public/images/products/manual/${product.slug}/${fileName}`;
  assetItem.previewUrl = await fileToDataUrl(file);
  assetItem.updatedAt = new Date().toISOString();
  saveAssets();
  toast("이미지를 교체했습니다.");
  renderAdmin("/admin/assets");
});

window.addEventListener("popstate", render);
render();
