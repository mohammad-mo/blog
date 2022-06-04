// Components
import Sidebar from '../components/Sidebar'
import SinglePost from '../components/SinglePost'

const PostPage = () => {
  return (
    <div className='grid grid-cols-12 gap-2 my-5 items-start'>
      <SinglePost />
      <Sidebar />
    </div>
  )
}

export default PostPage
