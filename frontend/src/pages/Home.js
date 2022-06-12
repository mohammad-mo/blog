// Components
import Header from '../components/Header'
import Posts from '../components/Posts'
import Sidebar from '../components/Sidebar'
import AnimationContainer from '../components/AnimationContainer'

const HomePage = () => {
  return (
    <AnimationContainer>
      <Header />
      <div className='grid grid-cols-12 gap-3 mt-5 items-start'>
        <Posts />
        <Sidebar />
      </div>
    </AnimationContainer>
  )
}

export default HomePage
