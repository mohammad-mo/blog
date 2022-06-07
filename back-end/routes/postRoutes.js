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
// const { route } = require('./noteRoutes')

// Re-route into note router
// const noteRouter = require('./noteRoutes')
// router.use('/:ticketId/notes', noteRouter)

router.route('/').get(protect, getPosts).post(protect, createPosts)
router.route('/all').get(getAllPosts)
router
  .route('/:id')
  .get(getPost)
  .delete(protect, deletePost)
  .put(protect, updatePost)

module.exports = router
