import Header from '../components/Header'
import Posts from '../components/Posts'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <>
      <Header />
      <div className='grid grid-cols-12 m-5'>
        <Posts />
        <Sidebar />
      </div>
    </>
  )
}

export default Home
