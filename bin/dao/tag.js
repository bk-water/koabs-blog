/**
 * Created by kevin1 on 5/2/16.
 * 用户文章分类标签
 */

var mongoose = require('mongoose');
var db = require('./mongo').db;
var tableName = require('./mongo').tables;
var autoIncrement = require('./autoIncrement');

var TagSchema = new mongoose.Schema({
    _id: String,
    tag: String,
    articles: Number, // 标签包含的文章数
    articlesList: [String], // 标签包含的文章ID列表
    users:Number,
    usersList: [String]
});

var TagModel = db.model(tableName.tag, TagSchema, tableName.tag);

var tag = {
    create:function(obj, callback){
        var tagEntity = new TagModel(obj);
        tagEntity.save(callback);
    },
    update: function (obj, callback) {
        var tagEntity = new TagModel(obj);
    
        TagModel.findByIdAndUpdate({},{},function(err, res) {
            var ss = new Array();
            ss.indexOf("");
            callback(err, res);
        })
    },
    updateByArticle: async function (obj, callback) {
        let tagsIdList = new Array();
        let tags = obj.tags.split(",");
        for(let tag of tags) {
          // 查询保存或者更新,把返回的tag Id 反写到artice tagIds数组中 同时更新文章列表
          let raw = await TagModel.find({tag:tag}).exec();
          let tagEntity;
          if (raw.length >0) {
            tagEntity = raw[0];
            let articleSet = new Set(tagEntity.articlesList);
            articleSet.add(obj._id);
            tagEntity.articlesList = Array.from(articleSet.values());
            tagEntity.articles = articleSet.size;
          } else {
            let _id = await autoIncrement.getTagId();
            tagEntity = new TagModel({
                _id: _id,
                tag: tag,
                articles: 1,
                articlesList: [obj._id],
                users:0,
                usersList: []
            });
          }
          await tagEntity.save();
          tagsIdList.push(tagEntity._id);
        };

        return tagsIdList;
    },
    check:function(obj, callback) {
        TagModel.find({name:obj.name},null, function (err, doc){
            console.log(err);
            console.log(doc)
            console.log(doc[0].email);
            callback(err, doc);
        });
    },
    deleteById: function (_id, callback) {
        TagModel.remove(err, {_id:_id});
    },
    findByIds: function(ids,callback) {
        TagModel.find({_id: {$in: ids}}, null, function (err, doc) {
            console.log(err);
            console.log(doc)
            console.log(doc[0].email);
            callback(err, doc);
        });
    }
};

module.exports = {
    create:tag.create,
    update:tag.update,
    updateByArticle:tag.updateByArticle,
    deleteById:tag.deleteById,
    findByIds:tag.findByIds
};