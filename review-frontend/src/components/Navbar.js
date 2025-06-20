import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import './Navbar.css'

function Navbar() {
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()
  const [expanded, setExpanded] = useState(false)

  const logout = () => {
    setUser(null)
    localStorage.removeItem('token')
    navigate('/')
    setExpanded(false)
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>BookReview</Link>
        <button
          className='navbar-toggler'
          type='button'
          onClick={() => setExpanded(!expanded)}
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/books' onClick={() => setExpanded(false)}>Books</Link>
            </li>

            {user ? (
              <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/profile' onClick={() => setExpanded(false)}>Profile</Link>
                </li>
                <li className='nav-item'>
                  <span className='nav-link' onClick={logout} style={{ cursor: 'pointer' }}>Logout</span>
                </li>
              </>
            ) : (
              <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/login' onClick={() => setExpanded(false)}>Login</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/register' onClick={() => setExpanded(false)}>Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
