import {Book} from '../../models/Book.js';

export const getAllBooks = async (req , res) => {

    const books = await Book.find({});

    if(!books){
        return res.status(200).json({
            success: false,
        })
    }

    res.status(200).json({
        success: true,
        books,
    });
}