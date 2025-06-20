const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// GET user by ID
const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id)
  res.json(user)
}

// PUT update user by ID
const updateUser = async (req, res) => {
  const user = await User.findById(req.params.id)
  user.name = req.body.name || user.name
  user.email = req.body.email || user.email
  if (req.body.password) {
    user.password = await bcrypt.hash(req.body.password, 10)
  }
  const updated = await user.save()
  res.json(updated)
}

// POST register
const register = async (req, res) => {
  const exists = await User.findOne({ email: req.body.email })
  if (exists) return res.status(400).json({ message: 'User already exists' })
  const hashedPassword = await bcrypt.hash(req.body.password, 10)
  const user = new User({ ...req.body, password: hashedPassword })
  const created = await user.save()
  res.status(201).json(created)
}

// POST login
const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  const match = user && await bcrypt.compare(req.body.password, user.password)
  if (match) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    res.json({ token, user })
  } else {
    res.status(401).json({ message: 'Invalid credentials' })
  }
}

// GET current user (/me)
const getMe = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password')
  res.json(user)
}

module.exports = {
  getUserById,
  updateUser,
  register,
  login,
  getMe
}
