import GuestLayout from '@/Layouts/GuestLayout.jsx';
import LoginContainer from '../Components/Login/LoginContainer.jsx';
import '../../css/Login.css';

export default function Login({ auth }) {
    return (
        <GuestLayout auth={auth}>
            <LoginContainer />
        </GuestLayout>
    )
}

