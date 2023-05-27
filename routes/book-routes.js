const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book-controller');

router.route('/')
    .post(bookController.createBookPost)
router.route('/:id')
    .get(bookController.book_detail)
    .put(bookController.updateBookPut)
    .delete(bookController.deleteComic)

module.exports = router;