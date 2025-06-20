import React, { useState, useContext } from 'react'
import API from '../api/api'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import './Login.css'

function Login() {
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

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
        <h3 className='text-center mb-4'>Login to BookReview</h3>
        <form onSubmit={handleSubmit}>
          <input className='form-control mb-3' name='email' placeholder='Email' onChange={handleChange} />
          <input className='form-control mb-3' name='password' type='password' placeholder='Password' onChange={handleChange} />
          <button className='btn btn-primary w-100'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
