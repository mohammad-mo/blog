// Components
import Navbar from './components/Navbar'

// Pages
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'

const App = () => {
  return (
    <div className='container mx-auto px-2'>
      <Navbar />
      {/* <HomePage /> */}
      <PostPage />
    </div>
  )
}

export default App
