import { useEffect } from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getAllPosts, reset } from '../features/posts/postSlice'

// Components
import Post from './Post'
import Spinner from './Spinner'

const Posts = () => {
  const { publicPosts, isLoading, isSuccess } = useSelector(
    (state) => state.posts,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPosts())

    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess])

  if (isLoading) {
    return (
      <div className='grid grid-cols-posts gap-2 col-span-full sm:col-span-9 order-1 sm:order-none'>
        <Spinner />
      </div>
    )
  }

  return (
    <div className='grid grid-cols-posts gap-2 col-span-full sm:col-span-9 order-1 sm:order-none'>
      {publicPosts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  )
}

export default Posts
