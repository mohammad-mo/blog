import axios from 'axios'

const API_URL = '/api/posts/'

// Create new post
const createPost = async (postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, postData, config)
  return response.data
}

// Get user posts
const getPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)
  return response.data
}

// Get user post
const getPost = async (postId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + postId, config)
  return response.data
}

// Get All posts(everyone)
const getAllPosts = async () => {
  const response = await axios.get(API_URL + 'all')
  return response.data
}

// // Close post
// const closeTicket = async (ticketId, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.put(
//     API_URL + ticketId,
//     { status: "closed" },
//     config
//   );
//   return response.data;
// };

const postService = {
  createPost,
  getPosts,
  getPost,
  getAllPosts,
}

export default postService
