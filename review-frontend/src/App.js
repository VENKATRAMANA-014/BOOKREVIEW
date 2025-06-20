

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Books from './pages/Books'
import BookDetail from './pages/BookDetail'
import SubmitReview from './pages/SubmitReview'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Navbar />
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/books/:id' element={<BookDetail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/submit/:id' element={<SubmitReview />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    
    </>
  )
}

export default App
