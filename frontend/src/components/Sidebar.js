import { Link, useLocation } from 'react-router-dom'

// Redux
import { useDispatch } from 'react-redux'
import { getPostsByCategory } from '../features/posts/postSlice'

const Sidebar = () => {
  const categoryName = useLocation().search.split('=')[1]
  const dispatch = useDispatch()

  const categories = [
    { name: 'life' },
    { name: 'music' },
    { name: 'style' },
    { name: 'sport' },
    { name: 'cinema' },
    { name: 'tech' },
    { name: 'game' },
  ]

  return (
    <div className='bg-primary border border-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-primary flex flex-col items-center col-span-full sm:col-span-3 order-2 sm:order-none p-5 shadow rounded-md'>
      <div
        id='sidebar-items'
        className='flex flex-col items-center w-full my-2'
      >
        <span className='mb-2 font-bold'>CATEGORIES</span>
        <ul className='text-center grid grid-cols-category w-full'>
          {categories.map((category) => (
            <Link
              key={category.name}
              onClick={() => dispatch(getPostsByCategory(category.name))}
              to={`?category=${category.name}`}
            >
              <li
                className={`cursor-pointer ${
                  category.name === categoryName ? 'text-red-500' : ''
                } hover:text-red-500 transition-all`}
              >
                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
