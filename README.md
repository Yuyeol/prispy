## 기능 요구사항

### 검색

- 초성 검색 (es-hangul) 상품명, 브랜드 명 일치

### 크롤링

- 상품명, 브뢘드 명, 가격 (자동 기입), 확장 ( LLM API 활용 PoC )
- 크롤링 html이 변경되어 오류발생 확인 시 ai로 새로운 로직 작성 요청
- 요청한 크롤링 html이 이전과 동일할 경우 캐싱
- 상품 고유 식별자 필요(플랫폼끼리 동일 상품 가격 추이 비교에 용이하도록).

## 페이지 구성

### 홈

- 헤더
  - 북마크 검색
  - 북마크 등록 ( 상품 )
    - 플러스 버튼
- 메인
  - 북마크 등록 모달
  - 데이터
    - 상품명
    - 브랜드명
    - 가격
  - 북마크 리스트
    - 데이터
      - 썸네일: thumbnail?
      - 브랜드(제조사): brand_name?
      - 상품명: product_name
      - 설명: description?
      - 주소: url
    - 수정/삭제 버튼

### 가격비교

- 대시보드
  - 기간별 가격 추이(상품 플랫폼별 가격 비교까지)

## 기술스택

Frontend

- Nextjs tailwindcss, shadcn ui, lucid icons, theme
- Tanstack query, Zustand

Backend

- API: nextjs api route
- DB: supabase postgresql

Deploy

- Vercel

