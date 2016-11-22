/**
 * Created by kevin1 on 5/2/16.
 * 文章实体
 */
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