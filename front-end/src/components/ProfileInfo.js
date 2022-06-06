import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const ProfileInfo = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='col-span-full sm:col-span-9 order-1 sm:order-none'>
      <div>
        <div id='title' className='flex justify-between items-center'>
          <span className='text-2xl'>Update Your account</span>
          <span className='text-red-500'>Delete Account</span>
        </div>
        <form>
          <div id='formGroup' className='flex flex-col items-center my-10'>
            <label className='text-2xl'>Profile Picture</label>
            <div className='bg-blue-400 w-8 h-8 rounded-full my-2'></div>
            <input
              type='file'
              className='w-full bg-gray-50 rounded-md border border-gray-300 cursor-pointer'
            />
          </div>
          <div id='formGroup' className='flex flex-col my-5'>
            <label htmlFor='titleInput' className='mb-2 text-2xl'>
              Username
            </label>
            <input
              type='text'
              placeholder='Username'
              autoFocus='true'
              id='titleInput'
              className='p-2 w-full rounded-md border border-gray-300 outline-gray-300'
            />
          </div>
          <div id='formGroup' className='flex flex-col my-5'>
            <label htmlFor='titleInput' className='mb-2 text-2xl'>
              Email
            </label>
            <input
              type='email'
              placeholder='Email'
              autoFocus='true'
              id='titleInput'
              className='p-2 w-full rounded-md border border-gray-300 outline-gray-300'
            />
          </div>
          <div id='formGroup' className='flex flex-col my-5'>
            <label htmlFor='passwordInput' className='mb-2 text-2xl'>
              Password
            </label>
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                id='passwordInput'
                className='p-2 w-full rounded-md border border-gray-300 outline-gray-300'
              />
              {showPassword ? (
                <FaEyeSlash
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-1/3 cursor-pointer text-gray-700'
                  size={'1.2rem'}
                />
              ) : (
                <FaEye
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-1/3 cursor-pointer text-gray-700'
                  size={'1.2rem'}
                />
              )}
            </div>
          </div>
          <button
            type='button'
            className='w-full text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition-all px-5 py-2.5'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProfileInfo
