const express = require('express')
const router = express.Router()
const {
  getUserById,
  updateUser,
  register,
  login,
  getMe
} = require('../controllers/userController')

const { protect } = require('../middleware/auth')

router.post('/register', register)
router.post('/login', login)
router.get('/me', protect, getMe)
router.get('/:id', getUserById)
router.put('/:id', updateUser)

module.exports = router
