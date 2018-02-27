
export default class Metric {
    constructor(reading, unitType, name) {
        //this.timestamp = timestamp;
        this.reading = reading;
        this.unitType = unitType;
        this.name = name;
        if (isNaN(parseFloat(this.reading)))
            console.log(this.reading + ' invalid floating type');
    }
}

Metric.prototype.toString = () => {
    return this.name + " " + this.reading + this.unitType;
}

