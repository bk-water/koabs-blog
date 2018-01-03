/**
 * Created by kevin1 on 5/2/16.
 * 用户文章分类标签
 */

var mongoose = require('mongoose');
var db = require('./mongo').db;
var tableName = require('./mongo').tables;

var TagSchema = new mongoose.Schema({
    _id: Number,
    tag: String,
    articles: Number, // 标签包含的文章数
    articlesList: [Number], // 标签包含的文章ID列表
    users:Number,
    usersList: [Number]
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
    updateByArticle: function (obj, callback) {
        var tags = article.tags.split(",");
        obj.tagsIdList = '';
        each(tags,function(k){
            // 查询保存或者更新,把返回的tag Id 反写到artice tagIds数组中 同时更新文章列表
            TagModel.update({tag:k},{},{upsert:true},function (err, raw) {
                raw[0].
            })
        })
        var tagEntity = new TagModel(obj);
        TagModel.findByIdAndUpdate({},{},function(err, res) {
            var ss = new Array();
            ss.indexOf("");
            callback(err, res);
        })
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
    deleteById:tag.deleteById,
    findByIds:tag.findByIds
};