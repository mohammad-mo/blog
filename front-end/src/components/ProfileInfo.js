import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../features/auth/authSlice'

import { toast } from 'react-toastify'

// Components
import ButtonBlock from './ButtonBlock'

const ProfileInfo = () => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const [name, setName] = useState(user.name || '')
  const [email, setEmail] = useState(user.email || '')

  const navigate = useNavigate()

  useEffect(() => {
    setName(user.name)
    setEmail(user.email)
  }, [user.name, user.email])

  const onUpdateUser = (e) => {
    e.preventDefault()
    if (user.name === name && user.email === email) {
      toast.error("You didn't change anything")
      return
    }
    dispatch(updateUser({ name, email }))
    toast.success(
      'Your information has been updated, to see the changes please logout/login',
    )
    navigate('/')
  }

  return (
    <div className='bg-primary border border-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-primary rounded-md p-5'>
      <div>
        <div id='title' className='flex justify-start items-center'>
          <span className='text-2xl'>Update Your account</span>
        </div>
        <form onSubmit={onUpdateUser}>
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
              className='p-2 w-full rounded-md border border-gray-300 outline-gray-300 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white'
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
              className='p-2 w-full rounded-md border border-gray-300 outline-gray-300 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white'
            />
          </div>
          <ButtonBlock type='submit'>Update</ButtonBlock>
        </form>
      </div>
    </div>
  )
}

export default ProfileInfo
