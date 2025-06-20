import React, { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import API from '../api/api'
import { UserContext } from '../context/UserContext'
import './SubmitReview.css'

function SubmitReview() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await API.post('/reviews', {
      bookId: id,
      userId: user?._id,
      rating,
      comment
    })
    navigate(`/books/${id}`)
  }

  if (!user) {
    return (
      <div className='container mt-5 text-center text-danger fs-5'>
        Please <a href='/login' className='text-primary fw-bold'>login</a> to submit a review.
      </div>
    )
  }

  return (
    <div className='submit-review-page d-flex align-items-center justify-content-center'>
      <div className='review-box'>
        <h3 className='text-center mb-4 fw-bold text-success'>Submit Your Review</h3>
        <form className='review-form' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label className='form-label'>Rating</label>
            <select
              className='form-select shadow-sm'
              value={rating}
              onChange={e => setRating(e.target.value)}
            >
              {[1, 2, 3, 4, 5].map(r => (
                <option key={r} value={r}>{r} Star{r > 1 && 's'}</option>
              ))}
            </select>
          </div>

          <div className='mb-4'>
            <label className='form-label'>Comment</label>
            <textarea
              className='form-control shadow-sm'
              rows='6'
              placeholder='Share your thoughts about the book...'
              value={comment}
              onChange={e => setComment(e.target.value)}
            ></textarea>
          </div>

          <button className='btn btn-success w-100 fw-semibold' type='submit'>
            Submit Review
          </button>
        </form>
      </div>
    </div>
  )
}

export default SubmitReview
