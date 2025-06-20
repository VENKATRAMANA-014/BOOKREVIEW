import React, { useEffect, useState } from 'react'
import API from '../api/api'
import { Link } from 'react-router-dom'
import './Home.css'
import Footer from './Footer'

function Home() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    API.get('/books').then(res => setBooks(res.data))
  }, [])

  return (
    <>
      <div className='home-wrapper'>
        <div className='hero'>
          <div className='hero-text'>
            <h1>Discover Your Next Favorite Book</h1>
            <p>Read reviews. Share thoughts. Connect through stories.</p>
            <Link to='/books' className='btn btn-light btn-lg mt-3'>Browse All Books</Link>
          </div>
        </div>

        <div className='container mt-5'>
          <h2 className='mb-4 text-center'>Featured Books</h2>
          <div className='row'>
            {books.slice(0, 4).map(book => (
              <div className='col-md-3 mb-4' key={book._id}>
                <div className='card book-card h-100'>
                  <img src={book.image} className='card-img-top' alt={book.title} />
                  <div className='card-body'>
                    <h5 className='card-title'>{book.title}</h5>
                    <p className='card-text text-muted'>{book.author}</p>
                    <Link to={`/books/${book._id}`} className='btn btn-outline-primary btn-sm'>View</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home
