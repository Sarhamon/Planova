# Planova

**Planova**는 **개인 일정 관리를 위한** 크로스 플랫폼 계획 관리 애플리케이션입니다.  
안드로이드 모바일과 크롬 브라우저에서 원활하게 작동하며, 클라우드 백엔드 서버를 통해 모든 데이터를 동기화합니다.  
언제 어디서든 할 일과 스케줄을 쉽게 관리하고 정리할 수 있도록 도와줍니다.

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
