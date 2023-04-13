var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const secretKey = 'hello123'
const cookieParser = require('cookie-parser')
const user = require('../models/user')
/* GET home page. */
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(cookieParser());
router.get('/', function (req, res, next) {



  res.render('login', { title: ' login',message:'' });
});

router.post('/authenticate-login', function (req, res) {
    const { email, password } = req.body;
    user.findOne({ email: email })
    .then(user => {
      if (!user) {
          return res.render('login',{message:'Account does not exist, please Signup'});
      }

      bcrypt.compare(password, user.password)
          .then(result => {
          if (!result) {
            return res.render('login',{message:'Password doesn\'t match'});
          }
            const token = jwt.sign({userId:user._id}, secretKey)
              res.cookie('jwt', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
              res.redirect('/feed')
        })
        .catch(err => {
          console.error(err);
          res.status(500).send('Internal server error');
        });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal server error');
    });
});

    


module.exports = router;