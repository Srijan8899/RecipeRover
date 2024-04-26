import jwt from "jsonwebtoken"
import { User } from "../models/user-model.js";


const requireLogin = async (req,res,next) => {

    //verify authorization
    const { authorization } = req.headers

    if(!authorization){
        return res.status(401).json({error : 'Authentication token required'})
    }
    const token = authorization.split(' ')[1]

    try {
       const {id} = jwt.verify(token, process.env.JWT_SECRET);
       req.user = await User.findById(id);
       next();

    } catch (error) {
        console.log(error);
        res.status(401).json({error: 'You are not authorized'})
    }
}

export default requireLogin