# Planova

**Planova** is a cross-platform planning application designed for **managing personal schedules**.  
It works seamlessly across Android mobile devices and Chrome browsers, all powered by a shared cloud backend.  
Planova helps you stay organized and synced, whether you're on mobile or desktop.

📘 [한국어 문서 보기](./README.ko.md)

## 📁 Project Structure

```plaintext
Planova/
├── mobile/           ← Android app (Java)
├── extension/        ← Chrome extension (Manifest v3)
├── backend/          ← API server
├── shared/           ← Shared logic
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
```
Chrome Extension
```
cd extension
# Visit chrome://extensions > Load unpacked
```
Backend
```
cd backend

# using Node.js
npm install
npm start
```

## 📦 Dependencies
Mobile: Room DB, Firebase Auth, Android SDK

Extension: Chrome Storage API, OAuth2

Backend: Express.js / Spring Boot, Firebase Admin SDK, JWT

## 📦 Tech Stack
Mobile: Java, Room DB, Firebase Auth

Extension: JavaScript, Chrome APIs, OAuth2

Backend: Node.js (Express) or Spring Boot, Firebase Admin SDK

Shared: TypeScript or Java modules for models, auth logic

## 🔐 Security Notice

Do not expose secrets or credentials.
Use .env (Node.js) or application.properties (Spring) and add them to .gitignore.

## 📄 License

This project is licensed under the terms of the [GNU GPL v3.](./LICENSE.md)

You may copy, distribute and modify the software as long as you track changes/dates in source files.
Any derivative works must be distributed under the same license.
Commercial use is allowed, but with the same conditions.

## ✍️ Author
- Lead Developer: Sarhamon(Sangyoon Lee)

- Contributions welcome via Pull Requests!