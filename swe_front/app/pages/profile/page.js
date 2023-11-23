// pages/profile.js
import ProfileForm from '../../components/ProfileForm';
import Header from '../../components/Header'; // If you have a header component

const ProfilePage = () => {
    return (
        <div className='h-screen bg-white'>
            <Header />
            <ProfileForm />
        </div>
    );
};

export default ProfilePage;
