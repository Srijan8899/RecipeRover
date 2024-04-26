import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
        type :String,
        required : true
    },
    link: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", bookSchema);
