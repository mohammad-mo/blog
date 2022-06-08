import { Link } from 'react-router-dom'

const Post = ({ post: { category, _id, title, createdAt } }) => {
  // const categoriesMap = categories.map((category) => {
  //   return category
  // })

  return (
    <div className='bg-primary p-2 rounded-lg'>
      <img
        src='https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80'
        alt='post'
        className='w-full h-64 object-cover rounded-md mb-2'
      />
      <div className='flex flex-col p-1 my-2'>
        <div className='flex justify-between items-center w-full font-serif text-sm font-bold mb-2'>
          <span id='category' className='cursor-pointer'>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
          <span id='date'>
            {new Date(createdAt).toLocaleDateString('en-US')}
          </span>
        </div>
        <span id='title' className='text-lg'>
          {title}
        </span>
      </div>
      <Link to={{ pathname: `/posts/${_id}` }}>
        <button
          type='button'
          className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-1 focus:ring-gray-200 font-medium rounded-md px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 transition-all'
        >
          Read More
        </button>
      </Link>
    </div>
  )
}

export default Post
