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
var global = {};
// dao
global.dao = {};
global.dao.tags = require('./bin/dao/tag');
global.dao.article = require('./bin/dao/article');
global.dao.special = require('./bin/dao/special');
global.dao.users = require('./bin/dao/user');

// routes
global.routes = {};
global.routes.dashboard = require('./bin/routes/dashboard');
global.routes.users = require('./bin/routes/user');
global.routes.article = require('./bin/routes/article');
global.routes.tags = require('./bin/routes/tag');
global.routes.special = require('./bin/routes/special');




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

app.use('/', global.routes.index);
app.use('/dashboard', global.routes.dashboard);
app.use('/users', global.routes.users);
app.use('/article', global.routes.article);
app.use('/tags', global.routes.tags);
app.use('/special', global.routes.special);

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
