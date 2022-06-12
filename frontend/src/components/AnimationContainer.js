// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const AnimationContainer = ({ children }) => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      {children}
    </motion.div>
  )
}

export default AnimationContainer
