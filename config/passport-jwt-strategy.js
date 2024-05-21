const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const Doctor = require('../models/doctor');
var cookieExtractor = function(req) {
    console.log(req.cookies['jwt'])
    var token = null;
    if (req && req.cookies) {
        token = req.cookies['jwt'];
    }else{
        throw new Error("cookie incarect")
    }
    return token;
};
let opts = {
    jwtFromRequest: cookieExtractor/* ExtractJWT.fromAuthHeaderAsBearerToken() */,
    secretOrKey: process.env.JWT_SECRET
}

passport.use(new JWTStrategy(opts, function (jwtPayload, done) {
    console.log("aaaa>>>=")
    Doctor.findById(jwtPayload._id)
    .then(function (user) {
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    })
    .catch(function (error) {
        console.log('Error in finding the User from JWT')
        return done(error);
    });
}))


module.exports = passport;
