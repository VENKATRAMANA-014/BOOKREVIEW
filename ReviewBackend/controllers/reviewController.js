const Review = require('../models/Review')

const getReviews = async (req, res) => {
  const reviews = await Review.find({ bookId: req.query.bookId })
  res.json(reviews)
}

const addReview = async (req, res) => {
  const review = new Review(req.body)
  const created = await review.save()
  res.status(201).json(created)
}

module.exports = { getReviews, addReview }
