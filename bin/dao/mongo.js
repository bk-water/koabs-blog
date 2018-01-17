/**
 * Created by kevin1 on 5/2/16.
 */
'use strict';
var mongoIp = '47.75.10.26',
    mongoPort = 3107,
    mongoUsername = 'admin',
    mongoPassword = 'admin',
    mongoDbName = 'koabsblog',
    mongoose = require('mongoose'),
// 添加用户名 密码 认证
    // db = mongoose.createConnection('mongodb://' + mongoUsername + ':' + mongoPassword + '@' + mongoIp + ':' + mongoPort + '/' + mongoDbName);
    db = mongoose.createConnection('mongodb://'+ mongoIp + ':' + mongoPort + '/' + mongoDbName);
console.log('mongoDB connect...');
mongoose.set('debug', true);
db.on('error', console.error.bind(console, '连接错误:'));
db.once('open', function () {
    //一次打开记录
});

var tables = {
    user: 'user',
    tag: 'tag',
    file: 'file',
    special: 'special',
    article: 'article',
    autoIncrement:'autoIncrement'
}

//var PersonSchema = new mongoose.Schema({
//    name: String   //定义一个属性name，类型为String
//});
//var PersonModel = db.model('Person', PersonSchema);
////如果该Model已经发布，则可以直接通过名字索引到，如下：
////var PersonModel = db.model('Person');
////如果没有发布，上一段代码将会异常
//var personEntity = new PersonModel({name: 'Krouky'});
////打印这个实体的名字看看
//console.log(personEntity.name); //Krouky
//personEntity.save(function (err, persons) {
//    //查询到的所有person
//    console.log(err);
//});  //执行完成后，数据库就有该数据了
//
//PersonModel.find(function (err, persons) {
//    //查询到的所有person
//    console.log(err);
//});
////mongoose.cl
module.exports = {
    db: db,
    tables:tables
};