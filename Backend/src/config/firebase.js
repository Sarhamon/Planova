const admin = require('firebase-admin');
const path = require('path');
require('dotenv').config();

// 서비스 계정 키 파일 경로
const serviceAccountPath = path.resolve(__dirname, '../../', process.env.GOOGLE_APPLICATION_CREDENTIALS);
const serviceAccount = require(serviceAccountPath);

// Firebase Admin 초기화
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: process.env.FIREBASE_PROJECT_ID,
});

module.exports = admin;
