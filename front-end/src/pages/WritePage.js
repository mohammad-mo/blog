import heroImage from '../assets/hero.jpg'

const WritePage = () => {
  return (
    <div className='mx-auto my-5'>
      <form>
        {/* <img
          src={heroImage}
          alt=''
          className='rounded-md w-full h-[500px] object-cover'
        /> */}
        <div
          id='formGroup'
          className='flex flex-col my-5'
        >
          <label
            htmlFor='titleInput'
            className='mb-2 text-2xl'
          >
            Title
          </label>
          <input
            type='text'
            placeholder='Title'
            autoFocus='true'
            id='titleInput'
            className='p-2 w-full rounded-md border border-gray-300 outline-gray-300'
          />
        </div>
        <div
          id='formGroup'
          className='flex flex-col my-5'
        >
          <label
            htmlFor='fileInput'
            className='mb-2 text-2xl'
          >
            Upload Image
          </label>
          <input
            className='w-full bg-gray-50 rounded-md border border-gray-300 cursor-pointer'
            id='fileInput'
            type='file'
            accept='image/jpeg, image/png, image/webp'
          />
        </div>
        <div
          id='formGroup'
          className='flex flex-col my-5'
        >
          <label
            htmlFor='description'
            className='mb-2 text-2xl'
          >
            Write your story
          </label>
          <textarea
            id='description'
            className='p-2 w-full rounded-md border border-gray-300 outline-gray-300'
            placeholder='Description'
          ></textarea>
        </div>
        <button
          type='button'
          className='w-full text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition-all px-5 py-2.5'
        >
          Publish
        </button>
      </form>
    </div>
  )
}

export default WritePage
