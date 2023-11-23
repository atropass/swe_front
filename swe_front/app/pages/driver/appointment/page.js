// pages/profile.js
import AppointmentForm from '../../../components/AppointmentForm';
import Header from '../../../components/HeaderDriver'; // If you have a header component

const Appointment = () => {
    return (
        <div className='h-screen bg-white'>
            <Header />
            <AppointmentForm />
        </div>
    );
};

export default Appointment;
