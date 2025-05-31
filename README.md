# Planova

**Planova** is a cross-platform planning application designed for **managing personal schedules**.  
It works seamlessly across Android mobile devices and Chrome browsers, all powered by a shared cloud backend.  
Planova helps you stay organized and synced, whether you're on mobile or desktop.

📘 [한국어 문서 보기](./README.ko.md)

## 📁 Project Structure

```plaintext
Planova/
├── mobile/           ← Android app (Java)
├── extension/        ← Chrome extension (Manifest V3)
├── backend/          ← API server (Firebase, Node.js, or Spring)
├── shared/           ← Shared logic (e.g., data models, authentication)
├── LICENSE.md
├── README.md         ← English documentation
├── README.ko.md      ← Korean documentation
```
## 🔧 Features
Manage to-dos, schedules, and calendar events

Google account login (OAuth)

Real-time sync across mobile and browser

Offline support (local storage/cache)

Modular design for easier maintenance and scalability

## 🚀 Getting Started
Clone the repository and refer to the individual directories to run each module.

Android App
```
cd mobile
# Open with Android Studio and run on emulator or device

cd extension
# Visit chrome://extensions > Load unpacked

cd backend

# If using Node.js
npm install
npm start

# If using Spring Boot
./gradlew bootRun
```

## 📦 Tech Stack
```
Mobile: Java, Room DB, Firebase Auth

Extension: JavaScript, Chrome APIs, OAuth2

Backend: Node.js (Express) or Spring Boot, Firebase Admin SDK

Shared: TypeScript or Java modules for models, auth logic
```
## 🔐 Security Notice
```
Do not expose secrets or credentials.
Use .env (Node.js) or application.properties (Spring) and add them to .gitignore.
```
## 📄 License

This project is licensed under the terms of the GNU GPL v3.
