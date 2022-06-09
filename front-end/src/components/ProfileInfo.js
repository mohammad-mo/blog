import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../features/auth/authSlice'

// Icons
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import { toast } from 'react-toastify'

const ProfileInfo = () => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const [name, setName] = useState(user.name || '')
  const [email, setEmail] = useState(user.email || '')
  const [password, setPassword] = useState(user.password || '')
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    setName(user.name)
    setEmail(user.email)
    setPassword('')
  }, [user.name, user.email])

  const onUpdateUser = (e) => {
    e.preventDefault()
    if (user.name !== name || user.email !== email || password.length > 8) {
      dispatch(updateUser({ name, email, password }))
      toast.success(
        'Your information updated, to see the changes please logout/login',
      )
      navigate('/')
    } else if (password.length < 8) {
      toast.error('Password length should be greater than 8')
    }
  }

  return (
    <div className='bg-primary rounded-md p-5'>
      <div>
        <div id='title' className='flex justify-start items-center'>
          <span className='text-2xl'>Update Your account</span>
        </div>
        <form>
          <div id='formGroup' className='flex flex-col my-5'>
            <label htmlFor='name' className='mb-2 text-2xl'>
              Name
            </label>
            <input
              type='text'
              placeholder='Username'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='p-2 w-full rounded-md border border-gray-300 outline-gray-300'
            />
          </div>
          <div id='formGroup' className='flex flex-col my-5'>
            <label htmlFor='email' className='mb-2 text-2xl'>
              Email
            </label>
            <input
              type='email'
              placeholder='Email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='p-2 w-full rounded-md border border-gray-300 outline-gray-300'
            />
          </div>
          <div id='formGroup' className='flex flex-col my-5'>
            <label htmlFor='password' className='mb-2 text-2xl'>
              Password
            </label>
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            type='submit'
            onClick={onUpdateUser}
            className='w-full text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition-all px-5 py-2.5'
          >
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProfileInfo
