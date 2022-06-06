const asyncHandler = require('express-async-handler')

const Category = require('../models/categoryModel')

/**
 * @descriptions Create category
 * @route /api/category
 * @access Public
 */
const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body

  // Find if category already exists
  const categoryExists = await Category.findOne({
    name,
  })

  if (categoryExists) {
    res.status(400)
    throw new Error('Category already exists')
  }

  const newCategory = await Category.create({
    name,
  })

  res.status(201).json(newCategory)
})

/**
 * @descriptions Get categories
 * @route /api/category
 * @access Public
 */
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find()

  res.status(201).json(categories)
})

module.exports = {
  createCategory,
  getCategories,
}
