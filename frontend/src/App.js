import { Route, Routes, useLocation } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Components
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'

// Pages
import HomePage from './pages/Home'
import PostPage from './pages/Post'
import WritePage from './pages/Write'
import ProfilePage from './pages/Profile'
import NotFoundPage from './pages/NotFound'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import MyPostsPage from './pages/MyPosts'
import AboutPage from './pages/About'
import ScrollToTopWrapper from './components/ScrollToTopWrapper'
import BackToTop from './components/BackToTop'

// Animation
import { AnimatePresence } from 'framer-motion'

const App = () => {
  const location = useLocation()

  return (
    <>
      <div className='container mx-auto px-4 pb-5 min-h-screen'>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <ScrollToTopWrapper>
            <Routes location={location} key={location.pathname}>
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
            <BackToTop />
          </ScrollToTopWrapper>
        </AnimatePresence>
      </div>
      <ToastContainer toastClassName='bg-white dark:bg-primaryBlack dark:text-white dark:fill-white' />
    </>
  )
}

export default App
