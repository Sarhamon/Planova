const express = require('express');
const router = express.Router();
const admin = require('../config/firebase');

router.post('/login', async (req, res) => {
  const { idToken } = req.body;

  if (!idToken) {
    return res.status(400).json({ error: 'idToken이 누락되었습니다.' });
  }

  try {
    // Firebase ID 토큰 검증
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;
    const email = decodedToken.email;

    // Firestore에 사용자 정보 저장 또는 업데이트
    const userRef = admin.firestore().collection('users').doc(uid);
    await userRef.set({
      uid,
      email,
      lastLogin: new Date()
    }, { merge: true });

    // 응답: 사용자 UID와 이메일 반환
    res.json({
      message: '✅ 로그인 성공',
      uid,
      email
    });

  } catch (error) {
    console.error('❌ 로그인 실패:', error);
    res.status(401).json({ error: '유효하지 않은 idToken입니다.' });
  }
});

module.exports = router;
