var express = require('express');
var router = express.Router();

router.post('/upload', function(req, res, next) {
    // TODO:
    console.log(req.body);
    console.log(req.files);
    res.json();
});

module.exports = router;
