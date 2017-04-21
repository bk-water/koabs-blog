/**
 * Created by kevin1 on 5/2/16.
 * 保存文件到mongodb
 */
var mongoose = require('mongoose');
var db = require('./mongo').db;
var tableName = require('./mongo').tables;

var FileSchema = new mongoose.Schema({
    _id: Number,
    content: String // Binary ??
});

var FileModel = db.model(tableName.file, FileSchema, tableName.file);

var file = {
    create:function(obj, callback){
        var fileEntity = new FileModel(obj);
        fileEntity.save(callback);
    },
    update: function (obj, callback) {
        var fileEntity = new fileModel(obj);
        fileEntity.save();
    },
    check:function(obj, callback) {
        FileModel.find({name:obj.name},null, function (err, doc){
            console.log(err);
            console.log(doc)
            console.log(doc[0].email);
            callback(err, doc);
        });
    },
    deleteById: function (_id, callback) {
        FileModel.remove(err, {_id:_id});
    }
};

module.exports = {
    create:file.create,
    update:file.update,
    deleteById:file.deleteById
};