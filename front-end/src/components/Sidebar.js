import { Link } from 'react-router-dom'

// Redux
import { useDispatch } from 'react-redux'
import { getPostsByCategory } from '../features/posts/postSlice'

const Sidebar = () => {
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
    <div className='flex flex-col items-center col-span-full sm:col-span-3 order-2 sm:order-none bg-primary p-5 rounded-lg'>
      <div id='sidebar-items' className='flex flex-col items-center my-2'>
        <span className='font-bold'>ABOUT ME</span>
        <div className='my-2 w-10 h-10 rounded-full bg-blue-400'></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
          praesentium.
        </p>
      </div>
      <div
        id='sidebar-items'
        className='flex flex-col items-center w-full my-2'
      >
        <span className='mb-2 font-bold'>CATEGORIES</span>
        <ul className=' text-center grid grid-cols-fluid w-full'>
          {categories.map((category) => (
            <Link
              key={category.name}
              onClick={() => dispatch(getPostsByCategory(category.name))}
              to={`/?category=${category.name}`}
            >
              <li className='cursor-pointer'>
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
