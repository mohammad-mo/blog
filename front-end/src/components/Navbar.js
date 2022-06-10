import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

// Icons
import { FaMicroblog, FaUserCircle } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'

// Components
import Switcher from './Switecher'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  return (
    <div className='w-full h-14 sticky top-0 flex justify-between items-center flex-wrap order-1 md:flex-nowrap bg-white dark:bg-primaryBlack z-30'>
      <div className='flex justify-start items-center space-x-1 md:w-1/4 h-14 text-xl dark:text-primary'>
        <p>Blog</p> <FaMicroblog />
      </div>

      <div
        className={`w-full md:w-2/3 md:block bg-white dark:bg-primaryBlack dark:text-primary rounded-sm order-3 md:order-2 ${
          showMenu ? '' : 'hidden'
        }`}
      >
        <ul
          id='nav-links'
          className='flex flex-col md:flex-row justify-between items-center px-2 font-light py-5 md:py-0'
        >
          <li className='cursor-pointer'>
            <NavLink to={{ pathname: '/' }}>HOME</NavLink>
          </li>
          <li className='cursor-pointer'>
            <NavLink to={{ pathname: '/write' }}>WRITE</NavLink>
          </li>
          <li className='cursor-pointer'>
            <NavLink to={{ pathname: '/my-posts' }}>MY POSTS</NavLink>
          </li>
          <li className='cursor-pointer'>
            <NavLink to={{ pathname: '/about' }}>ABOUT</NavLink>
          </li>
          <li className='cursor-pointer md:hidden'>
            <NavLink to={{ pathname: '/profile' }}>PROFILE</NavLink>
          </li>
          {user ? (
            <li className='cursor-pointer w-full md:w-auto text-center'>
              <button className='font-light' onClick={onLogout}>
                LOGOUT
              </button>
            </li>
          ) : (
            <li className='cursor-pointer w-full md:w-auto text-center'>
              <NavLink to={{ pathname: '/login' }}>LOGIN</NavLink>
            </li>
          )}
        </ul>
      </div>

      <div className='flex justify-end items-center space-x-2 md:w-1/4 md:flex order-2 md:order-3'>
        <NavLink to={{ pathname: '/profile' }}>
          <FaUserCircle
            size={'1.8rem'}
            className='dark:text-primary hidden md:block'
          />
        </NavLink>
        <Switcher />
        <HiMenuAlt3
          onClick={() => setShowMenu(!showMenu)}
          size={'1.8rem'}
          className='cursor-pointer dark:text-primary md:hidden'
        />
      </div>
    </div>
  )
}

export default Navbar
