var express = require('express');
var router = express.Router();


/*  前台页面Controller  */
/**
 * 前台首页
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Koabs' });
});

/*  后台页面Controller */
router.get('/login', function(req, res, next) {
  res.render('admin/login', { title: '登入' });
});

router.post('/login', function(req, res, next) {
  req.body.username;
  req.body.password;
  res.redirect("/dashboard")
});

module.exports = router;
