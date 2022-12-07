const express = require('express');
const passport = require('passport');
import { Request, Response, NextFunction } from 'express';
import { request } from 'http';
// import { authController } from '../controllers/authController';
// require('../controllers/authController');

import '../controllers/authController'

const oauthRouter = express.Router();

const successLoginUrl = '/login/success';
const errorLoginUrl = '/login/error';

oauthRouter.get('/login/google', 
    passport.authenticate('google', { scope: ['profile', 
    'email'] })
);

oauthRouter.get('/google/callback',
    passport.authenticate('google',
     { 
        // failureMessage: 'Cannot Login to Google, Please try again later',
        failureRedirect: errorLoginUrl,
        successRedirect: successLoginUrl
    }),
    (req: Request, res: Response) => {
        console.log('User: ', req.user);
        // res.send('Thank you for signing in!');
        res.send('success')
})



// oauthRouter.get('/protected', (req: Request, res: Response) => {
//     res.status(200).send('Hello!')
// })


export default oauthRouter;