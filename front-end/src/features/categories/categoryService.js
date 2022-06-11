import { baseUrl } from '../../config'

const API_URL = '/api/category/'

// Create new post
const createCategory = async (category) => {
  const response = await baseUrl.post(API_URL, category)
  return response.data
}

// Get categories
const getCategories = async () => {
  const response = await baseUrl.get(API_URL)
  return response.data
}

const categoryService = {
  createCategory,
  getCategories,
}

export default categoryService
