import { FaMicroblog, FaSearch } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='w-full h-12 sticky top-0 flex items-center bg-white z-30'>
      <div className='flex justify-start items-center space-x-1 w-1/4 h-12 text-xl'>
        <p>Blog</p> <FaMicroblog />
      </div>
      <div className='w-2/3'>
        <ul className='flex justify-between items-center h-12 px-2 font-light'>
          <li className='cursor-pointer'>HOME</li>
          <li className='cursor-pointer'>ABOUT</li>
          <li className='cursor-pointer'>CONTACT</li>
          <li className='cursor-pointer'>WRITE</li>
          <li className='cursor-pointer'>LOGOUT</li>
        </ul>
      </div>
      <div className='flex justify-end items-center space-x-2 w-1/4 h-12'>
        <div className='bg-blue-400 w-8 h-8 rounded-full'></div>
        <FaSearch />
      </div>
    </div>
  )
}

export default Navbar
