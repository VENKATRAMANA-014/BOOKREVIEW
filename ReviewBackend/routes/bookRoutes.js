const express = require('express')
const router = express.Router()
const { getAllBooks, getBookById, addBook } = require('../controllers/bookController')

router.get('/', getAllBooks)
router.get('/:id', getBookById)
router.post('/', addBook)

module.exports = router
