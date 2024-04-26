import express from 'express';
import { createRecipe, getAllRecipes, getRecipeById, addComment, addLike, removeLike, deleteRecipe, updateRecipe, addFavorite, removeFavorite } from '../controllers/recipe-controller.js';
import { upload } from '../middleware/multer.js';
import requireLogin from '../middleware/requireLogin.js';

const recipeRouter = express.Router();

recipeRouter.post('/post', upload.single('image') , createRecipe);

recipeRouter.get('/get', getAllRecipes);
recipeRouter.get('/get/:id', getRecipeById);

recipeRouter.delete('/delete/:id', deleteRecipe);
recipeRouter.put('/update/:id', upload.single('image') , updateRecipe);

recipeRouter.put('/comment/:id', requireLogin, addComment);

recipeRouter.put('/addLike/:id', requireLogin, addLike);
recipeRouter.put('/removeLike/:id',requireLogin, removeLike);

recipeRouter.put('/addFavorite/:id', requireLogin, addFavorite);
recipeRouter.put('/removeFavorite/:id',requireLogin, removeFavorite);


export default recipeRouter