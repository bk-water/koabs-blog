var express = require('express');
var router = express.Router(),
    articleDao = koabs.dao.article,
autoIncrementDao = koabs.dao.autoIncrement;

router.get('/', function(req, res, next) {
  res.render('admin/dashboard', { title: '控制台' });
});

router.get('/article', function(req, res, next) {
  autoIncrementDao.init();
  res.render('admin/article_list', { title: '文章列表' });
});

/**
编辑/新增文章
 */
router.get('/article/edit', function(req, res, next) {
  articleDao.find({_id:req.query.id}, function (err,ret) {
    console.log(ret);
    // 根据标签ID查询标签名称

    res.render('admin/article_edit', { article: ret[0]});
  });
});

module.exports = router;
