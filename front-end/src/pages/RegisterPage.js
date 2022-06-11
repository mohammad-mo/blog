import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'

// React toastify
import { toast } from 'react-toastify'

import { FaEye, FaEyeSlash } from 'react-icons/fa'

// Components
import Spinner from '../components/Spinner'
import ButtonSm from '../components/ButtonSm'

const LoginPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })
  const [showPassword, setShowPassword] = useState(false)

  const { name, email, password, password2 } = formData

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

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) return <Spinner />

  return (
    <div className='mx-auto my-5 dark:text-primary'>
      <form onSubmit={onSubmit}>
        <div id='formGroup' className='flex flex-col my-5'>
          <label htmlFor='name' className='mb-2 text-2xl'>
            name
          </label>
          <input
            type='text'
            placeholder='Name'
            value={name}
            name='name'
            id='name'
            className='p-2 w-full rounded-md border border-gray-300 outline-gray-300 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white'
            onChange={onChange}
            required
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
              placeholder='Password'
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
        <div id='formGroup' className='flex flex-col my-5'>
          <label htmlFor='password2' className='mb-2 text-2xl'>
            Confirm Password
          </label>
          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Confirm your Password'
              id='password2'
              name='password2'
              value={password2}
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
        <button className='w-full text-gray-900 focus:outline-none bg-gray-100 rounded-md border border-gray-200 hover:bg-gray-200 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition-all px-5 py-2.5'>
          Register
        </button>
      </form>
      <span className='flex justify-center items-center space-x-3 my-5'>
        <p>Have an account?</p>
        <Link to={{ pathname: '/login' }}>
          <ButtonSm>Login here</ButtonSm>
        </Link>
      </span>
    </div>
  )
}

export default LoginPage
