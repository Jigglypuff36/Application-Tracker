"use strict";
exports.__esModule = true;
var path = require('path');
var express = require('express');
var session = require('express-session');
var cors = require('cors');
// const passport = require('passport')
require('dotenv').config();
var userRoute_1 = require("./routers/userRoute");
var oAuthRouter_1 = require("./routers/oAuthRouter");
// import { authController } from './controllers/authController';
// require('./controllers/authController');
// require('passport');
var passport = require("passport");
// import session from 'express-session';
// require('./controllers/authController');
require("./controllers/authController");
var app = express();
var PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(session({
    // resave: false,
    // saveUninitialized: true,
    secret: 'Secret'
}));
//not sure if this is working
app.use(passport.initialize());
app.use(passport.session());
if (process.env.NODE_ENV) {
    app.use('/', express.static(path.join(__dirname, '../dist')));
}
app.use('/api/user', userRoute_1["default"]);
app.use('/login/success', function (req, res) {
    return res.status(200).send('welcome');
});
app.use('/login/error', function (req, res) {
    return res.status(200).send('error loggin in w google');
});
app.use('/api/oauth', oAuthRouter_1["default"]);
//redirect to page 404 when endpoint does not exist
app.use('*', function (req, res) {
    return res.status(404).send('404 Page Not Found');
});
//global error handling
app.use(function (err, req, res, next) {
    var defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: "An error occurred ".concat(err) }
    };
    var errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});
//start app on port
app.listen(PORT, function () {
    console.log("Server listening on port: ".concat(PORT, "..."));
});
module.exports = app;
