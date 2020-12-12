const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passportJWT = require("passport-jwt");
const JWTStrategy  = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

// Load User Model
const User = require('../models/User');

passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
        // Match User
        User.findOne({email: email})
            .then(user => {
                if (!user) {
                    return done(null, false, {message: 'That email is not registered'});
                }
                // Match Password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) {
                        return done(null, false, {message: "Password Invalid"})
                    }
                    if (isMatch) {
                        return done(null, user);
                    }
                    else {
                        return done(null, false, {message: "Password is incorrect"});
                    }
                });
            })
            .catch(err => console.log(err));
    })
);


passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : 'secret'
    },
    
    (jwtPayload, done) => {
        console.log(jwtPayload)
        if (!jwtPayload.userProfile) {
            return done(null, false, {message: "No user in Token"})
        }
        return done(null, jwtPayload.userProfile)
    }
));


module.exports = passport;