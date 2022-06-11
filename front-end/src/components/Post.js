import { Link } from 'react-router-dom'

const Post = ({
  post: { category, _id, title, description, createdAt, photo },
}) => {
  const PF = 'https://mern-blog-mohammad.herokuapp.com/images/'

  return (
    <div className='bg-primary border border-gray-100 p-2 rounded-md shadow dark:bg-gray-800 dark:border-gray-700 dark:text-primary hover:scale-[1.02] transition-all'>
      {photo ? (
        <img
          src={PF + photo}
          alt='post'
          className='w-full h-64 object-cover rounded-md mb-2'
        />
      ) : (
        <img
          src='https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
          alt='post'
          className='w-full h-64 object-cover rounded-md mb-2'
        />
      )}
      <div className='grid '>
        <div className='flex flex-col p-1 my-2'>
          <div className='flex justify-between items-center w-full font-serif text-sm font-bold mb-2'>
            <span id='category' className='cursor-pointer'>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
            <span id='date'>
              {new Date(createdAt).toLocaleDateString('en-US')}
            </span>
          </div>
          <Link to={{ pathname: `/posts/${_id}` }}>
            <h3 id='title' className='text-2xl'>
              {title}
            </h3>
          </Link>
          <p
            className={`leading-5 overflow-hidden relative h-3lines after:content-[""] after:absolute after:bottom-0 after:right-0 after:h-[1.25rem] after:w-3/4 after:from-transparent after:to-primary dark:after:to-slate-800 after:bg-gradient-to-r`}
          >
            {description}
          </p>
        </div>
        <Link to={{ pathname: `/posts/${_id}` }}>
          <button
            type='button'
            className='text-gray-900 bg-gray-100 border border-gray-300 focus:outline-none hover:bg-gray-200 focus:ring-1 focus:ring-gray-200 font-medium rounded-md px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 transition-all'
          >
            Read More
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Post
