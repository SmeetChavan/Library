import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({

    name: String,
    email: String,
    password: String,

} , {timestamps: true});

export const User = mongoose.model("User" , userSchema);