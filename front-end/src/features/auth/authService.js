import axios from 'axios'

const API_URL = '/api/users'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Register user
const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Update user
const updateUser = async (userId, userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(
    API_URL + '/login/' + userId,
    userData,
    config,
  )
  return response.data
}

// Logout
const logout = () => localStorage.removeItem('user')

const authService = {
  register,
  logout,
  login,
  updateUser,
}

export default authService
