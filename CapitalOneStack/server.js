'use strict';

console.log('Starting up');
const path = require('path');
var express = require('express');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.locals.errors = null;
    next();
});


app.get('/', (req, res) => { res.send('test') });
//app.post('/', (req, res) => { });
//app.put('/', (req, res) => { });
//app.patch('/', (req, res) => { });
//app.delete('/', (req, res) => { });

//var http = require('http');
var port = process.env.PORT || 1337;

//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Node Version: ' + process.version +' \n');
//}).listen(port);


app.listen(port, () => { console.log("Server started on port: " + port + ' Node Version: ' + process.version); })