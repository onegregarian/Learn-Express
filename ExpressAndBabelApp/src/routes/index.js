'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

//app.post('/', (req, res) => { });
//app.put('/', (req, res) => { });
//app.patch('/', (req, res) => { });
//app.delete('/', (req, res) => { });

module.exports = router;
