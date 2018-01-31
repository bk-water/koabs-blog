var express = require('express');
var router = express.Router();
const multer = require('multer');
const fs = require('fs');
const UPLOAD_PATH = './uploads'


router.post('/upload', function(req, res, next) {
    // TODO:
    console.log(req.body);
    console.log(req.files);
});

module.exports = router;
