'use strict';
import express from 'express';
let router = express.Router();

/* GET home page. */
//router.get('/', function (req, res) {
//    res.send('index', { title: 'Express' });
//});

router.get('/', function (req, res) {
    res.send('hello world');
});


//app.post('/', (req, res) => { });
//app.put('/', (req, res) => { });
//app.patch('/', (req, res) => { });
//app.delete('/', (req, res) => { });

export default router;

