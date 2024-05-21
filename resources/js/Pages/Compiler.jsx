import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import '../../css/Compiler.css';

export default function Compiler ({ auth }) {
    return (
        <GuestLayout auth={auth}>
        <section className='compiler'>
            <h1 className='compiler__title'>Компилятор</h1>
            <p className='compiler__text'>На нашей платформе вы можете быстро и легко компилировать код на различных языках программирования прямо в вашем браузере. Просто введите код, выберите язык и получите результаты.</p>
            <div className='compiler__field'>
                <iframe
                    src="http://localhost:3000"
                    style={{width: '100%', height: '100%', border: 'none'}}
                ></iframe>
            </div>
        </section>
        </GuestLayout>
    )
}
