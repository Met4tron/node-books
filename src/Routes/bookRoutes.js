import { Router } from 'express';
import Book from '../Controllers/BookController';

const router = new Router();

router.get('/all', Book.listBooks);
router.get('/name/:bookName', Book.listByName);
router.get('/author/:authorName', Book.listByAuthor);
router.get('/tags/:tag', Book.listByTag);
router.post('/create/books', Book.addBook);
module.exports = router;