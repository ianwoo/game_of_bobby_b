// app/routes.js
module.exports = function(app, passport) {

    //pass user schema for leaderboard
    var User = require('../models/user.js');

    // ============================================
    // HOME PAGE (with login links and leaderboard)
    // ============================================
    app.get('/', function(req, res) {
        //anonymous function to pass sorted user data for leaderboard
        User.find().sort({highscore: -1}).then(function (results) {
            for (var counter = 0; counter < results.length; counter++){
                results[counter].local.password = 'hidden';
                //results[counter].local.email = 'hidden'; CHANGE 'EMAIL' TO USERNAME!!!
            }
            console.log(results);
            res.render('index.ejs', {leaderboard: results});
        })
    });

    // ============================================
    // LOGIN ======================================
    // ============================================
    // show the login form
    app.get('/login', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') }); 
    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true, // allow flash messages
    }));

    // ============================================
    // SIGNUP =====================================
    // ============================================
    // show the signup form
    app.get('/signup', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true, // allow flash messages
    }));

    // ===========================================
    // PROFILE SECTION ===========================
    // ===========================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        User.find().sort({highscore: -1}).then(function (results) {
            for (var counter = 0; counter < results.length; counter++){
                results[counter].local.password = 'hidden';
                //results[counter].local.email = 'hidden';
            }
        res.render('profile.ejs', {
            user : req.user, // get the user out of session and pass to template
            leaderboard: results
            });
        })    
    });

    // ===========================================
    // THE GAME ==================================
    // ===========================================
    app.get('/game', isLoggedIn, function(req, res) {
        res.render('game.ejs', {
            user : req.user
        });
    });

    //pass high score to the backend
    app.post('/game', isLoggedIn, function(req, res) {
        var user            = req.user;
        if (req.body.highscore > user.highscore) {
            user.highscore = req.body.highscore;
            user.save(function(err) {
                res.redirect('/profile');
            });    
        }
    });

    // ===========================================
    // LOGOUT ====================================
    // ===========================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    // ===========================================
    // FACEBOOK ROUTES ===========================
    // ===========================================
    // route for facebook authentication and login
    app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));

    // ===========================================
    // GOOGLE ROUTES =============================
    // ===========================================
    // send to google to do the authentication
    // profile gets us their basic information including their name
    // email gets their emails
    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
    app.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));
    // =============================================================================
    // AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
    // =============================================================================

    // locally --------------------------------
        app.get('/connect/local', function(req, res) {
            res.render('connect-local.ejs', { message: req.flash('loginMessage') });
        });
        app.post('/connect/local', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));
        //closed

    // facebook -------------------------------

        // send to facebook to do the authentication
        app.get('/connect/facebook', passport.authorize('facebook', { scope : 'email' }));

        // handle the callback after facebook has authorized the user
        app.get('/connect/facebook/callback',
            passport.authorize('facebook', {
                successRedirect : '/profile',
                failureRedirect : '/'
        }));
        //closed

    // google ---------------------------------

        // send to google to do the authentication
        app.get('/connect/google', passport.authorize('google', { scope : ['profile', 'email'] }));

        // the callback after google has authorized the user
        app.get('/connect/google/callback',
            passport.authorize('google', {
                successRedirect : '/profile',
                failureRedirect : '/'
        }));
        //closed

    // =============================================================================
    // UNLINK ACCOUNTS =============================================================
    // =============================================================================
    // used to unlink accounts. for social accounts, just remove the token
    // for local account, remove email and password
    // user account will stay active in case they want to reconnect in the future

    // local -----------------------------------
    app.get('/unlink/local', function(req, res) {
        var user            = req.user;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // facebook -------------------------------
    app.get('/unlink/facebook', function(req, res) {
        var user            = req.user;
        user.facebook.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // google ---------------------------------
    app.get('/unlink/google', function(req, res) {
        var user          = req.user;
        user.google.token = undefined;
        user.save(function(err) {
           res.redirect('/profile');
        });
    });

    // route middleware to make sure a user is logged in
    function isLoggedIn(req, res, next) {

        // if user is authenticated in the session, carry on
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/');
    }
};