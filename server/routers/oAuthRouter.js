"use strict";
exports.__esModule = true;
var express = require('express');
var passport = require('passport');
// import { authController } from '../controllers/authController';
// require('../controllers/authController');
require("../controllers/authController");
var oauthRouter = express.Router();
var successLoginUrl = '/login/success';
var errorLoginUrl = '/login/error';
oauthRouter.get('/login/google', passport.authenticate('google', { scope: ['profile',
        'email'] }));
oauthRouter.get('/google/callback', passport.authenticate('google', {
    // failureMessage: 'Cannot Login to Google, Please try again later',
    failureRedirect: errorLoginUrl,
    successRedirect: successLoginUrl
}), function (req, res) {
    console.log('User: ', req.user);
    // res.send('Thank you for signing in!');
    res.send('success');
});
// oauthRouter.get('/protected', (req: Request, res: Response) => {
//     res.status(200).send('Hello!')
// })
exports["default"] = oauthRouter;
