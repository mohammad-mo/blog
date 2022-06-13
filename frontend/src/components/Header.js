// Components
import AnimatedText from './AnimatedText.js'

// Animation
import { motion } from 'framer-motion'

const Header = () => {
  const placeholderText = [
    { type: 'heading1', text: 'MERN' },
    { type: 'heading2', text: 'BLOG' },
  ]

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  }

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={container}
      className='relative h-[500px] w-full flex justify-center items-center font-serif bg-hero rounded-md'
    >
      <div
        id='overlay'
        className='absolute w-full h-full top-0 left-0 text-white flex justify-center items-center bg-gray-800 bg-opacity-30 rounded-md'
      >
        <div className='flex flex-col justify-center items-center'>
          {placeholderText.map((item, index) => {
            return <AnimatedText {...item} key={index} />
          })}
        </div>
      </div>
    </motion.div>
  )
}
export default Header
