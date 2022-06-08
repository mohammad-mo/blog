const express = require('express')
const router = express.Router()
const {
  getPosts,
  createPosts,
  getPost,
  getAllPosts,
  deletePost,
  updatePost,
} = require('../controllers/postController')

const { protect } = require('../middlewares/authMiddleware')

router.route('/').get(protect, getPosts).post(protect, createPosts)
router.route('/all').get(getAllPosts)
router
  .route('/:id')
  .get(getPost)
  .delete(protect, deletePost)
  .put(protect, updatePost)

module.exports = router
