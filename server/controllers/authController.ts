const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//need to import models
import { db } from '../models/model'
const dovenv = require('dotenv').config();
import { RequestHandler } from 'express';

//save to config.env before commit 
const GOOGLE_CLIENT_ID = '423300255292-6bv81ekcrsb18ghje1iupihj2vgc18jo.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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';
const GOOGLE_CCLIENT_URL = 'http://localhost:3000/api/oauth/google/callback';

type authController = {
  googlePassport: RequestHandler
}

// const googleUser = {
//   googleId: profile.id,
//   displayName: profile.displayName,
//   firstName: profile.name.givenName,
//   lastName: profile.name.familyName,
//   email: profile.emails[0].value
// }

// export const authController = {
//   googlePassport: (passport: any) => {
    passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: GOOGLE_CCLIENT_URL,
        passReqToCallback: true
      }, 
      async (req:any, accessToken:any, refreshToken:any, profile:any, cb:any) => {

        try{
          const text = `select * from google_user where user_id = '${profile.id}'`
          const user = await db.query(text); 
          if(user && user[0]){
            cb(null, user && user[0]);
          } else {
            const text = `insert into google_user values ('${profile.id}', '${profile.displayName}',' ${profile.givenName}', '${profile.emails[0].value}')`
            const user = await db.query(text);
            cb(null, user) 
          }
        }
        catch(err) {
          console.log(err)
        }
      }
    ));
//   }
// };

passport.serializeUser((user:any, cb:any) => {
  console.log('serializing user:', user)
  cb(null, user.id);
})

passport.deserializeUser((user:any, cb:any) => {
  cb(null, user);
})

// export default authController;