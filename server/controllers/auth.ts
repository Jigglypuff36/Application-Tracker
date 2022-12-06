import { userInfo } from "os";
import { REPL_MODE_SLOPPY } from "repl";

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//need to import models

//save to config.env before commit 
const GOOGLE_CLIENT_ID = '423300255292-6bv81ekcrsb18ghje1iupihj2vgc18jo.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

module.exports = function (passport: any){
  passport.use(new GoogleStrategy({
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/google/callback",
      passReqToCallback: true
    },
    async function(accessToken:any, refreshToken:any, profile:any, cb:any, done:any, err:any) {
      //create or find user in our database
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        // return done(err, profile);
      // });
      // const googleUser = {
      //   googleId: profile.id,
      //   displayName: profile.displayName,
      //   firstName: profile.name.givenName,
      //   lastName: profile.name.familyName,
      //   email: profile.emails[0].value
      // }
      try{
        // let user = await User.findOne({googleId: profile.id})
        const text = `select * from google_user where user_id = ${profile.id}`
        const user = await models.query(text); 
        if(user){
          done(null, user);
        } else {
          const text = `insert into google_user values ${profile.id}, ${profile.displayName}, ${profile.givenName}, ${profile.emails[0].value}`
          const user = await models.query(text);
          done(null, user) 
        }
      }
      catch(err) {
        console.log(err)
      }
    }
  ));
}

passport.serializeUser((user:any, done:any) => {
    done(null, user.id);
})

passport.deserializeUser((user:any, done:any) => {
    done(null, user);
})