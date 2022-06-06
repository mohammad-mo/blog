const express = require('express')
const router = express.Router()
const {
  createCategory,
  getCategories,
} = require('../controllers/categoryController')

// const { protect } = require('../middlewares/authMiddleware')

// router.route('/').get(protect, getPosts).post(protect, createPosts)
router.route('/').get(getCategories).post(createCategory)
// router.post('/', registerUser)
// router.post('/login', loginUser)
// router.get('/me', protect, getMe)

module.exports = router
