# Planova

**Planova**는 크롬의 새 탭을 대체하여 할 일(To-Do)과 캘린더를 통합한 생산성 확장 프로그램입니다. 실시간 시계, 일정 입력 기능, 캘린더 시각화가 포함되어 있으며, Google 로그인 및 Google 캘린더 연동 기능은 현재 개발 중입니다.

---

## ✨ 주요 기능

- **📋 날짜 기반 할 일 목록 (To-Do List)**  
  날짜를 선택하여 해야 할 일을 등록하고, 캘린더와 함께 시각적으로 관리할 수 있습니다.

- **📅 커스텀 캘린더 인터페이스**  
  월/연도 선택 기능을 포함한 커스텀 캘린더 UI. 일정이 달력에 표시됩니다.

- **🎨 배경 이미지**  
  `modern.png` 이미지를 배경으로 사용. 추후 `modern_glitch.png`를 활용한 동적 효과도 계획 중입니다.

- **🔧 컴포넌트 기반 UI 구조**  
  사용자 정보 박스, 할 일 입력 바, 사이드 메뉴, 캘린더 모달 등 모듈화된 구조.

- **🕒 실시간 시계와 인사말**  
  사용자의 이름과 현재 시간을 기반으로 인사 메시지를 표시합니다.

---

## 🛠 설치 방법

1. 저장소를 다운로드하거나 클론합니다.
2. Chrome 주소창에 `chrome://extensions` 입력 후 이동.
3. 우측 상단에서 **개발자 모드**를 켭니다.
4. **압축 해제된 확장 프로그램 로드** 클릭.
5. `Planova/` 폴더 선택.

---

## 🔐 Google 로그인 / 캘린더 연동 (개발 중)

> Google OAuth 2.0 기반 로그인 및 Google Calendar 동기화 기능은 현재 개발 중입니다.

### 예정 기능:
- Google 계정으로 로그인 (프로필/이메일)
- 등록된 할 일을 Google Calendar에 자동 저장
- 향후 모바일 앱 연동 및 기기 간 일정 동기화

※ `manifest.json`에는 OAuth 설정이 미리 포함되어 있으나, 기능은 아직 활성화되지 않았습니다.

---

## 📁 프로젝트 구조

- Planova/
- ├── css/
- │ ├── calendar.css
- │ ├── menu.css
- │ ├── style.css
- │ ├── todo.css
- │ └── userbox.css
- ├── js/
- │ ├── calendar.js
- │ ├── menu.js
- │ ├── script.js
- │ ├── todo.js
- │ └── userbox.js
- ├── assets/
- │ ├── modern.png
- │ ├── modern_glitch.png
- │ └── user.png
- ├── manifest.json
- └── index.html

---

## 🧑‍💻 개발자 정보

- **연성대학교 컴퓨터소프트웨어과**
- 개발자: **이상윤**

---

## 📄 라이선스

이 프로젝트는 GPL License 하에 배포됩니다.  
자세한 내용은 [LICENSE.md](./LICENSE.md) 파일을 참조하세요.