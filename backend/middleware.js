const jwt = require('jsonwebtoken');
const JWT_SECRET = require('./config');

function authMiddlewar(req, res, next){
    const authHeader = req.headers.authorization
    if(!authHeader.startsWith('Bearer ')){
        res.status(403).json({
            msg:"Inproper Header"
        })
        return;
    }
    const token = authHeader.split(" ")[1]
    try{
        const decode = jwt.verify(token, JWT_SECRET);
        req.username = decode.username;
        next();
    }catch(err){
        res.status(403).json({
            msg:"Invalid Token"
        })
        return;
    }

}

module.exports = authMiddlewar