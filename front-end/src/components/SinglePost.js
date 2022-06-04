import { FaEdit, FaTrash } from 'react-icons/fa'

import HeroImage from '../assets/hero.jpg'

const SinglePost = () => {
  return (
    <div className='col-span-full sm:col-span-9 order-2 sm:order-none'>
      <div>
        <img
          src={HeroImage}
          alt='post'
          className='rounded-md w-full h-[400px] object-cover'
        />
        <div className='flex justify-between items-center space-x-4 my-2'>
          <h1 id='title' className='font-serif font-bold text-3xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            doloribus?
          </h1>
          <div className='flex items-center space-x-2'>
            <FaEdit className='cursor-pointer' color='#444' size={'1.2rem'} />
            <FaTrash
              className='cursor-pointer'
              color='#9c4728'
              size={'1.1rem'}
            />
          </div>
        </div>
        <div
          id='info'
          className='flex justify-between items-center text-[#666] my-2'
        >
          <span>
            Author: <strong>Mohammad</strong>
          </span>
          <span>Date: 1 hour ago</span>
        </div>
        <p id='description' className='text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          pariatur modi corrupti cumque atque, rerum quaerat repellendus, quidem
          alias animi voluptates doloremque minus consequatur expedita iure quis
          soluta voluptas at quod harum veniam? Quasi, asperiores. Esse error
          officia quae, corrupti sunt qui nihil officiis. Fugiat, alias sit?
          Similique, ab minima.
        </p>
      </div>
    </div>
  )
}

export default SinglePost
