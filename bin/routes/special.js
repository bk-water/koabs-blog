var express = require('express');
var router = express.Router();

/**
 * 专题列表
 */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * 专题详情
 */
router.get('/detail', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * 删除专题信息
 */
router.post('/delete', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 *保存专题
 */
router.post('/save', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
