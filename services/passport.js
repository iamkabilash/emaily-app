const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id); //user.id is the mongo record _id
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google_client_id,
      clientSecret: keys.google_client_secret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log("access token: ", accessToken);
      // console.log("refresh token: ", refreshToken);
      // console.log("profile: ", profile);
      // console.log("done: ", done);

      const existingUser = await User.findOne({ googleID: profile.id });
      if (existingUser) {
        // user already exist.
        done(null, existingUser); // (error = null, userRecord = existingUser)
      } else {
        const user = await new User({
          googleID: profile.id,
        }).save();
        done(null, user);
      }
    }
  )
);
