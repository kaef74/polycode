import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import '../../css/Compiler.css';

export default function Compiler ({ auth }) {
    return (
        <GuestLayout auth={auth}>
            <section className='compiler'>
                <h1 className='compiler__title'>Компилятор</h1>
                <p className='compiler__text'>На нашей платформе вы можете быстро и легко компилировать код на различных
                    языках программирования прямо в вашем браузере. Просто введите код, выберите язык и получите
                    результаты.</p>
                <a href="https://drive.google.com/uc?export=download&id=1WwbqYHcxEFrijQmzGQ4w-Y-E0nc9rQui"
                   className="download">Скачать приложение для AstraLinux</a>
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
