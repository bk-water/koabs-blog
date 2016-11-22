/**
 * Created by kevin1 on 5/25/16.
 * 全局设置文件
 */
'use strict'

var path = require('path'),
    processPath = path.dirname(process.argv[1]);//运行node的目录，这里可以方便替换下面baseDir的__dirname,方便用户自己搭建目录，利用node_modules加载rrestjs

model.exports = {
    listenPort: 18080, // 监听端口可设置如果配合clusterplus监听多个端口，这里也可以使用[3000, 3001, 3002, 3003]数组形式
    charset: 'utf-8',
    autoStatic: '', // 自动响应静态文件的uri
    staticFolder: '/static/dist', // 自动响应文件根目录
    baseDir: processPath,//这里是根据启动nodejs的命令目录来设置baseDir
    // 文件上传设置
    uploadFolder: '',//文件上传的临时目录
    postLimit: 1024 * 1024 * 3, // 限制上传的postbody大小，单位byte
    // Cluseter配置 TODO:
    // 静态文件配置
    staticMaxAge: 1000 * 60 * 60 * 24 * 7, //静态文件的缓存周期，建议设置为7天
    staticGetOnly: true, //静态是否只能通过get获取
    staticLv2MaxAge: 1000 * 60 * 60, //静态文件2级缓存更新周期，建议设置为1小时
    staticLv2Number: 100,//静态文件2级缓存数量，可以根据内存的大小适当调整
    // Template
    tempSet: 'ejs', //使用哪种页面模版：jade或者ejs
    tempFolder: '/views', //默认读取模版的根目录
    tempHtmlCache: false, //是否开启模版的html缓存，当输出模版需要大量数据库或缓存I/O操作，且实时性要求不高时可以使用
    tempCacheTime: 0,//模版缓存时间
    tempCacheFolder: '/tmp/tpl', //模版缓存 存放目录
    // mongodb 配置
    MongodbIp: '10.50.15.92', //mongodb地址
    MongodbRC: false,//如果是false表示不使用mongodb的副本集，否则为字符串，表示副本集的名称
    MongodbRChost: [],//表示mongodb副本集的ip:port数组。
    MongodbPort: 8908, //mongodb端口
    MongodbConnectString: false, //是否使用字符串连接，日入nae的连接方法，这个优先级高于地址+端口
    MongodbConnectTimeout: 1000*30,//连接超时
    MongodbMaxConnect: 30,//连接池连接数
    MongodbDefaultDbName: 'kxlbxoLLmMmIkUZcMFIX',//默认使用的数据库名
    poolLogger: false,//是否记录连接池的日志，建议关闭
    MongodbUsername: '9Erb1zvUWKtn2BjXRqhxO1Bv',
    MongodbPassword: 'B0EiWkUVDf2kw6GQmstlp4HOzCbxsqGI',
    // Redis 配置
    RedisPort: 80,
    RedisIp: 'redis.duapp.com',
    RedisDefaulredistDb: 'iCOXeFzPlhvJghJIVoBu',
    RedisPassword: '9Erb1zvUWKtn2BjXRqhxO1Bv-B0EiWkUVDf2kw6GQmstlp4HOzCbxsqGI-iCOXeFzPlhvJghJIVoBu'

    // IP地址访问过滤

    // 客户端跨域功能

};