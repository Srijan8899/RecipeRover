import { Recipe } from "../models/recipe-model.js";
import { User } from "../models/user-model.js";
import asyncHandler from "../utils/asyncHandler.js";
import { uploadOnCloudinary, destroyOnCloudinary } from "../utils/cloudinary.js";

export const createRecipe = asyncHandler(async (req, res) => {
  try {
    const { title, summary, ingredients, instructions, authorName, postedBy } = req.body;

    const { url, public_id } = await uploadImage(req.file);
    const recipeDoc = await Recipe.create({
      title,
      image: { url, public_id },
      summary,
      ingredients,
      instructions,
      authorName,
      postedBy,
    });
    return res.status(200).json(recipeDoc);
  } catch (error) {
    // Handle errors
    console.log(error);
    return res.status(500).json({ error: "Server error" });
  }
});

// upload image function for cloudinary
const uploadImage = async (file) => {
  try {
    if (!file) {
      throw new Error("No thumbnail uploaded");
    }
    const localFilePath = file.path;
    const cloudinaryResponse = await uploadOnCloudinary(localFilePath);
    if (
      cloudinaryResponse &&
      cloudinaryResponse.url &&
      cloudinaryResponse.public_id
    ) {
      const obj = {
        url: cloudinaryResponse.url,
        public_id: cloudinaryResponse.public_id,
      };
      return obj;
    } else {
      return "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    }
  } catch (error) {
    throw error;
  }
};

export const getAllRecipes = asyncHandler(async (req, res) => {
  const recipes = await Recipe.find().sort({ createdAt: -1 }).limit(10);
  return res.status(200).json(recipes);
});

export const getRecipeById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const recipe = await Recipe.findById(id);
  if (!recipe) return res.status(404).json({ message: "Recipe not found" });
  return res.status(200).json(recipe);
});

export const deleteRecipe = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const current = await Recipe.findById(id);
  const imgId = current.image.public_id;
  if (imgId) await destroyOnCloudinary(imgId); //delete image from cloudinary

  try {
    const recipe = await Recipe.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Recipe deleted successfully",
    });
  } catch (error) {
    next(error);
  }
});

export const updateRecipe = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { title, image, summary, ingredients, instructions } = req.body;
    const current = await Recipe.findById(id);

    const data = {
      title: title || current.title,
      summary: summary || current.summary,
      image: current.image,
      ingredients: ingredients || current.ingredients,
      instructions: instructions || current.instructions,
    };
    if (req.body.image !== "null") {
      const imgId = current.image.public_id;
      if (imgId) await destroyOnCloudinary(imgId);

      const imageUrl = await uploadImage(req.file);
      data.image.url = imageUrl.url;
      data.image.public_id = imageUrl.public_id;
    }
    const update = await Recipe.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json({
      success: true,
      update,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export const addComment = asyncHandler(async (req, res) => {
  const { id: recipeId } = req.params;
  const { id: userId, firstName, lastName } = req.user;

  try {
    const name = firstName + " " + lastName;
    const { comment } = req.body;
    const newComment = {
      text: comment,
      postedBy: { id: userId, name: name }, // Include both id and name
    };
    const recipe = await Recipe.findByIdAndUpdate(
      recipeId,
      {
        $push: { comments: newComment },
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      recipe,
    });
  } catch (error) {
    next(error);
  }
});

export const addLike = asyncHandler(async (req, res, next) => {
  const { id: recipeId } = req.params;
  const { id: userId } = req.user;

  try {
    const recipe = await Recipe.findByIdAndUpdate(
      recipeId,
      {
        $addToSet: { likes: userId },
      },
      { new: true }
    );

    if (!recipe) {
      return res
        .status(404)
        .json({ success: false, error: "Recipe not found" });
    }

    res.status(200).json({ success: true, recipe });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export const removeLike = asyncHandler(async (req, res, next) => {
  const { id: recipeId } = req.params;
  const { id: userId } = req.user;

  try {
    const recipe = await Recipe.findByIdAndUpdate(
      recipeId,
      {
        $pull: { likes: userId },
      },
      { new: true }
    );

    if (!recipe) {
      return res
        .status(404)
        .json({ success: false, error: "Recipe not found" });
    }

    res.status(200).json({ success: true, recipe });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export const addFavorite = asyncHandler(async (req, res, next) => {
  const { id: recipeId } = req.params;
  const { id: userId } = req.user;

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      {
        $addToSet: { favorites: recipeId },
      },
      { new: true }
    );
    const newData = await User.findById(userId);
    const newList = newData.favorites;
    res.status(200).json( newList );
    
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export const removeFavorite = asyncHandler(async (req, res, next) => {
  const { id: recipeId } = req.params;
  const { id: userId } = req.user;

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      {
        $pull: { favorites: recipeId },
      },
      { new: true }
    );
    const newData = await User.findById(userId);
    const newList = newData.favorites;
    res.status(200).json( newList );
  } catch (error) {
    console.log(error);
    next(error);
  }
});
