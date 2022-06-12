import { useEffect } from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, reset } from '../features/posts/postSlice'

// Components
import Post from '../components/Post'
import Spinner from '../components/Spinner'

const MyPostsPage = () => {
  const { posts, isLoading, isSuccess } = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())

    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess])

  if (isLoading) return <Spinner />

  return (
    <div className='grid grid-cols-posts gap-3 my-5'>
      {posts.length === 0 ? (
        <p className='text-4xl my-4 dark:text-primary'>There are no posts</p>
      ) : (
        posts.map((post) => <Post key={post._id} post={post} />)
      )}
    </div>
  )
}

export default MyPostsPage
