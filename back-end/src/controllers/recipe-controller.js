import {Recipe} from '../models/recipe-model.js';
import asyncHandler from '../utils/asyncHandler.js';
import {uploadOnCloudinary} from '../utils/cloudinary.js';


export const createRecipe = asyncHandler( async (req, res) => {
    // const {token} = localStorage.getItem('token');
    // if(!token) return res.status(401).json({message: 'Not authorized'});

    try {
    const {title, summary, ingredients, instructions, authorName} = req.body;

    const imageUrl = await uploadImage(req.file);
    const recipeDoc = await Recipe.create({
        title,
        image : imageUrl,
        summary,
        ingredients,
        instructions,
        authorName,
    });
    return res.status(200).json(recipeDoc);
    } catch (error) {
        // Handle errors
        console.log(error)
        return res.status(500).json({ error: 'Server error' });
    }
});

const uploadImage = async (file) => {
    try {
        if (!file) {
            throw new Error('No thumbnail uploaded');
        }
        const localFilePath = file.path;
        const cloudinaryResponse = await uploadOnCloudinary(localFilePath);
        if(cloudinaryResponse && cloudinaryResponse.url){
        return cloudinaryResponse.url;
        }
        else{
            return "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        }
    } 
    catch (error) {
        throw error;
    }
};

export const getAllRecipes = asyncHandler( async (req, res) => {
    const recipes = await Recipe.find()
    .sort({createdAt: -1})
    .limit(10);
    return res.status(200).json(recipes);
});

export const getRecipeById = asyncHandler( async (req, res) => {
    const {id} = req.params;
    const recipe = await Recipe.findById(id);
    if(!recipe) return res.status(404).json({message: 'Recipe not found'});
    return res.status(200).json(recipe);
});
