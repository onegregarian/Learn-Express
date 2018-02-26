'use strict';
import express from 'express';
let router = express.Router();

router.get('/', function (req, res) {     
    res.send(JSON.stringify( req.app.locals.data.getStats(req.query.stat, req.query.metric, req.query.fromDateTime,  req.query.toDateTime)));    
});

export default router;

