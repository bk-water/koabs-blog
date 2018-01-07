/**
 * Created by kevin1 on 5/2/16.
 * 用户文章分类标签
 *
 * 自增长需要初始化Index数据
 */

var mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
var db = require('./mongo').db;
var tableName = require('./mongo').tables;

var AutoIncrementSchema = new mongoose.Schema({
    _id: String,
    value:Number
});

AutoIncrementSchema.statics.findAndModify = function (query, sort, doc, options, callback){
    return this.collection.findAndModify(query, sort, doc, options, callback);
}


var AutoIncrementModel = db.model(tableName.autoIncrement, AutoIncrementSchema, tableName.autoIncrement);

var autoIncrement = {
    getNextId:function(obj){
        //var autoIncrementModel = new AutoIncrementModel(obj);
        //var  id = AutoIncrementModel.findAndModify({query:{_id:obj}, update:{$inc:{'value':1}}, new:true},callback);
       return new Promise (function (resolve, reject) {
           AutoIncrementModel.findOneAndUpdate({_id:obj}, {$inc:{value:1}}, function(err,doc,res) {
                if (!err) {
                    resolve(obj.substr(0, 1)+doc.value);
                } else {
                    reject(err);
                }
            });
        });
    },
    create:function(obj, callback){
        var autoEntity = new AutoIncrementModel({_id:obj,value:1});
        userEntity.save(callback);
    },
    getArticleId: function (callback) {
        return autoIncrement.getNextId("Article");
    },
    getTagId: function (callback) {
        return autoIncrement.getNextId("Tag");
    },
    getSpecialId: function (callback) {
        return autoIncrement.getNextId("Special");
    },
    getUserId: function () {
        return autoIncrement.getNextId("User");
    },
    init: function (callback) {
        var article =  AutoIncrementModel.create({_id:'Article',value:1});
        var user =  AutoIncrementModel.create({_id:'User',value:1});
        var tag =  AutoIncrementModel.create({_id:'Tag',value:1});
        var special = AutoIncrementModel.create({_id:'Special',value:1});
        Promise.all([article, user, tag,special]).then(values => {
            console.log(values); // [3, 1337, "foo"]
            callback(null,values);
        });
    }
};

module.exports = {
    getArticleId:autoIncrement.getArticleId,
    getTagId:autoIncrement.getTagId,
    getSpecialId:autoIncrement.getSpecialId,
    getUserId:autoIncrement.getUserId,
    init:autoIncrement.init
};