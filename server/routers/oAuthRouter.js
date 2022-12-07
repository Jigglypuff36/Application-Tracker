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
// oauthRouter.get('/', (req: Request, res: Response) => {
//     res.status(200).send("<a href='/login/google'>Authenticate with Google</a>")
// })
oauthRouter.get('/login/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
oauthRouter.get('/oauth/google/callback', passport.authenticate('google', {
    // failureMessage: 'Cannot Login to Google, Please try again later',
    failureRedirect: '/login/failure'
    // successRedirect: successLoginUrl
}), function (req, res) {
    console.log('User: ', req.user);
    // res.send('Thank you for signing in!');
    res.redirect('/login/success');
});
// oauthRouter.get('/protected', (req: Request, res: Response) => {
//     res.status(200).send('Hello!')
// })
exports["default"] = oauthRouter;
