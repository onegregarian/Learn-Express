
import  Measurement  from './measurement'

export default class MeasurementReadings {
    constructor(key) {
        this.idKey = key;
        this.Measurements = [];
    }    
    add = (data) => {
        if (data[this.idKey] instanceof Date) {
            console.log(this.timestamp + ' invalid Date');
            return;
        }
        //check if exists

        this.Measurements.push(new Measurement(this.idKey, data));
        console.log("Added Measurement: " + JSON.stringify(data));
    }
    find = (timestamp) => {
        return this.Measurements.find((e) => {return e.timestamp === timestamp;});
    }
    findRange = (date) => {
        
    }
    remove = (timestamp) => {
        this.Measurements = this.Measurements.filter((e) => {return e.timestamp === timestamp;});
    }
    update = (timestamp, data) => {
        var found = this.find(timestamp);
        //update keys and such from data
    }

    getStats = (stat, metric, fromDateTime, toDateTime) => {
    
    }

}



