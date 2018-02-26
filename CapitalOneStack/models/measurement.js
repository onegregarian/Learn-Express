import Metric from './metric'

class Measurement {
    constructor(data) {
        this.idKey = "timestamp";
        this.timestamp = readings[this.idKey];
        this.readings = [];

        if (!this.timestamp instanceof Date) {
            console.log(this.timestamp + ' invalid Date');
            return;
        }

        for (var key in readings) {
            if (readings.hasOwnProperty(key) && key != this.idKey) {
                var val = readings[key];
                if (isNaN(parseFloat(val))) {
                    console.log(val + ' invalid Date');
                    return;
                }
                else
                    this.readings.push(new Metric(this.timestamp, val, 'tbd'));
            }
        }        
    }
}

module.exports.Measurement