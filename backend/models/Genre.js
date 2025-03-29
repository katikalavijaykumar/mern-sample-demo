import mongoose from "mongoose";

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Genre name is required."],
    minLength: [3, "Genre name must be at least 3 characters long."],
    maxLength: [32, "Genre name cannot exceed 32 characters."],
    unique: true,
    match: [/^[a-zA-Z0-9 ]+$/, "Genre name can only contain letters and numbers."],
    index: true, // Adding an index for better performance
  },
});

export default mongoose.model("Genre", genreSchema);
