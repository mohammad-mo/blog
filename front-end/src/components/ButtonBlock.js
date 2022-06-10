const ButtonBlock = ({ children, type }) => {
  return (
    <button
      type={type}
      className='w-full text-gray-900 focus:outline-none bg-gray-100 rounded-md border border-gray-200 hover:bg-gray-200 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition-all px-5 py-2.5'
    >
      {children}
    </button>
  )
}

export default ButtonBlock
