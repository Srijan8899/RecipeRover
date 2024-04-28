import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        image: {
            url: String,
            public_id: String
        },  
        summary: {
            type: String,
            required: true,
        },
        ingredients: {
            type: String,
            required: true,
        },
        instructions: {
            type: String,
            required: true,
        },
        authorName: {
            type: String,
            required: true,
        },
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        comments:[
            {
            text: String,
            created: {type: Date, default: Date.now},
            postedBy: {
                id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
                name: String
              }
            }
        ]
    },
    { timestamps: true }
);

export const Recipe = mongoose.model("Recipe", recipeSchema)