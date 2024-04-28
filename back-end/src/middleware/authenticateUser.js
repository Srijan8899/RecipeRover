import jwt from "jsonwebtoken"
import { User } from "../models/user-model.js";
import { Recipe } from "../models/recipe-model.js";


const authenticateUser = async (req,res,next) => {

    //verify authorization
    const { authorization } = req.headers
    const recipeId = req.params.id

    if(!authorization){
        return res.status(401).json({error : 'Authentication token required'})
    }
    const token = authorization.split(' ')[1]

    try {
       const {id} = jwt.verify(token, process.env.JWT_SECRET);
       const user = await User.findById(id);
        const recipe = await Recipe.findById(recipeId);
        const isAuthor= recipe.postedBy.toString() === user._id.toString();
        if(isAuthor){
       next();
        }
else{
    return res.status(401).json({error: 'You are not the Author'})
}
    } catch (error) {
        console.log(error);
        res.status(401).json({error: 'You are not authorized'})
    }
}

export default authenticateUser