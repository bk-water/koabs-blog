
/**
 * 返回结果封装
 */
class Result {
    constructor(code,msg,data){
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    static build(err,msg,data) {
        let ret;
        if(!err) {
            ret = success(msg, data);
        } else {
            ret = error(err);
        }
        return ret;
    }

    static error(msg) {
        return new Result(-1,msg)
    }

    static success(msg,data) {
        return new Result(0,msg,data)
    }

    toString() {
        return {'code':this.code,'msg':this.msg,'data':this.data};
    }
}

module.exports = Result;