# WEEKLY NEWS - MARKET NOW

AI 트렌드와 최신 인사이트를 한 곳에서 제공하는 랜딩페이지입니다.

## 🚀 주요 기능

- **CEO's Digest 팟캐스트**: 최신 시장 트렌드와 AI 기술 동향 분석
- **AI 전문가 커뮤니티**: 챗대리, 게으른일잘러 등 전문가들의 커뮤니티 링크
- **위클리 AI 트렌드**: 매주 업데이트되는 AI 트렌드 콘텐츠
- **AI 웨비나**: 클로드 MCP 등 최신 기술 웨비나 안내

## 🛠️ 기술 스택

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 (반응형 디자인)
- **Font**: Pretendard (한글 최적화)

## 📦 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

### 3. 빌드
```bash
npm run build
```

### 4. 빌드 결과 미리보기
```bash
npm run preview
```

## 📁 프로젝트 구조

```
marketnow/
├── public/
│   ├── pod/           # 팟캐스트 오디오 파일
│   └── pdf/           # 팟캐스트 요약본 PDF
├── src/
│   ├── components/    # React 컴포넌트
│   ├── App.tsx        # 메인 앱 컴포넌트
│   ├── main.tsx       # 앱 진입점
│   └── index.css      # 전역 스타일
├── package.json
├── vite.config.ts
└── README.md
```

## 🎨 디자인 시스템

### 색상 팔레트
- **강조색 (Accent)**: `#F26922`
- **섹션 배경**: `#FE693C`
- **배경**: `#FFFFFF`
- **텍스트**: `#000000`

### 폰트
- **본문**: Pretendard-Regular
- **제목**: Pretendard-SemiBold

## 📝 설정 가이드

### 1. 팟캐스트 파일 업로드
1. `public/pod/` 디렉토리에 MP3 파일 업로드
2. 파일명을 `ceo-digest-episode.mp3`로 변경

### 2. PDF 요약본 업로드
1. `public/pdf/` 디렉토리에 PDF 파일 업로드
2. 파일명을 `ceo-digest-summary.pdf`로 변경

### 3. 커뮤니티 링크 설정
`src/components/CommunitySection.tsx`에서 각 전문가의 커뮤니티 URL을 실제 링크로 수정

### 4. 웨비나 신청 링크 설정
`src/components/WebinarBanner.tsx`에서 웨비나 신청 페이지 URL을 실제 링크로 수정

## 🌐 배포

### Vercel 배포 (권장)
1. GitHub에 코드 푸시
2. Vercel에서 프로젝트 연결
3. 자동 배포 완료

### Netlify 배포
1. `npm run build` 실행
2. `dist` 폴더를 Netlify에 업로드

## 📱 반응형 디자인

- **데스크톱**: 1200px 이상
- **태블릿**: 768px - 1199px
- **모바일**: 767px 이하

## 🔧 커스터마이징

### 색상 변경
`src/index.css`에서 CSS 변수를 수정하여 색상을 변경할 수 있습니다.

### 폰트 변경
`index.html`에서 Google Fonts 링크를 수정하여 폰트를 변경할 수 있습니다.

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여

버그 리포트나 기능 제안은 이슈를 통해 제출해주세요.

---

**WEEKLY NEWS - MARKET NOW** | AI 트렌드와 최신 인사이트를 한 곳에서 