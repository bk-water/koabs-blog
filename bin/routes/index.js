var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Koabs' });
});

router.get('/login', function(req, res, next) {
  res.render('admin/login', { title: '登入' });
});

router.get('/dashboard', function(req, res, next) {
  res.render('admin/dashboard', { title: '控制台' });
});

router.post('/login', function(req, res, next) {
  req.body.username;
  req.body.password;
  res.redirect("/dashboard")
});

module.exports = router;
