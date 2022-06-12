const express = require('express')
const router = express.Router()
const {
  getPosts,
  createPosts,
  getPost,
  getAllPosts,
  deletePost,
  updatePost,
} = require('../controllers/post')

const { protect } = require('../middlewares/auth')

router.route('/').get(protect, getPosts).post(protect, createPosts)
router.route('/all').get(getAllPosts)
router
  .route('/:id')
  .get(getPost)
  .delete(protect, deletePost)
  .put(protect, updatePost)

module.exports = router
