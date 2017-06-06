var express = require('express');
var router = express.Router();
var tagDao = require("../dao/tag");

/**
 *标签列表
 * @param size 返回的标签数量
 */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * 根据tag id返回所有的文章
 * @param pageNum
 * @param pageSize
 */
router.get('/:id', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
