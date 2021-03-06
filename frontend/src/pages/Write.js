import { useEffect, useState } from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createPost, reset } from '../features/posts/postSlice'

import { toast } from 'react-toastify'

// Components
import Spinner from '../components/Spinner'
import ButtonBlock from '../components/ButtonBlock'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const WritePage = () => {
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.posts,
  )

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('life')
  const [description, setDescription] = useState('')
  const [previewSource, setPreviewSource] = useState('')

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

  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setPreviewSource(reader.result)
    }
  }

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    previewFile(file)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const newPost = { title, category, description, fileBase64: previewSource }

    dispatch(createPost(newPost))
    toast.success('Your post created successfully')
  }

  if (isLoading) return <Spinner />

  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      className='mx-auto my-5 dark:text-primary'
    >
      <form onSubmit={onSubmit}>
        {previewSource && (
          <img
            src={previewSource}
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
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='p-2 w-full rounded-md border border-gray-300 outline-gray-300 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white'
            required
          />
        </div>
        <div id='formGroup' className='flex flex-col my-5'>
          <label htmlFor='file' className='mb-2 text-2xl'>
            Upload Image (Optional)
          </label>
          <input
            className='w-full rounded-md border border-gray-300 outline-gray-300 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white cursor-pointer file:bg-gray-300 file:border-none file:rounded-md file:px-3 file:py-2 file:mr-3 file:cursor-pointer'
            id='file'
            name='file'
            type='file'
            accept='image/jpeg, image/png, image/webp'
            onChange={handleFileInputChange}
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
            required
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
            required
          ></textarea>
        </div>
        <ButtonBlock type='submit'>Publish</ButtonBlock>
      </form>
    </motion.div>
  )
}

export default WritePage
