'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _measurement = require('./measurement');

var _measurement2 = _interopRequireDefault(_measurement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MeasurementReadings = function MeasurementReadings() {
    var _this = this;

    _classCallCheck(this, MeasurementReadings);

    this.addReading = function (data) {
        if (data[_this.idKey] instanceof Date) {
            console.log(_this.timestamp + ' invalid Date');
            return;
        }
        _this.Measurements.push(new _measurement2.default(data));
        console.log("Added Measurement: " + JSON.stringify(data));
    };

    this.find = function (timestamp) {
        var result = _this.Measurements.find(function (e) {
            return e.timestamp === timestamp;
        });
        if (result === 'undefined') result = {};
        return result;
    };

    this.idKey = "timestamp";
    this.Measurements = [];
};

exports.default = MeasurementReadings;