const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//need to import models
import { db } from '../models/model'
const dovenv = require('dotenv').config();
import { RequestHandler } from 'express';

//save to config.env before commit 
const GOOGLE_CLIENT_ID = '423300255292-6bv81ekcrsb18ghje1iupihj2vgc18jo.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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';
const GOOGLE_CLIENT_URL = 'http://localhost:3000/api/oauth/google/callback';


// const googleUser = {
//   googleId: profile.id,
//   displayName: profile.displayName,
//   firstName: profile.name.givenName,
//   lastName: profile.name.familyName,
//   email: profile.emails[0].value
// }


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_CLIENT_URL,
    passReqToCallback: true
  }, 
  async (req:any, accessToken:any, refreshToken:any, profile:any, cb:any) => {

    try{
      console.log('profile', profile);
      const text = `select * from google_user where user_id = '${profile.id}'`
      const user = await db.query(text); 
      console.log('user', user)
      if(user){
        return cb(null, user);
      } else {
        const text = `insert into google_user values ('${profile.id}', '${profile.displayName}',' ${profile.givenName}', '${profile.emails[0].value}')`
        const user = await db.query(text);
        return cb(null, user) 
      }
    }
    catch(err) {
      console.log(err)
    }
  }
));

//create session token by grabbing the user data (id) and encode it and save it inside a cookie
passport.serializeUser((user:any, cb:any) => {
  console.log('serializing user:', user)
  cb(null, user.id);
})

//user id encoded at the session/token
//grab session token and grab the id and check database if this id exist
//and then authenticate them
passport.deserializeUser(async (id:any, cb:any) => {
  const text = `select user_id from google_user where user_id = '${id}'`
  try{
    const userId = await db.query(text); 
    if(userId) cb(null,userId);
    console.log("Deserialized user:", userId)
  }
  catch(err){
    console.log(err);
    cb(err,null);
  }
})

// export default authController;