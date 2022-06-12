import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getPost, deletePost, updatePost } from '../features/posts/postSlice'

// Components
import Spinner from './Spinner'

// Icons
import { FaEdit, FaTrash } from 'react-icons/fa'

import { toast } from 'react-toastify'

const SinglePost = () => {
  const { postId } = useParams()
  const navigate = useNavigate()

  const { post, isLoading, isError, message } = useSelector(
    (state) => state.posts,
  )
  const { user } = useSelector((state) => state.auth)
  const [update, setUpdate] = useState(false)
  const [title, setTitle] = useState(post.title || '')
  const [description, setDescription] = useState(post.description || '')

  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    dispatch(getPost(postId))
  }, [dispatch, isError, postId, message])

  useEffect(() => {
    setTitle(post.title)
    setDescription(post.description)
  }, [post.title, post.description])

  const onDeletePost = () => {
    dispatch(deletePost(postId))
    toast.success('Post deleted')
    navigate('/')
  }

  const onUpdatePost = () => {
    if (title === post.title && description === post.description) {
      toast.error("You didn't change anything")
      return
    }

    const postData = { title, description }
    const postIdAndData = { postId, postData }
    dispatch(updatePost(postIdAndData))
    toast.success('Post updated')
    setUpdate(false)
    navigate('/my-posts')
  }

  if (isLoading) {
    return (
      <div className='grid grid-cols-posts gap-2 col-span-full sm:col-span-9 order-1 sm:order-none'>
        <Spinner />
      </div>
    )
  }

  return (
    <div className='bg-primary border border-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-primary rounded-md p-5'>
      <div>
        {post.photo ? (
          <img
            src={post.photo}
            alt='post'
            className='rounded-md w-full h-[400px] object-cover'
          />
        ) : (
          <img
            src='https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
            alt='post'
            className='rounded-md w-full h-[400px] object-cover'
          />
        )}

        <div className='flex justify-between items-center space-x-4 my-6'>
          {update ? (
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='p-2 w-full rounded-md border border-gray-300 outline-gray-300 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white'
            />
          ) : (
            <h1 id='title' className='font-serif font-bold text-3xl'>
              {post.title}
            </h1>
          )}
          {post.user === user?._id ? (
            <div className='flex items-center space-x-2'>
              <button onClick={() => setUpdate(!update)}>
                <FaEdit
                  className='cursor-pointer'
                  color='dark:primary'
                  size={'1.2rem'}
                />
              </button>
              <button onClick={onDeletePost}>
                <FaTrash
                  className='cursor-pointer'
                  color='tomato'
                  size={'1.1rem'}
                />
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div
          id='info'
          className='flex justify-between items-center text-gray-500 dark:text-gray-300 my-6 space-x-4'
        >
          <span>
            Author: <strong>{post.author}</strong>
          </span>
          <span>
            Date:{' '}
            <strong>
              {new Date(post.createdAt).toLocaleDateString('en-US')}
            </strong>
          </span>
        </div>
        {update ? (
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='p-2 w-full h-32 rounded-md border border-gray-300 outline-gray-300 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white'
          ></textarea>
        ) : (
          <p id='description' className='text-lg'>
            {post.description}
          </p>
        )}
        {update && (
          <button
            type='button'
            onClick={onUpdatePost}
            className='w-full text-gray-900 focus:outline-none bg-gray-100 rounded-md border border-gray-200 hover:bg-gray-200 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition-all px-5 py-2.5'
          >
            Update
          </button>
        )}
      </div>
    </div>
  )
}

export default SinglePost
