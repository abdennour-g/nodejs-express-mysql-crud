var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const multer = require('multer'); // v1.0.5
const upload = multer(); //npm i multer
var modsql = require('./sql');


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', sinc: Date.now() });
});
/*************************************TABLEAU STANDARD***********************************************************************/
router.get('/table', function(req, res, next) {
    modsql.con.query(modsql.sql, function(err, result, fields) {
        res.render('table', { blocks: result });
    });
});
router.post('/post', upload.array(), function(req, res, next) {
    modsql.ins(req.body);
    res.redirect('/table');
});
router.post('/put/:id', upload.array(), function(req, res, next) {
    modsql.up(req.body, req.params.id);
    res.redirect('/table');
});
router.post('/del/:id', upload.array(), function(req, res, next) {
    modsql.del(req.params.id);
    res.redirect('/table');
});
/**************************************WEBSERVICE**************************************/
router.get('/webservice', function(req, res, next) {
    modsql.con.query(modsql.sql, function(err, result, fields) {
        res.json(result);
    });
});
module.exports = router;