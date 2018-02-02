/**
 *
 * @type {*|exports|module.exports}
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var multer = require('multer');
var fs = require('fs');

// 全局变量
global.koabs = {}
// dao
koabs.dao = {};
koabs.dao.tags = require('./bin/dao/tag');
koabs.dao.article = require('./bin/dao/article');
koabs.dao.special = require('./bin/dao/special');
koabs.dao.users = require('./bin/dao/user');
koabs.dao.autoIncrement = require('./bin/dao/autoIncrement');

// routes
koabs.routes = {};
koabs.routes.index = require('./bin/routes/index');
koabs.routes.dashboard = require('./bin/routes/dashboard');
koabs.routes.users = require('./bin/routes/user');
koabs.routes.article = require('./bin/routes/article');
koabs.routes.tags = require('./bin/routes/tag');
koabs.routes.special = require('./bin/routes/special');
koabs.routes.files = require('./bin/routes/files');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'static/src/img', 'logo.png')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static/src')));

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, '/tmp/bkwater-uploads')
  },
  filename: function (req, file, cb) {
  cb(null, file.fieldname + '-' + Date.now())
  }
  });
app.use(multer({ storage: storage }).any());

app.use('/dashboard/*|/login',session({
    secret: 'koabs', // 生成session 的签名
    name: 'token',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 24000000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true,
}));

app.all('/dashboard/*', function (req, res, next) {
  if(req.session.user) {
    next()
  } else {
    res.json("没有权限访问！")
  }
});

app.use('/', koabs.routes.index);
app.use('/files', koabs.routes.files);
app.use('/dashboard', koabs.routes.dashboard);
app.use('/dashboard/user', koabs.routes.users);
app.use('/dashboard/article', koabs.routes.article);
app.use('/dashboard/tags', koabs.routes.tags);
app.use('/dashboard/special', koabs.routes.special);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
