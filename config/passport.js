const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//Require your User Model here!
const User = require('../models/user');
// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  async function(accessToken, refreshToken, profile, cb) {
    // a user has logged in via OAuth!
    // refer to the lesson plan from earlier today in order to set this up
    console.log(profile, '<--this is the profile on google'); 

    //step 1. Check if hte user exist in the database, if they do - provide user docu to the passport
    const user = await User.findOne({googleId: profile.id}); // <-This will return undefied if user is not in the db

    if(user) return cb(null, user); // <--null is passed if there is no error
    // ========== END OF STEP 1 =============

    //step 2. If the user does not exist in the db, this means there will be a new user, so we need to add them to the db
    try {
      const newUser = await User.create({
        name: profile.displayName,
        googleId: profile.id,
        email: profile.emails[0].value, //<-- this gives us the email
        avatar: profile.photos[0].value // <-- the hosted image string/link
      })
      // pass the newUser docu to passport
      return cb(null, newUser)

    } catch(err){
      //cb(error, dataThatYouWantToPassToPassport)
      return cb(err)
    }

  }
));

//serializeUser returns the data that passport is going to add to the session to track the user. This function is called after the verify callback function ^
passport.serializeUser(function(user, done) {
  done(null, user.id); //<-- storing in our session cookie the logged in users id
});

//deserializeUser is called every time a request comes in from a logged in user
//this is where the passport assigns the user docu to req.user, so in every single function we have acess to req.user which is logged in users mongoose document
passport.deserializeUser(function(id, done) {

  // Find your User, using your model, and then call done(err, whateverYourUserIsCalled)
  // When you call this done function passport assigns the user document to req.user, which will 
  // be availible in every Single controller function, so you always know the logged in user
  User.findById(userId, function(err, userDocument){
    if(err) return done(err)
    done(null, userDocument); // <--this assigns the userDocument to req.user = userDocument
  })

});



