"use strict";
exports.__esModule = true;
var express = require('express');
var passport = require('passport');
// import { authController } from '../controllers/authController';
// require('../controllers/authController');
require("../controllers/authController");
var oauthRouter = express.Router();
var successLoginUrl = 'http://localhost:3000/login/success';
var errorLoginUrl = 'http://localhost:3000/login/error';
oauthRouter.get('/', function (req, res) {
    res.status(200).send("<a href='/login/google'>Authenticate with Google</a>");
});
oauthRouter.get('/login/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
oauthRouter.get('/oauth/google/callback', passport.authenticate('google', {
    failureMessage: 'Cannot Login to Google, Please try again later',
    failureRedirect: errorLoginUrl,
    successRedirect: successLoginUrl
}), function (req, res) {
    console.log('User: ', req.user);
    res.send('Thank you for signing in!');
});
// oauthRouter.get('/protected', (req: Request, res: Response) => {
//     res.status(200).send('Hello!')
// })
exports["default"] = oauthRouter;
