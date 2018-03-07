
var Result = require('../model/result');
var express = require('express');
var router = express.Router();
var articleDao = koabs.dao.article;
var autoIncrementDao = koabs.dao.autoIncrement;
var tagsDao = koabs.dao.tags;



/**
 * 文章列表页面
 * @param pageNum
 * @param pageSize
 */
router.get('/index', function(req, res, next) {
  res.render("admin/article_list",{title:'文章列表'});
});

/**
 * @param pageNum
 * @param pageSize
 */
router.get('/', function(req, res, next) {
  articleDao.findByPage(req.query,function(error,ret) {
    res.json(ret);
  });
});

/**
 * 文章详情页面
 */
router.get('/:id', async (req, res, next) => {
  // 查询专辑和tag
  let allTags = await tagsDao.find();
  let ret = await articleDao.find({_id:req.params.id});
  let article = {};

  if(ret) {
    article = ret[0];
    article.tags = await tagsDao.findByIds(article.tagsIdList);
    article.tags = article.tags.map(function(obj){
      return obj.tag;
    }).join(",");
  }
  article.allTags = allTags;

  res.render('admin/article_edit', {article:article});
});

/**
 * 删除文章
 */
router.delete('/:id', async (req, res, next) => {
    articleDao.deleteById({_id:req.body.id},function(error, ret) {
      res.json(Result.build(error,"删除成功",null));
    }); 
});

/**
 * 保存文章
 *
 */
router.put('/', async (req, res, next) => {
  var article = req.body;
  if (!article._id) {
    // 新增文章时获取文章ID
    article._id = await autoIncrementDao.getArticleId();
    article.date = new Date();
    article.author = 'koabs';
    article.visitors = 0;
  }
  if (!article.top) {
    article.top = 0;
  }
  if (!article.status) {
    article.status = 1;
  }
  article.updateTime = new Date();

  let tagIds =  await tagsDao.updateByArticle(article);
  article.tagsIdList = tagIds;
  await articleDao.save(article);
  res.json(Result.success("保存成功",article));
});

module.exports = router;
