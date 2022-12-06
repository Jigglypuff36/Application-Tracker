const express = require('express');
const passport = require('passport');
import { Request, Response, NextFunction } from 'express';
import { request } from 'http';
// import { authController } from '../controllers/authController';
// require('../controllers/authController');

import '../controllers/authController'

const oauthRouter = express.Router();

const successLoginUrl = 'http://localhost:3000/login/success';
const errorLoginUrl = 'http://localhost:3000/login/error';

oauthRouter.get('/', (req: Request, res: Response) => {
    res.status(200).send("<a href='/login/google'>Authenticate with Google</a>")
})

oauthRouter.get('/login/google', 
    passport.authenticate('google', { scope: ['email', 'profile'] })
);

oauthRouter.get('/oauth/google/callback',
    passport.authenticate('google', { 
        failureMessage: 'Cannot Login to Google, Please try again later',
        failureRedirect: errorLoginUrl,
        successRedirect: successLoginUrl
    }),
    (req: Request, res: Response) => {
        console.log('User: ', req.user);
        res.send('Thank you for signing in!');
})


// oauthRouter.get('/protected', (req: Request, res: Response) => {
//     res.status(200).send('Hello!')
// })


export default oauthRouter;