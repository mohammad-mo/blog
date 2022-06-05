import { Route, Routes } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'

// Pages
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import WritePage from './pages/WritePage'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

const App = () => {
  return (
    <div className='container mx-auto px-4'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/posts/:id'
          element={<PostPage />}
        />
        <Route
          path='/write'
          element={<WritePage />}
        />
        <Route
          path='/profile'
          element={<ProfilePage />}
        />
        <Route
          path='/login'
          element={<LoginPage />}
        />
        <Route
          path='/register'
          element={<RegisterPage />}
        />
        <Route
          path='/notfound'
          element={<NotFoundPage />}
        />
        <Route
          path='/*'
          element={<NotFoundPage />}
        />
      </Routes>
    </div>
  )
}

export default App
