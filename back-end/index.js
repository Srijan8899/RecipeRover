import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user-route.js';
import authRouter from './routes/auth-route.js';
// import dotenv from 'dotenv';

// dotenv.config();                                      .env me db link add krna h
mongoose.connect('mongodb://127.0.0.1:27017/api');

import session from "express-session";
import passport from "passport";
import OAuth2Strategy from 'passport-google-oauth2';
import userdb from "./models/user-model.js"
// const OAuth2Strategy = require("passport-google-oauth2").Strategy;

const app= express();


// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//for google auth
const client_id="111131844985-s03m0slr7q885dt43mnff0ks9pvpm4ht.apps.googleusercontent.com"
const client_secret="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"
app.use(express.json());

app.listen( 3000, ()=> {
    
    console.log('Server is running ok'); 
} );

//setup session
app.use(session({
    secret:"shivani",
    resave:false,
    saveUninitialized: true
}))

//setup passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new OAuth2Strategy({
        clientID: client_id,
        clientSecret: client_secret,
        callbackURL: "/auth/google/callback",
        scope:["profile", "email"]
    },
    async(accessToken, refreshToken, profile,done)=>{
        try {
            let user = await userdb.findOne({email:profile.email});

            if(!user)
            {
                user = new userdb({
                    username: profile.username,
                    email: profile.email[0].value
                });
                await user.save();
            }
            return done(null, user)
        }
        catch(error){
            return done(error,null) 
        } 
    }
)
)

passport.serializeUser((user,done)=>{
    done(null, user);
})
passport.deserializeUser((user,done)=>{
    done(null,user);
})

//initial google auth login
app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

app.get("/auth/google/callback",passport.authenticate("google",{
    successRedirect:"http://localhost:3000/profile",      //navigate to profile page
    failureRedirect: "http://localhost:3000/login"
}))

app.use('/api/login', authRouter);                             //need to check
app.use('/api/signup', authRouter);                             //need to check                    

app.use((err, req, res, next)=>{
    const statuscode = err.statuscode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statuscode).json({
        success:false,
        statusCode,
        message,
    });
}); 
