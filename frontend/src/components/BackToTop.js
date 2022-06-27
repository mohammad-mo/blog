import { useState, useEffect } from 'react'

import { FaChevronUp } from 'react-icons/fa'

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false)
  const BackToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  return (
    <button
      onClick={BackToTopHandler}
      className={`z-30 flex justify-center items-center fixed -right-16 bottom-5 w-12 h-12 rounded-full bg-gray-200 dark:bg-slate-700 border-none transition-all dark:text-white ${
        showButton ? 'opacity-100 visible right-5' : ''
      }`}
    >
      <FaChevronUp />
    </button>
  )
}

export default BackToTop
