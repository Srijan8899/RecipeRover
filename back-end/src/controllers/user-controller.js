import {User} from '../models/user-model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import asyncHandler from '../utils/asyncHandler.js';

const salt = bcrypt.genSaltSync(10);

export const signup =  asyncHandler( async (req, res) => {
    const{firstName, lastName, email, password}= req.body;
    try{
    const userDoc = await User.create({
        firstName,
        lastName, 
        email, 
        password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
    }
    catch(e){
        res.status(400).json(e);
    }
});

export const login = asyncHandler( async (req, res) => {
    const {email, password} = req.body;
    const userDoc = await User.findOne({email});

     if (!userDoc) {
        return res.status(400).json('User not found');
    }

        const passOk = bcrypt.compareSync(password, userDoc.password);

        if(passOk){
            const token=jwt.sign({ id: userDoc._id}, process.env.JWT_SECRET, {expiresIn: '3d'}, (err, token) => {
                if(err) throw err;
                const {firstName, lastName, email} = userDoc;
                res.status(200).json({
                    id: userDoc._id,
                    firstName,
                    lastName,
                    email,
                    token
            });
            });
        }
        else{
            res.status(400).json('Wrong password');
        }
});