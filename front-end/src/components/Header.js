const Header = () => {
  return (
    <div className='relative h-[500px] w-full flex justify-center items-center font-serif bg-hero rounded-md'>
      <div
        id='overlay'
        className='absolute w-full h-full top-0 left-0 text-white flex justify-center items-center bg-gray-800 bg-opacity-30 rounded-md'
      >
        <h1 className='text-white text-5xl font-bold'>
          Welcome to the MERN blog
        </h1>
      </div>
    </div>
  )
}
export default Header
