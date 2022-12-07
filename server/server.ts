const path = require('path');
const express = require('express')
const session = require('express-session')
// const passport = require('passport')
require('dotenv').config();
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import userRoute from './routers/userRoute'
import oauthRouter from './routers/oAuthRouter';
import { ErrorType } from '../types';
import { db } from './models/model'
// import { authController } from './controllers/authController';
// require('./controllers/authController');
// require('passport');
import * as passport from 'passport';
// import session from 'express-session';
// require('./controllers/authController');
import './controllers/authController'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.use('/api/user', userRoute)

app.use('/login/success', (req: Request, res: Response) => {
  return res.status(200).send('welcome');
})

app.use('/login/error', (req: Request, res: Response) => {
  return res.status(200).send('error loggin in w google');
})

app.use('/api/oauth', oauthRouter);


//redirect to page 404 when endpoint does not exist
app.use('*', (req: Request, res: Response) => {
  return res.status(404).send('404 Page Not Found');
});

//global error handling
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  const defaultErr: ErrorType = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: `An error occurred ${err}` },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//start app on port
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });

module.exports = app;