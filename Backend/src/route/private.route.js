const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');

router.get('/', verifyToken, (req, res) => {
  res.json({
    message: '🔐 인증된 사용자만 볼 수 있는 데이터입니다.',
    uid: req.user.uid,
    email: req.user.email,
  });
});

module.exports = router;
