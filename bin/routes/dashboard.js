var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('admin/dashboard', { title: '控制台' });
});

module.exports = router;
