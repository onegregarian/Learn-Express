'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

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

exports.default = router;