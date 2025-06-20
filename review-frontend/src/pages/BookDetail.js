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
    <div className='container mt-5 mb-5 book-detail-wrapper'>
      <div className='row g-4 align-items-start'>
        <div className='col-md-5'>
          <img src={book.image} className='img-fluid rounded shadow book-image' alt={book.title} />
        </div>
        <div className='col-md-7'>
          <h2 className='book-title'>{book.title}</h2>
          <h5 className='text-muted mb-2'>by {book.author}</h5>
          <span className='badge bg-secondary mb-3'>{book.genre}</span>
          <p className='book-description'>{book.description}</p>
          <Link to={`/submit/${book._id}`} className='btn btn-primary mt-3'>Submit a Review</Link>
        </div>
      </div>

      <hr className='my-5' />

      <div className='reviews-section'>
        <h4 className='mb-4'>Reviews</h4>
        {reviews.length === 0 ? (
          <p className='text-muted'>No reviews yet. Be the first to share your thoughts!</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className='review-box mb-3'>
              <div className='d-flex justify-content-between'>
                <strong>Rating: {review.rating} / 5</strong>
                <span className='text-muted small'>{new Date(review.date).toLocaleDateString()}</span>
              </div>
              <p className='mb-0 mt-2'>{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default BookDetail
