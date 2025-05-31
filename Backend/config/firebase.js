// config/firebase.js
const admin = require('firebase-admin');
const fs = require('fs');

// 서비스 계정 키 JSON 파일 경로
const serviceAccount = JSON.parse(
  fs.readFileSync(process.env.FIREBASE_KEY_PATH, 'utf-8')
);

// Firebase Admin 초기화
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
