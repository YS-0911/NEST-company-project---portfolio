# 🏠 NEST 인테리어 회사 웹사이트

> 자연친화적인 감성의 현대적 포트폴리오 웹사이트

## 📁 프로젝트 구조

```
NEST-Website/
│
├── 📄 index.html                      # 메인페이지
├── 📄 portfolio.html                  # 포트폴리오 상세페이지
├── 📄 README.md                       # 프로젝트 설명서
│
├── 📁 css/                            # 스타일시트
│   ├── variables.css                  # CSS 변수 (색상, 폰트, 간격)
│   ├── reset.css                      # CSS 리셋
│   ├── common.css                     # 공통 스타일 (Nav, Footer)
│   ├── main.css                       # 메인페이지 스타일
│   └── portfolio.css                  # 포트폴리오 페이지 스타일
│
├── 📁 js/                             # JavaScript 파일
│   ├── main.js                        # 메인 스크립트 (네비게이션, 스크롤)
│   ├── animations.js                  # 애니메이션 (Parallax, CountUp)
│   └── portfolio.js                   # 포트폴리오 스크립트
│
├── 📁 images/                         # 이미지 폴더
│   ├── logo.png                       # NEST 로고
│   ├── hero-bg.jpg                    # 히어로 배경 이미지
│   ├── 📁 portfolio/                  # 포트폴리오 프로젝트 이미지
│   │   ├── project1-1.jpg
│   │   ├── project1-2.jpg
│   │   ├── project1-before.jpg
│   │   ├── project1-after.jpg
│   │   └── ...
│   └── 📁 icons/                      # 아이콘
│       ├── home.svg
│       ├── building.svg
│       └── ...
│
├── 📁 data/                           # 데이터 파일
│   └── projects.json                  # 포트폴리오 프로젝트 데이터
│
└── 📁 docs/                           # 문서
    ├── PROJECT_SETUP.md               # 프로젝트 설정 가이드
    ├── COLOR_PALETTE.md               # 색상 팔레트 설명
    ├── TYPOGRAPHY.md                  # 타이포그래피 가이드
    └── DEVELOPMENT_LOG.md             # 개발 로그
```

---

## 🎨 색상 팔레트

| 색상 | HEX 코드 | 용도 |
|------|----------|------|
| **Primary** | `#2d5f3f` | 포인트, 버튼, CTA |
| **Base** | `#c4a89b` | 메인 배경, 카드 |
| **Secondary** | `#a8b8a8` | 보조 배경, 테두리 |
| **Accent** | `#d4a574` | 악센트 포인트 |
| **Dark** | `#3d2f26` | 텍스트, 제목 |
| **Light** | `#f5f3f0` | 라이트 배경 |

---

## 🔤 폰트

- **Heading**: Poppins (Google Fonts)
- **Body**: Noto Sans KR (Google Fonts)
- **Accent**: Playfair Display (Google Fonts)

---

## 📐 반응형 브레이크포인트

```
모바일:   0px ~ 768px
태블릿:   768px ~ 1024px
데스크톱: 1024px+
```

---

## 🚀 개발 순서

### Phase 1: 구조 설계 (HTML)
- [ ] `index.html` - 메인페이지 HTML 구조 작성
- [ ] `portfolio.html` - 포트폴리오 상세페이지 HTML 구조 작성
- [ ] 시맨틱 마크업 적용

### Phase 2: 스타일링 (CSS)
- [ ] `variables.css` - CSS 변수 정의 (이미 완료)
- [ ] `reset.css` - CSS 리셋 작성
- [ ] `common.css` - 네비게이션, 푸터 스타일
- [ ] `main.css` - 메인페이지 섹션별 스타일
- [ ] `portfolio.css` - 포트폴리오 페이지 스타일
- [ ] 반응형 미디어쿼리 작성

### Phase 3: 상호작용 (JavaScript)
- [ ] `main.js` - 네비게이션(Sticky), 스크롤 이벤트
- [ ] `animations.js` - Parallax, CountUp, Fade-in 애니메이션
- [ ] `portfolio.js` - 라이트박스, 네비게이션
- [ ] 폼 유효성 검사

### Phase 4: 최적화 & 테스트
- [ ] 브라우저 호환성 테스트 (Chrome, Firefox, Safari, Edge)
- [ ] 반응형 테스트 (DevTools)
- [ ] 성능 최적화 (이미지 압축, CSS 최소화)
- [ ] 접근성 검사 (WCAG)

### Phase 5: 리팩토링 (최종)
- [ ] 코드 정리 및 최적화
- [ ] 주석 추가
- [ ] 변수명 정규화
- [ ] 파일 구조 정리

---

## 🛠️ 개발 환경 설정

### 필요한 도구
- **VSCode** (선택사항: Live Server 확장)
- **Chrome DevTools** (반응형 테스트)
- **Git** (버전 관리)

### VSCode 추천 확장프로그램
- Live Server
- CSS Peek
- JavaScript Snippets
- Prettier (코드 포매팅)

### 실행 방법

1. **Live Server 이용** (권장)
   ```
   index.html 파일 우클릭 → "Open with Live Server"
   ```

