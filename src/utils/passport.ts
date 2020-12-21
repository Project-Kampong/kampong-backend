import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';

import { ErrorResponse } from './errorResponse';
import { db } from '../database';

export const googlePassport = passport => {
    passport.use(
        new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google-login/callback'
        },
            async (accessToken, refreshToken, profile, done) => {
                try {
                    const user = await db.oneOrNone('SELECT * FROM loginuser WHERE email = $1', profile.emails[0].value);
                    if (user) {
                        if (user.google_id === null) {
                            user.google_id = profile.id;
                        }
                        done(null, user);
                    }
                } catch (e) {
                    const error = new ErrorResponse(e, e.statusCode);
                    console.error(error);
                }
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
            async (accessToken, refreshToken, profile, done) => {
                try {
                    const user = await db.oneOrNone('SELECT * FROM loginuser WHERE email = $1', profile.emails[0].value);
                    if (user) {
                        if (user.facebook_id === null) {
                            user.facebook_id = profile.id;
                        }
                        done(null, user);
                    }
                } catch (e) {
                    const error = new ErrorResponse(e, e.statusCode);
                    console.error(error);
                }
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
