/**
 * Created by kevin1 on 5/2/16.
 * 文章实体
 */

var mongoose = require('mongoose');
var db = require('./mongo').db;
var tableName = require('./mongo').tables;

var ArticleSchema = new mongoose.Schema({
    _id: Number,
    author: String,
    date: Date,
    display: [Number],
    status:Number,
    refer: [Number],
    title:String,
    cover:String,
    content:String,
    host:Number,
    visitors:Number,
    updateTime:Date,
    collection:Number, // 属于哪个专辑
    tagsList:[Number]
});

var ArticleModel = db.model(tableName.article, ArticleSchema, tableName.article);
var article = {
    create:function(obj, callback){
        var articleEntity = new ArticleModel(obj);
        articleEntity.save(callback);
    },
    update: function (obj, callback) {
        var articleEntity = new ArticleModel(obj);
        articleEntity.save();
    },
    check:function(obj, callback) {
        ArticleModel.find({name:obj.name},null, function (err, doc){
            console.log(err);
            console.log(doc)
            console.log(doc[0].email);
            callback(err, doc);
        });
    },
    deleteById: function (_id, callback) {
        ArticleModel.remove(err, {_id:_id});
    }
};

module.exports = {
    create:article.create,
    update:article.update,
    deleteById:article.deleteById
};