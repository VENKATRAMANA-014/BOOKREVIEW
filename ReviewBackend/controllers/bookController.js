const Book = require('../models/Book')

const getAllBooks = async (req, res) => {
  const books = await Book.find()
  res.json(books)
}

const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id)
  res.json(book)
}

const addBook = async (req, res) => {
  const book = new Book(req.body)
  const created = await book.save()
  res.status(201).json(created)
}

module.exports = { getAllBooks, getBookById, addBook }
