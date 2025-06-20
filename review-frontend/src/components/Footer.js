import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer bg-dark text-white pt-4 mt-5'>
      <div className='container'>
        <div className='row text-center text-md-start'>
          <div className='col-md-4 mb-3'>
            <h5 className='footer-title'>BookReview</h5>
            <p>Explore, rate, and review your favorite books. Built for readers by readers.</p>
          </div>
          <div className='col-md-4 mb-3'>
            <h6>Quick Links</h6>
            <ul className='list-unstyled'>
              <li><a href='/' className='footer-link'>Home</a></li>
              <li><a href='/books' className='footer-link'>Books</a></li>
              <li><a href='/login' className='footer-link'>Login</a></li>
              <li><a href='/register' className='footer-link'>Register</a></li>
            </ul>
          </div>
          <div className='col-md-4 mb-3'>
            <h6>Contact</h6>
            <p>Email: support@bookreview.com</p>
            <p>Phone: +91 9876543210</p>
          </div>
        </div>

        <hr className='bg-light' />

        <div className='text-center pb-3'>
          <small>&copy; {new Date().getFullYear()} <strong>BookReview App</strong>. All rights reserved.</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
