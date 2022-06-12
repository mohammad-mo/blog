// Components
import AnimationContainer from '../components/AnimationContainer'

const AboutPage = () => {
  return (
    <AnimationContainer>
      <div className='flex flex-col justify-center h-[89vh] dark:text-primary'>
        <h1 className='text-4xl sm:text-6xl'>MERN Blog</h1>
        <p className='my-4 text-xl sm:text-2xl'>
          This is blog built with MongoDB, Express, React and Node. Create your
          post and share it with others.
        </p>
        <p className='text-lg text-gray-400'>Version 1.0.0</p>
      </div>
    </AnimationContainer>
  )
}

export default AboutPage
