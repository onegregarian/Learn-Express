'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _MeasurementReadings = require('./models/MeasurementReadings');

var _MeasurementReadings2 = _interopRequireDefault(_MeasurementReadings);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _measurements = require('./routes/measurements');

var _measurements2 = _interopRequireDefault(_measurements);

var _stats = require('./routes/stats');

var _stats2 = _interopRequireDefault(_stats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = new _MeasurementReadings2.default();

var app = (0, _express2.default)();
app.locals.data = data;

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use('/', _index2.default);
app.use('/measurements', _measurements2.default);
app.use('/stats', _stats2.default);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});

data.addReading({
    timestamp: '2015-09-01T16:00:00.000Z',
    temperature: 22.4,
    dewPoint: 18.6,
    precipitation: 142.2
});

//app.post('/measurements', (req, res) => {
//    data.addReading(req);
//    res.next();
//})


var port = process.env.PORT || 1337;

app.listen(port, function () {
    console.log("Server started on port: " + port + ' Node Version: ' + process.version);
});

exports.default = app;