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
      console.log('profile', profile.id);
      console.log(profile.emails[0].value);
      const text = `select * from google_user where profile_id = ${profile.id}`
      const user = await db.query(text); 
      // console.log('user', user.rows[0].profile_id);
      if(user.rows[0]){
        return cb(null, user);
      } else {
        //somehow add profile.displayName breaks the code
        const text = `insert into google_user (profile_id, email)  values (${profile.id}, '${profile.emails[0].value}')`
        const insert = await db.query(text);
        const findUser = `select * from google_user where profile_id = ${profile.id}`
        const user = await db.query(findUser);
        console.log('id',user.rows[0].profile_id);
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
  cb(null, user.rows[0].profile_id);
})

//user id encoded at the session/token
//grab session token and grab the id and check database if this id exist
//and then authenticate them
passport.deserializeUser(async (id:any, cb:any) => {
  const text = `select profile_id from google_user where profile_id = '${id}'`
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