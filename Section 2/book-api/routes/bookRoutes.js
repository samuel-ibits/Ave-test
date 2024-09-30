// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// GET: Retrieve all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST: Add a new book
router.post('/', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear,
        genre: req.body.genre
    });

    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT: Update a book by ID
router.put('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });

        book.title = req.body.title;
        book.author = req.body.author;
        book.publishedYear = req.body.publishedYear;
        book.genre = req.body.genre;

        const updatedBook = await book.save();
        res.json(updatedBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE: Remove a book by ID
router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });

        await book.remove();
        res.json({ message: 'Book deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
