


export default class Metric {
    constructor(timestamp, reading, unitType) {
        this.timestamp = timestamp;
        this.reading = reading;
        this.unitType = unitType;

        if (isNaN(parseFloat(this.reading)))
            console.log(this.reading + ' invalid floating type');
    }
}

Metric.prototype.toString = () => {
    return this.reading + this.unitType;
}


module.exports.Metric