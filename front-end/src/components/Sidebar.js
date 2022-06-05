const Sidebar = () => {
  return (
    <div className='flex flex-col items-center col-span-full sm:col-span-3 order-2 sm:order-none bg-primary p-5 rounded-lg'>
      <div
        id='sidebar-items'
        className='flex flex-col items-center my-2'
      >
        <span className='font-bold'>
          ABOUT ME
        </span>
        <div className='my-2 w-10 h-10 rounded-full bg-blue-400'></div>
        <p>
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cum, praesentium.
        </p>
      </div>
      <div
        id='sidebar-items'
        className='flex flex-col items-center w-full my-2'
      >
        <span className='mb-2 font-bold'>
          CATEGORIES
        </span>
        <ul className=' text-center grid grid-cols-fluid w-full'>
          <li className='cursor-pointer'>Life</li>
          <li className='cursor-pointer'>
            Music
          </li>
          <li className='cursor-pointer'>
            Style
          </li>
          <li className='cursor-pointer'>
            Sport
          </li>
          <li className='cursor-pointer'>
            Cinema
          </li>
          <li className='cursor-pointer'>Tech</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
