const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: String,
    publishedYear: Number,
    genre: [
        {
            type: String,
        }
    ],
    language: String,
    country: String,
    rating: [
        {
            type: Number,
            min: 1,
            max: 5,
            default: 0
        }
    ],
    summary: String,
    coverImageUrl: String
});

const Books = mongoose.model("Books", bookSchema);
module.exports = Books;