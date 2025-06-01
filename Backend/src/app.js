const express = require('express');
const cors = require('cors'); // ✅ 추가
require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('🔥 Planova 백엔드가 작동 중입니다!');
});

const authRoute = require('./route/auth.route');
app.use('/api/auth', authRoute);

const privateRoute = require('./route/private.route');
app.use('/api/private', privateRoute);

module.exports = app;
