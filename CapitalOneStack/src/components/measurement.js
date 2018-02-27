import  Metric  from './metric'

export default class Measurement {
    constructor(parseKey, data) {
        this.idKey = parseKey;
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
                }
                else
                    this.readings.push(new Metric(val, 'tbd', key));
            }
        }        
    }
}


