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

// 全局变量
global.koabs = {}
// dao
koabs.dao = {};
koabs.dao.tags = null;// require('./bin/dao/tag');
koabs.dao.article = null; // require('./bin/dao/article');
koabs.dao.special = null; // require('./bin/dao/special');
koabs.dao.users = null; // require('./bin/dao/user');
koabs.dao.autoIncrement = null; // require('./bin/dao/autoIncrement');

// routes
koabs.routes = {};
koabs.routes.index = require('./bin/routes/index');
koabs.routes.dashboard = require('./bin/routes/dashboard');
koabs.routes.users = require('./bin/routes/user');
koabs.routes.article = require('./bin/routes/article');
koabs.routes.tags = require('./bin/routes/tag');
koabs.routes.special = require('./bin/routes/special');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'static/src/img', 'logo.png')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static/src')));

app.use('/', koabs.routes.index);
app.use('/dashboard', koabs.routes.dashboard);
app.use('/users', koabs.routes.users);
app.use('/article', koabs.routes.article);
app.use('/tags', koabs.routes.tags);
app.use('/special', koabs.routes.special);

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
