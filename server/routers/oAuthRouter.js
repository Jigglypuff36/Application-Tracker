"use strict";
exports.__esModule = true;
var express = require('express');
var auth = require('./oAuth');
var passport = require('passport');
var oAuthRouter = express.Router();
oAuthRouter.get('/', function (req, res) {
    return res.status(200).send('<a href="/auth/google">Authenticate with Google</a>');
});
oAuthRouter.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
oAuthRouter.get('/protected', function (req, res) {
    res.status(200).send('Hello!');
});
exports["default"] = oAuthRouter;
