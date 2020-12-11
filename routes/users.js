const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// User Model
const User = require('../models/User');

// Register Handle
router.post('/register', (req, res) => {
    const {name, email, password, password2} = req.body;

    let errors = [];

    // Check required fields
    if (!name || !email || !password || !password2) {
        errors.push({msg: "Please fill in all fields"});
    }

    // Check passwords match
    if(password !== password2) {
        errors.push({msg: "Passwords do not match"});
    }

    // Check password length
    if (password.length < 6) {
        errors.push({msg: "Password does not exceed 6 characters"});
    }

    if (errors.length > 0) {
        res.send(200, {msg: errors})
    } else {
        // Validation Pass
        User.findOne({email: email})
            .then(user => {
                if (user) {
                    // User Exists
                    errors.push({msg: "Email is already registered"})
                    console.log(errors);
                    return errors;
                }
                else {
                    const newUser = new User({
                        name,
                        email,
                        password
                    });

                    // Hash Password
                    bcrypt.genSalt(10, (err, salt) => {
                      bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;

                        // Set password to hashed.
                        newUser.password = hash;
                        // Save user to DB
                        newUser.save()
                            .then(user => {
                                res.send(user);
                            })
                            .catch(err => console.log(err));
                    })})
                }
            });
    }
});

// Login Handle
router.post('/login', (req, res, next) => {
    passport.authenticate('local'),
    () => {
        console.log("Success Login!")
    };
})

// Logout Handle
router.get('/logout', (req, res) => {
    req.logOut();
})

module.exports = router;