var express = require('express');
var router = express.Router();

router.post('/upload', function(req, res, next) {
    // TODO:
    console.log(req.body);
    console.log(req.files);
    res.json(req.files[0].path);
});

module.exports = router;
