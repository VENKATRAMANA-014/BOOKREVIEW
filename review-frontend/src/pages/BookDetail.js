import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import API from '../api/api'
import './BookDetail.css'

function BookDetail() {
  const { id } = useParams()
  const [book, setBook] = useState(null)
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    API.get(`/books/${id}`).then(res => setBook(res.data))
    API.get(`/reviews?bookId=${id}`).then(res => setReviews(res.data))
  }, [id])

  if (!book) return <div className='text-center mt-5'>Loading...</div>

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-4'>
          <img src={book.image} className='img-fluid rounded' alt={book.title} />
        </div>
        <div className='col-md-8'>
          <h2>{book.title}</h2>
          <h5>by {book.author}</h5>
          <p className='text-muted'>{book.genre}</p>
          <p>{book.description}</p>
          <Link to={`/submit/${book._id}`} className='btn btn-primary mt-2'>Submit a Review</Link>
        </div>
      </div>

      <hr className='my-4' />
      <h4>Reviews</h4>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index} className='mb-3 p-3 border rounded'>
            <strong>Rating:</strong> {review.rating} / 5
            <p className='mb-0'>{review.comment}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default BookDetail
