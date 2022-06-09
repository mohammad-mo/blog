import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../features/auth/authSlice'

import { toast } from 'react-toastify'

import { FaEye, FaEyeSlash } from 'react-icons/fa'

import Spinner from '../components/Spinner'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    // Redirect when logged in
    if (isSuccess || user) {
      navigate('/')
      return () => {
        toast.success('Welcome back')
      }
    }

    dispatch(reset())
  }, [isError, isSuccess, user, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) return <Spinner />

  return (
    <div className='mx-auto my-5 dark:text-primary'>
      <form onSubmit={onSubmit}>
        <div id='formGroup' className='flex flex-col my-5'>
          <label htmlFor='email' className='mb-2 text-2xl'>
            Email
          </label>
          <input
            type='email'
            placeholder='Enter Your Email'
            id='email'
            name='email'
            value={email}
            className='p-2 w-full rounded-md border border-gray-300 outline-gray-300 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white'
            onChange={onChange}
            required
          />
        </div>
        <div id='formGroup' className='flex flex-col my-5'>
          <label htmlFor='password' className='mb-2 text-2xl'>
            Password
          </label>
          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Enter Your Password'
              id='password'
              name='password'
              value={password}
              className='p-2 w-full rounded-md border border-gray-300 outline-gray-300 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white'
              onChange={onChange}
              required
            />
            {showPassword ? (
              <FaEyeSlash
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-1/3 cursor-pointer text-gray-700 dark:fill-primary'
                size={'1.2rem'}
              />
            ) : (
              <FaEye
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-1/3 cursor-pointer text-gray-700 dark:fill-primary'
                size={'1.2rem'}
              />
            )}
          </div>
        </div>
        <button className='w-full text-gray-900 focus:outline-none bg-gray-50 rounded-md border border-gray-200 hover:bg-gray-200 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition-all px-5 py-2.5'>
          Login
        </button>
      </form>

      <span className='flex justify-center items-center space-x-3 my-5'>
        <p>Don't have an account?</p>
        <Link to={{ pathname: '/register' }}>
          <button className='text-gray-900 bg-gray-100 border border-gray-300 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
            Register here
          </button>
        </Link>
      </span>
    </div>
  )
}

export default LoginPage
