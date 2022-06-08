import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Components
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'

// Pages
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import WritePage from './pages/WritePage'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import MyPostsPage from './pages/MyPostsPage'
import AboutPage from './pages/AboutPage'

const App = () => {
  return (
    <>
      <Router>
        <div className='container mx-auto px-4 mb-10'>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/posts/:postId' element={<PostPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/notfound' element={<NotFoundPage />} />
            <Route path='/*' element={<NotFoundPage />} />
            <Route path='/write' element={<PrivateRoute />}>
              <Route path='/write' element={<WritePage />} />
            </Route>
            <Route path='/my-posts' element={<PrivateRoute />}>
              <Route path='/my-posts' element={<MyPostsPage />} />
            </Route>
            <Route path='/profile' element={<PrivateRoute />}>
              <Route path='/profile' element={<ProfilePage />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
