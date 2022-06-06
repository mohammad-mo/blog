const express = require('express')
const router = express.Router()
const { getPosts, createPosts } = require('../controllers/postController')

const { protect } = require('../middlewares/authMiddleware')
// const { route } = require('./noteRoutes')

// Re-route into note router
// const noteRouter = require('./noteRoutes')
// router.use('/:ticketId/notes', noteRouter)

router.route('/').get(protect, getPosts).post(protect, createPosts)
// router
//   .get(protect, getTicket)
//   .delete(protect, deleteTicket)
//   .put(protect, updateTicket)

module.exports = router
