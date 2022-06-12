// Components
import SinglePost from '../components/SinglePost'
import AnimationContainer from '../components/AnimationContainer'

const PostPage = () => {
  return (
    <AnimationContainer>
      <div className='my-5'>
        <SinglePost />
      </div>
    </AnimationContainer>
  )
}

export default PostPage
