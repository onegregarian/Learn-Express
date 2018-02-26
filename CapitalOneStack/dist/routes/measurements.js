'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', function (req, res) {});

router.put('/:timestamp', function (req, res) {});

router.patch('/:timestamp', function (req, res) {});

router.delete('/:timestamp', function (req, res) {});

router.get('/:timestamp', function (req, res) {
    res.send(JSON.stringify(req.app.locals.data.find(req.params.timestamp)));
});

router.get('/:date', function (req, res) {});

exports.default = router;