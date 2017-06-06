var express = require('express');
var router = express.Router();




//categories
//category/
router.get('/categories', function(req, res, next) {
  res.render('index', { title: 'Koabs' });
});

router.get('/category/:id', function(req, res, next) {
  res.render('index', { title: 'Koabs' });
});

//article/
router.get('/article', function(req, res, next) {
  res.render('index', { title: 'Koabs' });
});

router.get('/article/:id', function(req, res, next) {
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

router.get('/dashboard', function(req, res, next) {
  res.render('admin/dashboard', { title: '控制台' });
});

router.get('/dashboard/article', function(req, res, next) {
  res.render('admin/article_list', { title: '文章列表' });
});

/**
编辑/新增文章
 */
router.get('/dashboard/article/edit', function(req, res, next) {
  res.render('admin/article_edit', { title: '编辑文章' });
});

module.exports = router;
