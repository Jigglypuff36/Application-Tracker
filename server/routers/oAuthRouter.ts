const express = require('express');
const auth = require('./oAuth');
const passport = require('passport');
import { Request, Response } from 'express';
import { appendFile } from 'fs';


const oAuthRouter = express.Router();

oAuthRouter.get('/', (req: Request, res: Response) => {
    return res.status(200).send('<a href="/auth/google">Authenticate with Google</a>')
})

oAuthRouter.get('/auth/google', 
    passport.authenticate('google', { scope: ['email', 'profile'] })
);

oAuthRouter.get('/protected', (req: Request, res: Response) => {
    res.status(200).send('Hello!')
})


export default oAuthRouter;