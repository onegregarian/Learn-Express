"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Metric = function Metric(timestamp, reading, unitType, name) {
    _classCallCheck(this, Metric);

    this.timestamp = timestamp;
    this.reading = reading;
    this.unitType = unitType;
    this.name = name;
    if (isNaN(parseFloat(this.reading))) console.log(this.reading + ' invalid floating type');
};

exports.default = Metric;


Metric.prototype.toString = function () {
    return undefined.name + " " + undefined.reading + undefined.unitType;
};