/**
 * Created by kevin1 on 5/3/16.
 * 文章专题分类
 */

var CollectionSchema = new mongoose.Schema({
    _id: Number,
    title: String,
    desc: Number,
    img: String,
    users:Number,
    usersList: [Number]
});