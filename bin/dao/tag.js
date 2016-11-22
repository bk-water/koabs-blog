/**
 * Created by kevin1 on 5/2/16.
 * 用户文章分类标签
 */

var TagSchema = new mongoose.Schema({
    _id: Number,
    tag: String,
    articles: Number,
    articlesList: [Number],
    users:Number,
    usersList: [Number]
});

