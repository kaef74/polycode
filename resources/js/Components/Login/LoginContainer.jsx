import React, { useState } from 'react';
import '../../../css/LoginContainer.css';
import photo from '../../../../public/storage/Images/login.png';
import LoginForm from './LoginForm.jsx';
import RegistrationForm from './RegistrationForm.jsx';

const LoginContainer = () => {
    const [shiftPhoto, setShiftPhoto] = useState(true);

    const handleLoginClick = () => {
        setShiftPhoto(true);
    };

    const handleRegisterClick = () => {
        setShiftPhoto(false);
    };

    return (
        <section className='login'>
            <div className={`login__photo--background ${shiftPhoto ? 'shifted' : ''}`}>
                <img src={photo} className={`login__photo ${shiftPhoto ? 'shifted' : ''}`} alt="Фото" />
            </div>
            <RegistrationForm handleLoginClick={handleLoginClick} />
            <LoginForm onRegisterClick={handleRegisterClick} />
        </section>
    )
}

export default LoginContainer;
