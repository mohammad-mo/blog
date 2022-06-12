import { Link } from 'react-router-dom'

// Components
import ButtonSm from '../components/ButtonSm'
import AnimationContainer from '../components/AnimationContainer'

const NotFoundPage = () => {
  return (
    <AnimationContainer>
      <div className='flex justify-center items-center w-full min-h-[94vh] dark:text-primary'>
        <div className='text-center font-sansSerif'>
          <h1 className='text-6xl sm:text-8xl font-bold'>Ooops!</h1>
          <p className='text-4xl sm:text-5xl my-10'>Page not found!</p>
          <Link to={{ pathname: '/' }}>
            <ButtonSm>Back to home</ButtonSm>
          </Link>
        </div>
      </div>
    </AnimationContainer>
  )
}

export default NotFoundPage
