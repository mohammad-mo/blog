import Post from './Post'

const Posts = () => {
  return (
    <div className='col-span-9'>
      {[0, 1, 2, 3, 4].map((post) => (
        <Post />
      ))}
    </div>
  )
}

export default Posts
