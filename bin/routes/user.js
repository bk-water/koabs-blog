var express = require('express');
var router = express.Router();

/**
 * 用户列表页面
 */
router.get('/index', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * 用户详情页面
 */
router.get('/detail', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * 删除用信息
 */
router.post('/delete', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * 保存用户信息
 */
router.post('/save', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
