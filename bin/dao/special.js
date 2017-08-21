/**
 * Created by kevin1 on 5/3/16.
 * 文章专题分类
 */
var mongoose = require('mongoose');
var db = require('./mongo').db;
var tableName = require('./mongo').tables;

var SpecialSchema = new mongoose.Schema({
    _id: Number,
    title: String,
    desc: Number,
    img: String,
    users:Number,
    usersList: [Number]
});
var SpecialModel = db.model(tableName.special, SpecialSchema, tableName.special);
var special = {
    create:function(obj, callback){
        var collectionEntity = new SpecialModel(obj);
        collectionEntity.save(callback);
    },
    update: function (obj, callback) {
        var collectionEntity = new SpecialModel(obj);
        collectionEntity.save();
    },
    check:function(obj, callback) {
        SpecialModel.find({name:obj.name},null, function (err, doc){
            console.log(err);
            console.log(doc)
            console.log(doc[0].email);
            callback(err, doc);
        });
    },
    deleteById: function (_id, callback) {
        CollectionModel.remove(err, {_id:_id});
    }
};

module.exports = {
    create:special.create,
    update:special.update,
    deleteById:special.deleteById
};