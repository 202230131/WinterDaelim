//환경변수 사용
require('dotenv').config();
const express = require('express');
// express 사용
const app = express();
//기본포트 적용
const PORT = process.env.PORT || 3000;  

//통신할때 json 
app.use(express.json());

//get
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get('/hello', (req, res) => {
    res.json({ message: 'Hello from /hello endpoint!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});