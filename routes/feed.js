const jwt = require('jsonwebtoken')
const secretKey = 'hello123'
const user = require('../models/user')
var express = require('express');
var router = express.Router();
const cookieParser = require('cookie-parser')
router.use(cookieParser());

function authenticateToken(req, res, next) {
    console.log(req)
    const token = req.cookies.jwt;
    
    if (!token){
        return res.render('login',{message:'Login to view page'})
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            console.log(err);
            return res.status(403).send('forbidden');
        }
        req.user = { userId: decoded.userId };
        next()
    })
}


router.get('/', authenticateToken, (req, res) => {
    user.findById(req.user.userId).then(user => {
        if (!user) {
            return res.status(404).send('User not found');
        }

        res.render('feed', {user:user})
    }).catch(err => {
        console.log(err);
        res.status(500).send("Internal server error");
    })
})

module.exports = router;