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

const App = () => {
  return (
    <>
      <Router>
        <div className='container mx-auto px-4'>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/posts/:id' element={<PostPage />} />
            <Route path='/write' element={<WritePage />} />
            <Route path='/profile' element={<PrivateRoute />}>
              <Route path='/profile' element={<ProfilePage />} />
            </Route>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/notfound' element={<NotFoundPage />} />
            <Route path='/*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
