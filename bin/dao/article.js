/**
 * Created by kevin1 on 5/2/16.
 * 文章实体
 */

var mongoose = require('mongoose');
var db = require('./mongo').db;
var tableName = require('./mongo').tables;
var tagsDao = koabs.dao.tags;
var moment = require('moment');

var ArticleSchema = new mongoose.Schema({
    _id:String,
    author: String, // 作者名称
    date: Date, // 发布时间
    status:Number, // 状态 0 禁用 1 启用
    title:String, // 标题
    content:String, // html格式内容
    mdContent:String, // markdown 格式内容
    visitors:Number, // 访问次数
    updateTime:Date, // 更新时间
    //collection:Number, // 属于哪个专辑
    tagsIdList:[String], // 标签ID列表
    top:Number // 0不置顶, 1置顶
});

var ArticleModel = db.model(tableName.article, ArticleSchema, tableName.article);
var article = {
    save: function (obj, callback) {
        return ArticleModel.findOneAndUpdate({_id:obj._id},obj,{upsert:true}).exec();
    },
    check:function(obj, callback) {
        ArticleModel.find({name:obj.name},null, function (err, doc){
            callback(err, doc);
        });
    },
    deleteById: function (_id, callback) {
        ArticleModel.remove(err, {_id:_id});
    },
    find:function(obj,callback) {
        // 根据ID 查询
        return ArticleModel.findOneAndUpdate({_id:obj._id},{$inc:{visitors:1}}).exec();
    },
    findByPage:function(obj,callback) {
        if(obj.pageSize || obj.pageNo) {
            obj.offset =(obj.pageNo -1) * obj.pageSize;
            obj.limit = obj.pageSize;
        }

        if(!obj.offset) {
            obj.offset = 0;
        }
        if(!obj.limit) {
            obj.limit = 10;
        }
        
        
        ArticleModel.count({name:obj.name}, function (err, count){
            ArticleModel.find({name:obj.name})
            .skip(Number.parseInt(obj.offset))
            .limit(Number.parseInt(obj.limit))
            .sort({'updateTime':-1})
            .exec( async (err, doc) => {
                let ret = {};
                ret.data = doc;
                ret.paginator = {
                    pageSize:obj.limit,
                    pageNo:(obj.offset/obj.limit) +1,
                    totalCount:count
                };
                // 查询tag 和专辑
                if(ret.data.length >0) {
                    for(let i=0;i< ret.data.length; i++) {
                        ret.data[i].tags = await tagsDao.findByIds(ret.data[i].tagsIdList);
                        // ret.data[i].updateTime = moment(ret.data[i].updateTime).format('YYYY-MM-DD');
                    }  
                }
                // 返回分页对象
                callback(err, ret);
            });
        });
    }
};

module.exports = {
    create:article.save,
    deleteById:article.deleteById,
    find:article.find,
    findByPage:article.findByPage,
    save:article.save
};