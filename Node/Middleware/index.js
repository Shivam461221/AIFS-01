const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());  //middleware function

app.use((req, res, next)=>{
    if(req.url==='/' && req.method==='POST'){
        res.status(401).end('Wrong method');
    }
    console.log('Middleware function');
    next();
});

app.post('/', (req, res)=>{
    return res.json('POST API hit');
});

app.get('/', (req, res)=>{
    return res.json('GET API hit');
})

app.listen(3000, ()=>{
    console.log('Server started');
})