'use strict';
import express from 'express';
let router = express.Router();

router.post('/', (req, res) => {    
    req.app.locals.data.add(req.body);
});

router.put('/:timestamp', (req, res) => { 
    req.app.locals.data.remove(req.params.timestamp);
    req.app.locals.data.add(req.body);
});

router.patch('/:timestamp', (req, res) => {
    req.app.locals.data.update(req.params.timestamp, req.body)
});

router.delete('/:timestamp', (req, res) => { 
    req.app.locals.data.remove(req.params.timestamp);
});

router.get('/:timestamp', (req, res) => {
    res.send(JSON.stringify(req.app.locals.data.find(req.params.timestamp)));    
});

router.get('/:date', (req, res) => {
    res.send(JSON.stringify(req.app.locals.data.findRange(req.params.date)));    
});

export default router;

