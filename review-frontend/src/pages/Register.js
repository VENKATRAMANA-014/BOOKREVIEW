import React, { useState, useContext } from 'react'
import API from '../api/api'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import './Register.css'

function Register() {
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await API.post('/users/register', form)
    setUser(res.data)
    navigate('/')
  }

  return (
    <div className='register-page d-flex align-items-center justify-content-center'>
      <div className='form-box'>
        <h3 className='text-center mb-4'>Create Your Account</h3>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <input className='form-control' name='name' placeholder='Full Name' onChange={handleChange} />
          </div>
          <div className='mb-3'>
            <input className='form-control' name='email' placeholder='Email Address' onChange={handleChange} />
          </div>
          <div className='mb-3'>
            <input className='form-control' name='password' type='password' placeholder='Password' onChange={handleChange} />
          </div>
          <button className='btn btn-success w-100'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register
