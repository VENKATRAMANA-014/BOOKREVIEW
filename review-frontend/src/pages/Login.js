import React, { useState, useContext } from 'react'
import API from '../api/api'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import './Login.css'

function Login() {
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await API.post('/users/login', form)
    setUser(res.data.user)
    localStorage.setItem('token', res.data.token)
    navigate('/')
  }

  return (
    <div className='login-page d-flex align-items-center justify-content-center'>
      <div className='form-box'>
        <h3 className='text-center mb-4'> Login to <span className="brand">BookReview</span></h3>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <input
              className='form-control'
              name='email'
              placeholder='Enter your email'
              type='email'
              required
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <input
              className='form-control'
              name='password'
              type='password'
              placeholder='Enter your password'
              required
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn btn-primary w-100'>Login</button>
        </form>
        <p className='text-center mt-3 text-muted' style={{ fontSize: '0.9rem' }}>
          Don't have an account? <a href='/register'>Register here</a>
        </p>
      </div>
    </div>
  )
}

export default Login
