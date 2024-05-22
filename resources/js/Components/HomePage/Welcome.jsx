import '../../../css/Welcome.css';

import { Link } from '@inertiajs/react';

import photo from '../../../../public/storage/Images/welcome.png';

const Welcome = () => {
    return (
        <div className='welcome'>
            <div className='welcome__info'>
                <h1 className='welcome__title'>Добро пожаловать в <span className='color-blue'>ПОЛИКОД МИРЭА</span></h1>
                <p className='welcome__text'>Мы рады приветствовать вас в уникальном мире программирования и технологий. Здесь вы найдете не только знания, но и вдохновение для творчества, возможности для роста и обмена опытом с единомышленниками.</p>
                <Link href={route('auth')} className="welcome__button button">Присоединиться</Link>
           </div>
           <img src={photo} className='welcome__photo' alt="Фото" />
        </div>
    )
}

export default Welcome;
