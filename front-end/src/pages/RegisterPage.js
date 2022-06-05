import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='mx-auto my-5'>
      <form>
        <div
          id='formGroup'
          className='flex flex-col my-5'
        >
          <label
            htmlFor='userNameInput'
            className='mb-2 text-2xl'
          >
            Username
          </label>
          <input
            type='text'
            placeholder='Username'
            autoFocus='true'
            id='userNameInput'
            className='p-2 w-full rounded-md border border-gray-300 outline-gray-300'
          />
        </div>
        <div
          id='formGroup'
          className='flex flex-col my-5'
        >
          <label
            htmlFor='emailInput'
            className='mb-2 text-2xl'
          >
            Email
          </label>
          <input
            type='email'
            placeholder='Email'
            id='emailInput'
            className='p-2 w-full rounded-md border border-gray-300 outline-gray-300'
          />
        </div>
        <div
          id='formGroup'
          className='flex flex-col my-5'
        >
          <label
            htmlFor='passwordInput'
            className='mb-2 text-2xl'
          >
            Password
          </label>
          <input
            type='password'
            placeholder='Password'
            id='passwordInput'
            className='p-2 w-full rounded-md border border-gray-300 outline-gray-300'
          />
        </div>
        <button
          type='button'
          className='w-full text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition-all px-5 py-2.5'
        >
          Register
        </button>
      </form>
      <Link to={{ pathname: '/login' }}>
        <span className='flex justify-center my-5'>
          I have an account
        </span>
      </Link>
    </div>
  )
}

export default LoginPage
