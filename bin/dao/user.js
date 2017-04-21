/**
 * Created by kevin1 on 5/2/16.
 * 用户对象
 */
var mongoose = require('mongoose');
var db = require('./mongo').db;
var tableName = require('./mongo').tables;


var LoginSchema = new mongoose.Schema({
    data: Date,
    ip: String
})

var UserSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    nikename: String,
    email: String,
    passwd: String,
    resetKey: String,
    resetDate: Date,
    loginAttempts: Number,
    locked: Boolean,
    sex: String,
    role: Number,
    avatar: String, // 头像
    desc: String,
    createDate: Date, // 创建时间
    score: Number,// 积分
    lastLoginDate: Date,// 最后更新时间
    logins: [LoginSchema],
    tagsList: [Number],
    articlesList: [Number],
    collections: Number, // 专题
    collectionList: [Number] // 专题列表
});

/**
 * 静态方法
 */
UserSchema.static({
    /**
     * 检查用户名密码
     * @param username
     * @param password
     */
    check: function (username, password, callback) {
        this.model(tables.user).find({name: username, passwd: password}, function (err, doc) {
            console.log(err);
            console.log(doc)
            console.log(doc[0].email);
            callback(err, doc);
        })
    }
})

var UserModel = db.model(tableName.user, UserSchema, tableName.user);
//var userEntity = new UserModel({
//    _id: null,
//    name: '张珊',
//    nikename: 'asd',
//    email: 'qwe@qq.com',
//    passwd: 'abc123',
//    locked: false,
//    sex: '男',
//    role: 1,
//    createDate: new Date(), // 创建时间
//    score: 0,// 积分
//});

//userEntity.save();

//var UserMode = new UserSchema

//userEntity.check("张珊", "abc123", function () {
//    console.log("完结");
//})



var user = {
    create:function(obj, callback){
        var userEntity = new UserModel(obj);
        userEntity.save(callback);
    },
    update: function (obj, callback) {
        var userEntity = new UserModel(obj);
        userEntity.save();
    },
    check:function(obj, callback) {
        UserModel.find({name:obj.name},null, function (err, doc){
            console.log(err);
            console.log(doc)
            console.log(doc[0].email);
            callback(err, doc);
        });
    },
    deleteById: function (_id, callback) {
        UserModel.remove(err, {_id:_id});
    }
};

module.exports = {
    create:user.create,
    update:user.update,
    check:user.check,
    deleteById:user.deleteById
};
