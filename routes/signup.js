var express = require('express');
var router = express.Router();
const user = require('../models/user')


router.get('/', function(req, res, next) {


  res.render('signup',{message:''})
});

router.post('/adduser', async function (req, res) {
    try {
        const {name, email, password } = req.body;
        console.log(req.body)
        const newUser = new user({name, email, password});
        await newUser.save();
        res.render('login',{message:'User registered, Login!'})
    } catch (err) {
        console.log(err);
        res.render('signup',{message:'Error creating user'})
    }
})
module.exports = router;