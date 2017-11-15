// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '', // go get
        'clientSecret'  : '', // your own
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'googleAuth' : {
        'clientID'      : '', // app secrets,
        'clientSecret'  : '', // ya git
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};