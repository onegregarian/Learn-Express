'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _metric = require('./metric');

var _metric2 = _interopRequireDefault(_metric);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Measurement = function Measurement(data) {
    _classCallCheck(this, Measurement);

    this.idKey = "timestamp";
    this.timestamp = data[this.idKey];
    this.readings = new Array();

    if (!this.timestamp instanceof Date) {
        console.log(this.timestamp + ' invalid Date');
        return;
    }

    for (var key in data) {
        if (data.hasOwnProperty(key) && key != this.idKey) {
            var val = data[key];
            if (isNaN(parseFloat(val))) {
                console.log(val + ' invalid Date');
                return;
            } else this.readings.push(new _metric2.default(this.timestamp, val, 'tbd', key));
        }
    }
};

exports.default = Measurement;