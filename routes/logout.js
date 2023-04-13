const express = require('express')
const router = express.Router();


router.get('/', (req, res) => {
    // clear the token from cookies
  res.clearCookie('jwt');

  // redirect to login page
  res.redirect('/login');
})

module.exports = router;