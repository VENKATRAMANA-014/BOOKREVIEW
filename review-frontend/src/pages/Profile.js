import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import API from '../api/api'
import './Profile.css'

function Profile() {
  const { user, setUser } = useContext(UserContext)
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  useEffect(() => {
    if (user) {
      setForm({ name: user.name, email: user.email, password: '' })
    }
  }, [user])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await API.put(`/users/${user._id}`, form)
    setUser(res.data)
    alert('Profile updated')
  }

  if (!user) return (
    <div className='container mt-5 text-center'>
      <div className='alert alert-warning'>Please login to view profile.</div>
    </div>
  )

  return (
    <div className='profile-page d-flex align-items-center justify-content-center'>
      <div className='profile-box'>
        <h3 className='text-center mb-4'>User Profile</h3>
        <form className='profile-form' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label className='form-label'>Name</label>
            <input className='form-control' name='name' value={form.name} onChange={handleChange} />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Email</label>
            <input className='form-control' name='email' value={form.email} onChange={handleChange} />
          </div>
          <div className='mb-3'>
            <label className='form-label'>New Password</label>
            <input className='form-control' name='password' type='password' value={form.password} onChange={handleChange} />
          </div>
          <button className='btn btn-primary w-100' type='submit'>Update Profile</button>
        </form>
      </div>
    </div>
  )
}

export default Profile
