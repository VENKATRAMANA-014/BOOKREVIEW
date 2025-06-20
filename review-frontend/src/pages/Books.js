import React, { useEffect, useState } from 'react'
import API from '../api/api'
import { Link } from 'react-router-dom'
import './Books.css'

function Books() {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState('')

  useEffect(() => {
    API.get('/books').then(res => setBooks(res.data))
  }, [])

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()) &&
    (genre === '' || book.genre === genre)
  )

  const genres = [...new Set(books.map(book => book.genre))]

  return (
    <div className='books-wrapper container py-5'>
      <h2 className='text-center mb-5 fw-bold'>📚 Browse All Books</h2>

      <div className='filters d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-4'>
        <input
          type='text'
          className='form-control'
          placeholder='🔍 Search by title...'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className='form-select'
          value={genre}
          onChange={e => setGenre(e.target.value)}
        >
          <option value=''>All Genres</option>
          {genres.map((g, index) => (
            <option key={index} value={g}>{g}</option>
          ))}
        </select>
      </div>

      <div className='row'>
        {filteredBooks.map(book => (
          <div className='col-md-3 col-sm-6 mb-4' key={book._id}>
            <div className='card book-card h-100 shadow-sm'>
              <img src={book.image} className='card-img-top' alt={book.title} />
              <div className='card-body d-flex flex-column justify-content-between'>
                <div>
                  <h5 className='card-title'>{book.title}</h5>
                  <p className='card-text text-muted'>{book.author}</p>
                </div>
                <Link to={`/books/${book._id}`} className='btn btn-outline-primary btn-sm mt-3'>
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
        {filteredBooks.length === 0 && (
          <p className='text-center text-muted mt-4'>No books found.</p>
        )}
      </div>
    </div>
  )
}

export default Books
