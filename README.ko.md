# Planova

**Planova**는 크롬 새 탭 페이지를 개인 일정 관리 대시보드로 대체하는 확장 프로그램입니다.
시계, 인사말, 할 일 목록, 월간 캘린더를 한 화면에서 제공하며 모든 데이터는 브라우저에 로컬로 저장됩니다.

📄 [View this in English](./README.md)

## 📁 프로젝트 구조

```plaintext
Planova/
├── Extension/
│   ├── manifest.json     ← Manifest v3
│   ├── index.html        ← 새 탭 페이지
│   ├── assets/           ← 아이콘 및 배경 이미지
│   ├── css/              ← 모듈별 스타일시트
│   └── js/               ← script / menu / todo / calendar / userbox / background
├── LICENSE.md
├── README.md             ← 영어 문서
└── README.ko.md          ← 한글 문서
```

## 🔧 주요 기능
- 날짜 지정 가능한 할 일 관리
- 할 일 표시와 키워드 검색이 가능한 월간 캘린더
- 사용자 이름 및 프로필 이미지 설정
- 시스템 테마(라이트/다크)에 맞춰 변경되는 배경
- Gmail / Drive / YouTube 빠른 링크
- 모든 데이터는 `localStorage`에 로컬로 저장

## 🚀 시작하기

별도의 빌드 단계가 필요 없습니다 — `Extension/` 폴더를 그대로 로드하면 됩니다.

1. 크롬에서 `chrome://extensions` 접속
2. 우측 상단 **개발자 모드** 활성화
3. **압축해제된 확장 프로그램 로드** 클릭 후 `Extension/` 폴더 선택
4. 새 탭을 열면 Planova 대시보드가 나타납니다

## 📦 기술 스택
- JavaScript (vanilla)
- Chrome Extensions API (Manifest v3)
- HTML / CSS

## 📄 라이선스
이 프로젝트는 [GNU GPL v3](./LICENSE.md) 라이선스를 따릅니다.

소프트웨어의 복사, 배포, 수정은 가능하나, 수정 사항은 명시되어야 하며,
파생 저작물 역시 동일한 라이선스를 적용해야 합니다.
상업적 이용도 허용되지만, 같은 조건이 따라야 합니다.

## ✍️ 개발자
- 메인 개발자: 사하몬(이상윤)

- 이슈 및 Pull Request를 통한 기여 환영!
