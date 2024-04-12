import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user-route.js';
// import dotenv from 'dotenv';

// dotenv.config();                                      .env me db link add krna h
mongoose.connect('mongodb://127.0.0.1:27017/api');


const app= express();

app.listen( 3000, ()=> {
    
    console.log('Server is running ok');
} );

app.use('/login', userRoutes);
