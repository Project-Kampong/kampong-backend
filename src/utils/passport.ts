import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
// import { v1 as uuidv1 } from 'uuid';

// import { ErrorResponse } from './errorResponse';
import { db } from '../database';

export const googlePassport = passport => {
    passport.use(
        new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google-login/callback'
        },
            (accessToken, refreshToken, profile, done) => {
                // try {
                //     const user = await db.oneOrNone('SELECT * FROM loginuser WHERE email = $1', profile.emails[0].value);
                //     if (user) {
                //         if (user.google_id === null) {
                //             user.google_id = profile.id;
                //         }
                //         done(null, user);
                //     }
                //     if (!user) {
                //         const userData = {
                //             user_id: uuidv1(),
                //             first_name: profile.name.givenName,
                //             last_name: profile.name.familyName,
                //             email: profile.emails[0].value,
                //             google_id: profile.id
                //         }
                //         const newUser = db.one('INSERT INTO loginuser (${this:name}) VALUES (${this:csv}) RETURNING *', userData);
                //         done(null, newUser);
                //     }
                // } catch (e) {
                //     const error = new ErrorResponse(e, e.statusCode);
                //     console.error(error);
                // }
                done(null, profile);
            })
    );

    passport.serializeUser((user, done) => {
        done(null, user.user_id);
    });
    
    passport.deserializeUser((user_id, done) => {
        db.one('SELECT * FROM loginuser WHERE user_id = $1', user_id, data => {
            done(data.err, data);
        });
    });
};

export const facebookPassport = passport => {
    passport.use(
        new FacebookStrategy({
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_APP_SECRET,
            callbackURL: '/auth/facebook-login/callback'
        },
            (accessToken, refreshToken, profile, done) => {
                // try {
                //     const user = await db.oneOrNone('SELECT * FROM loginuser WHERE email = $1', profile.emails[0].value);
                //     if (user) {
                //         if (user.facebook_id === null) {
                //             user.facebook_id = profile.id;
                //         }
                //         done(null, user);
                //     }
                //     if (!user) {
                //         const userData = {
                //             user_id: uuidv1(),
                //             first_name: profile.name.givenName,
                //             last_name: profile.name.familyName,
                //             email: profile.emails[0].value,
                //             facebook_id: profile.id
                //         }
                //         const newUser = db.one('INSERT INTO loginuser (${this:name}) VALUES (${this:csv}) RETURNING *', userData);
                //         done(null, newUser);
                //     }
                // } catch (e) {
                //     const error = new ErrorResponse(e, e.statusCode);
                //     console.error(error);
                // }
                done(null, profile);
            })
    );

    passport.serializeUser((user, done) => {
        done(null, user.user_id);
    });
    
    passport.deserializeUser((user_id, done) => {
        db.one('SELECT * FROM loginuser WHERE user_id = $1', user_id, data => {
            done(data.err, data);
        });
    });
};
