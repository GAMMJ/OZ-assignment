// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// CORS 설정
app.use(cors({
  origin: "http://127.0.0.1:9000",
  methods: ['OPTIONS', 'POST', 'GET', 'PUT', 'DELETE'],
}));

// HTTP 요청 본문 처리를 위한 미들웨어
app.use(express.text()); // 평문 텍스트 처리용
app.use(express.json()); // JSON 처리용

let data = { message: '여러분 화이팅!' };

// Express 라우터 사용
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json(data);
});

router.post('/', (req, res) => {
  data.message = req.body;
  res.status(200).send(`받은 POST 데이터: ${req.body}`);
});

router.put('/', (req, res) => {
  data.message = req.body;
  res.status(200).send(`업데이트된 데이터: ${req.body}`);
});

router.delete('/', (req, res) => {
  data = {};
  res.status(200).send('데이터가 삭제되었습니다.');
});

// 라우터를 앱에 등록
app.use('/', router);

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}/ 에서 실행 중입니다.`);
});
