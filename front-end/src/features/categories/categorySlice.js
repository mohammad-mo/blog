import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import categoryService from './categoryService'

const initialState = {
  categories: [],
  category: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new category
export const createCategory = createAsyncThunk(
  'category/create',
  async (category, thunkAPI) => {
    try {
      return await categoryService.createCategory(category)
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  },
)

// Get categories
export const getCategories = createAsyncThunk(
  'category/getAll',
  async (_, thunkAPI) => {
    try {
      return await categoryService.getCategories()
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCategory.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createCategory.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.categories = action.payload
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = categorySlice.actions
export default categorySlice.reducer
