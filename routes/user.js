const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const wrapAsync = require('../utils/wrapAsync');

router.get('/signup', (req, res) => {
    res.render('./users/signup');
});

router.post('/signup', wrapAsync(async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to stayBnB!');
            res.redirect('/listings');
        });
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/signup');
    }
}));

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: 'Invalid username or password.'
    })(req, res, next);
}, (req, res) => {
    req.flash('success', 'Welcome back!');
    res.redirect('/listings');
});

// Logout Route
router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Logged out successfully.');
        res.redirect('/login');
    });
});



module.exports = router;
