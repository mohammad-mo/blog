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
        <div id='formGroup' className='flex flex-col my-5'>
          <label htmlFor='title' className='mb-2 text-2xl'>
            Title
          </label>
          <input
            type='text'
            placeholder='Title'
            autoFocus={true}
            id='title'
            className='p-2 w-full rounded-md border border-gray-300 outline-gray-300'
          />
        </div>
        <div id='formGroup' className='flex flex-col my-5'>
          <label htmlFor='file' className='mb-2 text-2xl'>
            Upload Image
          </label>
          <input
            className='w-full bg-gray-50 rounded-md border border-gray-300 cursor-pointer'
            id='file'
            type='file'
            accept='image/jpeg, image/png, image/webp'
          />
        </div>
        <div id='formGroup' className='flex flex-col my-5'>
          <label htmlFor='category' className='mb-2 text-2xl'>
            Select an category
          </label>
          <select
            id='category'
            class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          >
            <option value='US'>life</option>
            <option value='CA'>music</option>
            <option value='FR'>style</option>
            <option value='DE'>sport</option>
            <option value='DE'>cinema</option>
            <option value='DE'>tech</option>
            <option value='DE'>game</option>
          </select>
        </div>
        <div id='formGroup' className='flex flex-col my-5'>
          <label htmlFor='description' className='mb-2 text-2xl'>
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
