import { NavLink } from 'react-router-dom'

import {
  FaMicroblog,
  FaSearch,
} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='w-full h-12 sticky top-0 flex items-center bg-white z-30'>
      <div className='flex justify-start items-center space-x-1 w-1/4 h-12 text-xl'>
        <p>Blog</p> <FaMicroblog />
      </div>
      <div className='w-2/3'>
        <ul
          id='nav-links'
          className='flex justify-between items-center h-12 px-2 font-light'
        >
          <li className='cursor-pointer'>
            <NavLink to={{ pathname: '/' }}>
              HOME
            </NavLink>
          </li>
          <li className='cursor-pointer'>
            <NavLink to={{ pathname: '/write' }}>
              WRITE
            </NavLink>
          </li>
          <li className='cursor-pointer'>
            <NavLink
              to={{ pathname: '/contact' }}
            >
              CONTACT
            </NavLink>
          </li>
          <li className='cursor-pointer'>
            <NavLink to={{ pathname: '/about' }}>
              ABOUT
            </NavLink>
          </li>
          <li className='cursor-pointer'>
            <NavLink to={{ pathname: '/login' }}>
              LOGIN
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='flex justify-end items-center space-x-2 w-1/4 h-12'>
        <NavLink to={{ pathname: '/profile' }}>
          <div className='bg-blue-400 w-8 h-8 rounded-full'></div>
        </NavLink>
        <FaSearch className='cursor-pointer' />
      </div>
    </div>
  )
}

export default Navbar
