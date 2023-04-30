import express from 'express';
import { getAllBooks } from '../controllers/book/getAllBooks.js';
import { addBook } from '../controllers/book/addBook.js';
import { deleteBook } from '../controllers/book/deleteBook.js';
import { addUser } from '../controllers/user/addUser.js';
import { authenticateUser } from '../controllers/user/authenticateUser.js';

const router = express.Router();

router.get("/book/" , getAllBooks);
router.post("/book/add" , addBook);
router.post("/book/delete" , deleteBook);

router.post("/user/add" , addUser);
router.post("/user/login" , authenticateUser);


export default router;