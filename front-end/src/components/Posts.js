import Post from './Post'

const Posts = () => {
  return (
    <div className='grid grid-cols-posts gap-2 col-span-full sm:col-span-9 order-1 sm:order-none'>
      {[0, 1, 2, 3, 4].map((post) => (
        <Post />
      ))}
    </div>
  )
}

export default Posts
