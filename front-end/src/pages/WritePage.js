import { useEffect, useState } from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createPost, reset } from '../features/posts/postSlice'

import { toast } from 'react-toastify'

// Components
import Spinner from '../components/Spinner'
import axios from 'axios'

const WritePage = () => {
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.posts,
  )

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('life')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess) {
      dispatch(reset())
      navigate('/')
    }

    dispatch(reset())
  }, [dispatch, isError, isSuccess, navigate, message])

  const onSubmit = async (e) => {
    e.preventDefault()
    const newPost = { title, category, description }
    if (file) {
      const data = new FormData()
      const fileName = Date.now() + file.name
      data.append('name', fileName)
      data.append('file', file)
      newPost.photo = fileName

      try {
        await axios.post('api/uploads', data)
      } catch (error) {
        throw new Error('Could not upload the file')
      }
    }

    dispatch(createPost(newPost))
    toast.success('Your post created successfully')
  }

  if (isLoading) return <Spinner />

  return (
    <div className='mx-auto my-5 dark:text-primary'>
      <form onSubmit={onSubmit}>
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt={title}
            className='rounded-md w-full h-[500px] object-cover'
          />
        )}
        <div id='formGroup' className='flex flex-col my-5'>
          <label htmlFor='title' className='mb-2 text-2xl'>
            Title
          </label>
          <input
            type='text'
            placeholder='Title'
            autoFocus={true}
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='p-2 w-full rounded-md border border-gray-300 outline-gray-300 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white'
          />
        </div>
        <div id='formGroup' className='flex flex-col my-5'>
          <label htmlFor='file' className='mb-2 text-2xl'>
            Upload Image
          </label>
          <input
            className='w-full rounded-md border border-gray-300 outline-gray-300 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white cursor-pointer'
            id='file'
            type='file'
            accept='image/jpeg, image/png, image/webp'
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div id='formGroup' className='flex flex-col my-5'>
          <label htmlFor='category' className='mb-2 text-2xl'>
            Select an category
          </label>
          <select
            id='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option value='life'>Life</option>
            <option value='music'>Music</option>
            <option value='style'>Style</option>
            <option value='sport'>Sport</option>
            <option value='cinema'>Cinema</option>
            <option value='tech'>Tech</option>
            <option value='game'>Game</option>
          </select>
        </div>
        <div id='formGroup' className='flex flex-col my-5'>
          <label htmlFor='description' className='mb-2 text-2xl'>
            Write your story
          </label>
          <textarea
            id='description'
            className='p-2 w-full rounded-md border border-gray-300 outline-gray-300 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white'
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button className='w-full text-gray-900 focus:outline-none bg-gray-100 rounded-md border border-gray-200 hover:bg-gray-200 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition-all px-5 py-2.5'>
          Publish
        </button>
      </form>
    </div>
  )
}

export default WritePage
