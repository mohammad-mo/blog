import { baseUrl } from '../../config'

const API_URL = '/api/posts/'

// Create new post
const createPost = async (postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await baseUrl.post(API_URL, postData, config)
  return response.data
}

// Delete post
const deletePost = async (postId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await baseUrl.delete(API_URL + postId, config)
  return response.data
}

// Update post
const updatePost = async (postId, postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await baseUrl.put(API_URL + postId, postData, config)
  return response.data
}

// Get user posts
const getPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await baseUrl.get(API_URL, config)
  return response.data
}

// Get user post
const getPost = async (postId) => {
  const response = await baseUrl.get(API_URL + postId)
  return response.data
}

// Get All posts(everyone)
const getAllPosts = async () => {
  const response = await baseUrl.get(API_URL + 'all')
  return response.data
}

// Get posts by catgeory
const getPostsByCategory = async (categoryName) => {
  const params = new URLSearchParams({
    category: categoryName,
  })
  const response = await baseUrl.get(`${API_URL}all?${params}`)
  return response.data
}

const postService = {
  createPost,
  deletePost,
  updatePost,
  getPosts,
  getPost,
  getAllPosts,
  getPostsByCategory,
}

export default postService
