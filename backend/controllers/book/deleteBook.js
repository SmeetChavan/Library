import {Book} from '../../models/Book.js';

export const deleteBook = async (req , res) => {

    const {Id} = req.body;

    const book = await Book.findByIdAndDelete(Id);
    if(!book){
        return res.status(400).json({
            created: false,
        });
    }

    res.status(200).json({
        deleted: true,
    });
}