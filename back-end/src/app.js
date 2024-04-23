import express from "express";
import cors from "cors";
import cookieparser from "cookie-parser";

import router from "./routes/user-route.js";
import recipeRouter from "./routes/recipe-route.js";
const app = express();

app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true
    }
));

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"));
app.use(cookieparser());


app.use("/user", router);
app.use("/recipe", recipeRouter);

export default app