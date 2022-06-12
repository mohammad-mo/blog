import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import postService from './postService'

const initialState = {
  publicPosts: [],
  posts: [],
  post: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new post
export const createPost = createAsyncThunk(
  'post/create',
  async (postData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await postService.createPost(postData, token)
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  },
)

// Delete post
export const deletePost = createAsyncThunk(
  'post/delete',
  async (postId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await postService.deletePost(postId, token)
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  },
)

// Update post
export const updatePost = createAsyncThunk(
  'post/update',
  async (postIdAndData, thunkAPI) => {
    try {
      const { postId, postData } = postIdAndData
      const token = thunkAPI.getState().auth.user.token
      return await postService.updatePost(postId, postData, token)
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  },
)

// Get user posts
export const getPosts = createAsyncThunk(
  'posts/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await postService.getPosts(token)
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  },
)

// Get all posts(everyone)
export const getAllPosts = createAsyncThunk(
  'posts/getEveryPost',
  async (_, thunkAPI) => {
    try {
      return await postService.getAllPosts()
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  },
)

// Get posts by catgeory
export const getPostsByCategory = createAsyncThunk(
  'posts/getPostByCategory',
  async (categoryName, thunkAPI) => {
    try {
      return await postService.getPostsByCategory(categoryName)
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  },
)

// Get user post
export const getPost = createAsyncThunk(
  'post/get',
  async (postId, thunkAPI) => {
    try {
      return await postService.getPost(postId)
    } catch (error) {
      const message =
        error.respones?.data?.message || error.message || error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createPost.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updatePost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updatePost.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deletePost.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts = action.payload
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getAllPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.publicPosts = action.payload
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getPostsByCategory.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPostsByCategory.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.publicPosts = action.payload
      })
      .addCase(getPostsByCategory.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.post = action.payload
      })
      .addCase(getPost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = postSlice.actions
export default postSlice.reducer
