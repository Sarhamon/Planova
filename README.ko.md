# Planova

**Planova**는 **개인 일정 관리를 위한** 크로스 플랫폼 계획 관리 애플리케이션입니다.  
안드로이드 모바일과 크롬 브라우저에서 원활하게 작동하며, 클라우드 백엔드 서버를 통해 모든 데이터를 동기화합니다.  
언제 어디서든 할 일과 스케줄을 쉽게 관리하고 정리할 수 있도록 도와줍니다.

📄 [View this in English](./README.md)

## 📁 프로젝트 구조

```plaintext
Planova/
├── mobile/           ← 안드로이드 앱 (Java)
├── extension/        ← 크롬 확장 프로그램 (Manifest V3)
├── backend/          ← API 서버 (Firebase, Node.js, 또는 Spring)
├── shared/           ← 공통 로직 (데이터 모델, 인증 처리 등)
├── LICENSE.md
├── README.md         ← 영어 문서
├── README.ko.md      ← 한글 문서
```
## 🔧 주요 기능
할 일, 일정, 캘린더 이벤트 통합 관리

Google 계정 로그인(OAuth) 지원

모바일과 브라우저 간 실시간 동기화

오프라인 환경에서도 동작 (로컬 저장소/캐시 활용)

유지보수와 확장을 고려한 모듈형 구조

## 🚀 시작하기
레포지토리를 클론한 후, 각 디렉토리별로 아래 지침에 따라 실행하세요.

안드로이드 앱
```
cd mobile
# Android Studio에서 열고 에뮬레이터 또는 실제 기기에서 실행
```

크롬 확장 프로그램
```
cd extension
# 크롬에서 chrome://extensions → '압축해제된 확장 프로그램 로드' 클릭
```

백엔드 서버
```cd backend

# Node.js 사용하는 경우
npm install
npm start

# Spring Boot 사용하는 경우
./gradlew bootRun
```
---
## 📦 기술 스택
모바일: Java, Room DB, Firebase Auth

확장 프로그램: JavaScript, Chrome API, OAuth2

백엔드: Node.js (Express) 또는 Spring Boot, Firebase Admin SDK

공통 로직: TypeScript 또는 Java 기반의 모델 및 인증 모듈

## 🔐 보안 안내
API 키나 비밀번호 등 민감한 정보를 커밋하지 마세요.
.env (Node.js) 또는 application.properties (Spring)를 사용하고 .gitignore에 추가해야 합니다.

## 📄 라이선스
이 프로젝트는 [GNU GPL v3](./LICENSE.md) 라이선스를 따릅니다.

✍️ 개발자
메인 개발자: 사하몬(이상윤)

이슈 및 Pull Request를 통한 기여 환영!