2. **로컬 서버 실행**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # 또는 Python 2
   python -m SimpleHTTPServer 8000
   ```

3. **직접 브라우저에서 열기**
   ```
   index.html을 브라우저에 드래그 드롭
   (동적 콘텐츠 로드에 제한이 있을 수 있음)
   ```

---

## 📋 CSS 변수 사용 방법

모든 색상, 폰트, 간격은 CSS 변수로 관리됩니다. `variables.css`를 항상 가장 먼저 로드하세요.

### 예시
```css
/* colors */
background-color: var(--color-primary);
color: var(--color-text-primary);

/* fonts */
font-family: var(--font-heading);
font-size: var(--fs-h1);

/* spacing */
padding: var(--spacing-lg);
margin: var(--spacing-md);

/* transitions */
transition: all var(--transition-normal);
```

---

## 🎬 주요 기능

### 메인페이지
- ✅ Sticky 네비게이션
- ✅ Parallax 히어로 배경
- ✅ 부드러운 스크롤 애니메이션
- ✅ 포트폴리오 갤러리 (호버 효과)
- ✅ 숫자 카운팅 애니메이션
- ✅ 반응형 레이아웃

### 포트폴리오 상세페이지
- ✅ 프로젝트 상세 정보
- ✅ 라이트박스 갤러리
- ✅ Before/After 비교
- ✅ 이전/다음 네비게이션
- ✅ 모달 팝업

---

## 🔧 커스터마이징

### 색상 변경
`css/variables.css`에서 CSS 변수를 수정하면 전체 사이트의 색상이 자동으로 변경됩니다.

```css
:root {
  --color-primary: #새로운색상;
  --color-base: #새로운색상;
  /* ... */
}
```

### 텍스트 수정
각 HTML 파일에서 해당 섹션의 텍스트를 직접 수정하세요.

### 이미지 추가
1. 이미지를 `images/portfolio/` 폴더에 저장
2. `data/projects.json`에서 이미지 경로 추가
3. HTML에서 해당 이미지 참조

---

## 📊 파일 크기 가이드

- **HTML**: < 50KB
- **CSS**: < 100KB (변수 포함)
- **JavaScript**: < 80KB
- **이미지**: 압축 권장 (총 < 5MB)

---

## 🌐 브라우저 호환성

| 브라우저 | 버전 | 지원 |
|---------|------|------|
| Chrome | 최신 | ✅ |
| Firefox | 최신 | ✅ |
| Safari | 최신 | ✅ |
| Edge | 최신 | ✅ |
| IE 11 | - | ❌ |

---

## 📱 반응형 테스트 체크리스트

### 모바일 (320px ~ 768px)
- [ ] 메뉴가 햄버거로 표시됨
- [ ] 텍스트가 읽기 쉬움
- [ ] 이미지가 적절히 스케일됨
- [ ] 버튼이 충분히 큼 (최소 44x44px)
- [ ] 스크롤이 부드러움

### 태블릿 (768px ~ 1024px)
- [ ] 2열 그리드 표시
- [ ] 레이아웃 균형잡힘
- [ ] 터치 인터페이스 최적화

### 데스크톱 (1024px+)
- [ ] 3열 그리드 표시
- [ ] 호버 효과 작동
- [ ] 마우스 커서 변경

---

## 🐛 디버깅 팁

### 콘솔 확인
```javascript
console.log("메시지");  // 일반 로그
console.warn("경고");    // 경고
console.error("에러");   // 에러
```

### 개발자 도구 활용
1. **F12** 또는 **Ctrl+Shift+I** (Windows) / **Cmd+Option+I** (Mac)
2. **Elements** 탭에서 HTML/CSS 검사
3. **Console** 탭에서 JavaScript 에러 확인
4. **Network** 탭에서 파일 로딩 확인

### 반응형 테스트
1. DevTools 열기
2. **Toggle device toolbar** (Ctrl+Shift+M)
3. 다양한 해상도에서 테스트

---

## 📚 추가 자료

### CSS
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### JavaScript
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

### 성능 최적화
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

---

## 💬 피드백 및 수정

개발 과정에서 필요한 수정 사항은 주석으로 표시하세요:

```html
<!-- TODO: 이 부분을 수정해야 함 -->
<!-- FIXME: 버그가 있는 부분 -->
<!-- NOTE: 중요한 참고사항 -->
<!-- HACK: 임시 해결책 -->
```

---

## 📝 라이선스

이 프로젝트는 NEST 인테리어 회사의 공식 웹사이트입니다.

---

## 🎯 최종 체크리스트

### 개발 전
- [x] 프로젝트 구조 설계
- [x] CSS 변수 작성
- [x] 데이터 JSON 작성
- [ ] 이미지 준비

### 개발 중
- [ ] HTML 작성
- [ ] CSS 스타일링
- [ ] JavaScript 상호작용
- [ ] 반응형 테스트

### 배포 전
- [ ] 모든 링크 확인
- [ ] 폼 제출 테스트
- [ ] 속도 최적화
- [ ] 접근성 검사
- [ ] 브라우저 호환성 테스트
- [ ] 최종 코드 리뷰

---

**프로젝트 시작 준비 완료! 행운을 빕니다! 🚀**

---

**마지막 업데이트**: 2024년 3월
**개발자**: NEST 웹개발팀
**상태**: 개발 진행 중

