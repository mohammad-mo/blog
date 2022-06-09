import Header from '../components/Header'
import Posts from '../components/Posts'
import Sidebar from '../components/Sidebar'

const HomePage = () => {
  return (
    <>
      <Header />
      <div className='grid grid-cols-12 gap-2 mt-5 items-start'>
        <Posts />
        <Sidebar />
      </div>
    </>
  )
}

export default HomePage
