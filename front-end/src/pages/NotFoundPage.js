import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='flex justify-center items-center w-full min-h-[94vh]'>
      <div className='text-center font-sansSerif'>
        <h1 className='text-6xl sm:text-8xl font-bold'>Ooops!</h1>
        <p className='text-4xl sm:text-5xl my-10'>Page not found!</p>
        <Link
          to={{ pathname: '/' }}
          className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-1 focus:ring-gray-200 font-medium rounded-md px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 transition-all'
        >
          Back To Home
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
