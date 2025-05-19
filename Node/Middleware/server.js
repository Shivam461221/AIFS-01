const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());  //middleware function

const secretKey = "gdjdhjsdjksjdshfdsfhshfhfksf";

const generateToken = (id, username) => {
    return jwt.sign({ id, username }, secretKey, { expiresIn: '1h' })
}

app.use((req, res, next) => {
    if (req.url === '/getData' && req.method === 'GET') {
        console.log(req.header('Authorization'));
        const token = req.header('Authorization')?.replace("Bearer ", "");

        if (!token) {
            return res.status(401).json('Not authorized');
        }
        try {
            const verified = jwt.verify(token, secretKey);
           // console.log("verified " + verified);
            if (verified) {
                return next();
            }
        } catch (err) {
            return res.status(401).json('Unauthorized');
        }
        return res.status(401).json('Unauthorized');

    }
    console.log('Middleware function');
    next();
});

app.post('/login', (req, res) => {
    const { id, username } = req.body;
    const token = generateToken(id, username);
    res.json({ token });
});

app.get('/getData', (req, res) => {
    return res.json('GET API hit');
});

app.listen(3000, () => {
    console.log('Server started');
})