// mongodb+srv://shrey:<password>@cluster0.ogcsour.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

import dotenv from "dotenv";
import dbConnect from "./db/index.js";
import app from "./app.js";

dotenv.config(
    { path: "./.env" }
);

dbConnect()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.log("Error connecting to database...", error);
})