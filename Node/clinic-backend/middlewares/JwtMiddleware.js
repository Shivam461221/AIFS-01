const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) =>{
    const token = req.header('Authorization')?.replace('Bearer ','');

    if(!token) return res.status(401).json({error:'Access denied'});

    try{
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {id: verified.id};
        next();
    }
    catch(err){
        res.status(400).json({error:'Invalid token'})
    }
}

module.exports = validateToken