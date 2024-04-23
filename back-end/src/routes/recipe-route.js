import express from 'express';
import { createRecipe, getAllRecipes, getRecipeById } from '../controllers/recipe-controller.js';
import { upload } from '../middleware/multer.js';

const recipeRouter = express.Router();

recipeRouter.post('/post', upload.single('image') , createRecipe);
recipeRouter.get('/get', getAllRecipes);
recipeRouter.get('/get/:id', getRecipeById);

export default recipeRouter