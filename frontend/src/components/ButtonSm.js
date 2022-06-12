const ButtonSm = ({ children }) => {
  return (
    <button className='text-gray-900 bg-gray-100 border border-gray-300 focus:outline-none hover:bg-gray-200 font-medium rounded-md transition-all px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
      {children}
    </button>
  )
}

export default ButtonSm
