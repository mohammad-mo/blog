import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getPost } from '../features/posts/postSlice'

// Components
import Spinner from './Spinner'

// Icons
import { FaEdit, FaTrash } from 'react-icons/fa'

import { toast } from 'react-toastify'

import HeroImage from '../assets/hero.jpg'

const SinglePost = () => {
  const { postId } = useParams()
  const { post, isLoading, isError, message } = useSelector(
    (state) => state.posts,
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    dispatch(getPost(postId))
  }, [dispatch, isError, postId, message])

  if (isLoading) {
    return (
      <div className='grid grid-cols-posts gap-2 col-span-full sm:col-span-9 order-1 sm:order-none'>
        <Spinner />
      </div>
    )
  }

  return (
    <div className='col-span-full sm:col-span-9 order-1 sm:order-none'>
      <div>
        <img
          src={HeroImage}
          alt='post'
          className='rounded-md w-full h-[400px] object-cover'
        />
        <div className='flex justify-between items-center space-x-4 my-6'>
          <h1 id='title' className='font-serif font-bold text-3xl'>
            {post.title}
          </h1>
          <div className='flex items-center space-x-2'>
            <FaEdit className='cursor-pointer' color='#444' size={'1.2rem'} />
            <FaTrash
              className='cursor-pointer'
              color='#9c4728'
              size={'1.1rem'}
            />
          </div>
        </div>
        <div
          id='info'
          className='flex justify-between items-center text-[#666] my-6'
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
        <p id='description' className='text-lg'>
          {post.description}
        </p>
      </div>
    </div>
  )
}

export default SinglePost
