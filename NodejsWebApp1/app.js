
console.log('Starting up');

const http = AddPlugin('http');
const fs = AddPlugin('fs');
const express = AddPlugin('express');
const bodyParser = AddPlugin('body-parser');
const path = AddPlugin('path');
const expressValidator = AddPlugin('express-validator');
const mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId;
var db = mongojs('customerapp', ['users']);

const hostname = '127.0.0.1';
const port = 3000;

var app = express();
//var logger = (req, res, next) => {
//    console.log('Logging...');
//    next();
//}

//app.use(logger);

//view Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Global Vars
app.use(function(req, res, next) {
    res.locals.errors = null;
    next();
});

//express validator middleware
app.use(expressValidator());
// set static path

app.use(express.static(path.join(__dirname, 'public')));

//var people = [{
//    name: "Jeff",
//    age: 30
//}, {
//    name: "Sara",
//    age: 22
//}, {
//    name: "Bill",
//    age: 40
//}];

//app.get('/', (req, res) => {
//    res.json(people);
//});

var users = [
    {
        id:1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'millergl2@gmail.com'
    },
    {
        id: 2,
        firstName: 'Sue',
        lastName: 'Miller',
        email: 'bacon@gmail.com'
    },
    {
        id: 3,
        firstName: 'Bob',
        lastName: 'Barker',
        email: 'barkerwoof@gmail.com'
    },
]

app.get('/', (req, res) => {    
    db.users.find(function (err, docs) {
        console.log(docs);
        res.render('index', {
            title: 'Customers',
            users: docs
        });
    });
});
app.post('/users/add', (req, res) => {
    req.checkBody('firstName', 'First name is required').notEmpty();
    req.checkBody('lastName', 'Last name is required').notEmpty();
    req.checkBody('email', 'email is required').notEmpty();

    var errors = req.validationErrors();
    if (errors) {
        console.log('ERRORS');
        res.locals.errors = errors;
        res.render('index', {
            title: 'Customers',
            users: users
        });
    }
    else {        
        var newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
        }
        db.users.insert(newUser,
            function (err, result) {
                if (err) {
                    console.log(err);
                }
                res.redirect('/');
            }
        );        
    }
});

app.delete('/users/delete/:id', function (req, res) {
    db.users.remove({ _id: ObjectId(req.params.id) }, (err) => {
        if (err)
            console.log(err)
        res.redirect('/');
    });
});

app.listen(port, () => { console.log("Server started on port: " + port); })

//fs.readFile('index.html', (err, html) => {
//    if (err) {
//        throw err;
//    }

//    const server = http.createServer((req, res) => {
//        res.statusCode = 200;
//        res.setHeader('Content-type', 'text/html');
//        res.write(html);
//        res.end();
//    });

//    server.listen(port, hostname, () => {
//        console.log('Server started on port ' + port);
//    })
//});


function AddPlugin(module) {
    var mod;
    try {
        mod = require(module);
        console.log('Adding Module Completed ' + module);
    }
    catch(err){
        console.log('Adding Module Failed! ' + module);
    }
    return mod;
}

