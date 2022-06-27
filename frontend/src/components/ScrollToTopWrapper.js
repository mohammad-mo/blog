import { useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'

const ScrollToTopWrapper = ({ children }) => {
  // Useful on mobile devices
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])
  return children
}

export default ScrollToTopWrapper
