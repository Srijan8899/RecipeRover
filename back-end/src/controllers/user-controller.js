import {User} from '../models/user-model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import asyncHandler from '../utils/asyncHandler.js';
import { Recipe } from '../models/recipe-model.js';
import { Book } from '../models/book-model.js';

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
            const token=jwt.sign({ id: userDoc._id}, process.env.JWT_SECRET, {expiresIn: '3d'});
                const {firstName, lastName, email, favorites} = userDoc;
                res.status(200)
                .json({
                    id: userDoc._id,
                    firstName,
                    lastName,
                    email,
                    token,
                    favorites
            });
            
        }
        else{
            res.status(400).json('Wrong password');
        }
});

export const getFavorites = asyncHandler( async (req, res) => {
    const {id} = req.user;
    const userDoc = await User.findById(id);
    const favorites = userDoc.favorites;
    const recipes = await Recipe.find({ _id: { $in: favorites } });
    res.json(recipes);
    
})

export const getBooks = asyncHandler( async (req, res) => {
    const books = await Book.find().sort({ createdAt: -1 }).limit(10);
  return res.status(200).json(books);
})