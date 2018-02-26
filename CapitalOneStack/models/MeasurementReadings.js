
import Measurement from './measurement'

export default class MeasurementReadings {
    constructor() {
        this.idKey = "timestamp";
        this.Measurements = [];
    }

    addReading = (data) => {
        if (data[this.idKey] instanceof Date) {
            console.log(this.timestamp + ' invalid Date');
            return;
        }
        this.Measurements.push(new Measurement(data));
    }
}

module.exports.MeasurementReadings