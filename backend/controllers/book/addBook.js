import {Book} from '../../models/Book.js';

export const addBook = async (req , res) => {

    const {title , author} = req.body;

    const book = await Book.create({title: title , author: author});

    if(!book){
        return res.status(400).json({
            created: false,
        });
    }

    res.status(200).json({
        created: true,
    });
}