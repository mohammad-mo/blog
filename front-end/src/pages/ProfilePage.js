// Components
import ProfileInfo from '../components/ProfileInfo'
import Sidebar from '../components/Sidebar'

const ProfilePage = () => {
  return (
    <div className='grid grid-cols-12 gap-2 my-5 items-start'>
      <ProfileInfo />
      <Sidebar />
    </div>
  )
}

export default ProfilePage
