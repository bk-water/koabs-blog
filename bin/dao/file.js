/**
 * Created by kevin1 on 5/2/16.
 * 保存文件到mongodb
 */

var FileSchema = new mongoose.Schema({
    _id: Number,
    content: String // Binary ??
});