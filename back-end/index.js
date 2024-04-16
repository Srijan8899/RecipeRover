import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user-route.js';
import authRouter from './routes/auth-route.js';
// import dotenv from 'dotenv';

// dotenv.config();                                      .env me db link add krna h
mongoose.connect('mongodb://127.0.0.1:27017/api');


const app= express();
app.use(express.json());

app.listen( 3000, ()=> {
    
    console.log('Server is running ok');
} );

app.use('/login', userRoutes);                             //need to check
app.use('/signup', userRoutes);                             //need to check                    

app.use((err, req, res, next)=>{
    const statuscode = err.statuscode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statuscode).json({
        success:false,
        statusCode,
        message,
    });
});