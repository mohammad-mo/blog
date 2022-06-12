import { baseUrl } from '../../config'

const API_URL = '/api/users'

// Register user
const register = async (userData) => {
  const response = await baseUrl.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Register user
const login = async (userData) => {
  const response = await baseUrl.post(`${API_URL}/login`, userData)

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

  const response = await baseUrl.put(
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
