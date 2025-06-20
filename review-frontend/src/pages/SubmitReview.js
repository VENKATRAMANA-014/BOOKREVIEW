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

  if (!user) return <div className='container mt-5'>Login required to submit review.</div>

  return (
    <div className='container mt-4'>
      <h3>Submit Review</h3>
      <form className='review-form' onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Rating (1-5)</label>
          <select className='form-select' value={rating} onChange={e => setRating(e.target.value)}>
            {[1, 2, 3, 4, 5].map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div className='mb-3'>
          <label className='form-label'>Comment</label>
          <textarea className='form-control' rows='4' value={comment} onChange={e => setComment(e.target.value)}></textarea>
        </div>
        <button className='btn btn-success' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SubmitReview
