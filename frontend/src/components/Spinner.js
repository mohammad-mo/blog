const Spinner = () => {
  return (
    <div className='fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 z-50 flex justify-center items-center'>
      <div className='w-16 h-16 border-8 border-solid border-y-black dark:border-y-primary dark:border-opacity-90 border-x-[#555] border-x-transparent rounded-full animate-spin'></div>
    </div>
  )
}

export default Spinner
