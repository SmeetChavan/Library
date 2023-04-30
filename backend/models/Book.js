import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const bookSchema = new Schema({

    title: String,
    author: String,

} , {timestamps: true});

export const Book = mongoose.model("Book" , bookSchema);