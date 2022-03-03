const express = require('express');//espress 불러오는 코드
const app = express();//app 변수를통해 서버를 관리할수있음

let PORT = process.env.PORT || 9612;//9612포트 할당

app.get('/api/host', (req, res) => {
  res.send({ host : 'React' });
})
//여기서 첫번째 인자로 들어간 '/'은 경로를 나타내는 인자를 가지게 됨
//해당 경로로 이동했을 때에 응답을 렌더하게 된다.

PORT = process.env.PORT || 9612;
app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
})
