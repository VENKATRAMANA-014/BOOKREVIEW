import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer bg-dark text-light'>
      <div className='container text-center py-3'>
        <p className='mb-1'>&copy; {new Date().getFullYear()} BookReview. All rights reserved.</p>
        <p className='footer-links'>
          <a href='/' className='text-light mx-2'>Home</a>|
          <a href='/books' className='text-light mx-2'>Books</a>|
          <a href='/profile' className='text-light mx-2'>Profile</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
