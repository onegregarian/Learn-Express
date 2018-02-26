'use strict';
import express from 'express'
import bodyParser from 'body-parser';
import readings from './models/MeasurementReadings'
import routes from './routes/index';
import measurementRoutes from './routes/measurements';
import statsRoutes from './routes/stats';

let data = new readings("timestamp");

const app = express();
app.locals.data = data;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);
app.use('/measurements', measurementRoutes);
app.use('/stats', statsRoutes);

app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message);
});



data.add({
    timestamp: '2015-09-01T16:00:00.000Z',
    temperature: 22.4,
    dewPoint: 18.6,
    precipitation: 142.2
})

//app.post('/measurements', (req, res) => {
//    data.addReading(req);
//    res.next();
//})



var port = process.env.PORT || 1337;

app.listen(port, () => { console.log("Server started on port: " + port + ' Node Version: ' + process.version); })

export default app;