const asyncHandler = require('express-async-handler')
const { cloudinary } = require('../utils/cloudinary')

const User = require('../models/userModel')
const Post = require('../models/postModel')

/**
 *
 * @descriptions Get user Posts
 * @route GET /api/posts
 * @access Private
 */
const getPosts = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const posts = await Post.find({ user: req.user.id })

  res.status(200).json(posts)
})

/**
 *
 * @descriptions Get all Posts / Get filtered posts
 * @route GET /api/posts/all
 * @access Public
 */
const getAllPosts = asyncHandler(async (req, res) => {
  const category = req.query.category

  let posts

  if (category) {
    posts = await Post.find({
      category: {
        $in: [category],
      },
    })
  } else {
    posts = await Post.find()
  }

  res.status(200).json(posts)
})

/**
 *
 * @descriptions Get user Post
 * @route GET /api/posts/:id
 * @access Private
 */
const getPost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)

  if (!post) {
    res.status(404)
    throw new Error('Post not found')
  }

  res.status(200).json(post)
})

/**
 *
 * @descriptions Create new posts
 * @route POST /api/posts/
 * @access Private
 */
const createPosts = asyncHandler(async (req, res) => {
  const {
    body: { title, description, category, fileBase64 },
  } = req

  if (!title || !description || !category) {
    res.status(400)
    throw new Error('Please add a title, description and category')
  }

  // Get user using the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  let uploadResponse

  if (fileBase64) {
    uploadResponse = await cloudinary.uploader.upload(fileBase64, {
      upload_preset: 'blog',
    })
  }

  const posts = await Post.create({
    title,
    description,
    photo: uploadResponse ? uploadResponse.url : '',
    category,
    user: req.user.id,
    author: req.user.name,
    status: 'new',
  })

  res.status(201).json(posts)
})

/**
 *
 * @descriptions Delete post
 * @route DELETE /api/posts/:id
 * @access Private
 */
const deletePost = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const post = await Post.findById(req.params.id)

  if (!post) {
    res.status(404)
    throw new Error('Post not found')
  }

  if (post.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not authorized')
  }

  await post.remove()

  res.status(200).json({ success: true })
})

/**
 *
 * @descriptions Update post
 * @route PUT /api/posts/:id
 * @access Private
 */
const updatePost = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const post = await Post.findById(req.params.id)

  if (!post) {
    res.status(404)
    throw new Error('Post not found')
  }

  if (post.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not authorized')
  }

  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedPost)
})

module.exports = {
  getPosts,
  getPost,
  getAllPosts,
  createPosts,
  deletePost,
  updatePost,
}
