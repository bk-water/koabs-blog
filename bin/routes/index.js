var express = require('express');
var router = express.Router();


/*  前台页面Controller  */
/**
 * 前台首页
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Koabs' });
});

module.exports = router;
