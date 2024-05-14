import '../../../css/AboutLeaderboard.css';

import { Link } from '@inertiajs/react';

import photo from '../../../../public/storage/Images/aboutleaderboard.png';

const AboutLeaderboard = () => {
    return (
        <div className='aboutleaderboard'>
            <div className='aboutleaderboard__container'>
                <img src={photo} className='aboutleaderboard__photo' alt="Фото" />
                <div className='aboutleaderboard__info'>
                    <h2 className='aboutleaderboard__title'>Таблица <span className='color-blue'>лидеров</span></h2>
                    <p className='aboutleaderboard__text'>
                    На сайте имеется таблица лидеров и система очков. Пользователи могут зарабатывать очки, выполняя различные задания по курсам, еженедельным кейсам и ежедневным заданиям.
                    </p>
                    <p className='aboutleaderboard__text'>
                    Эта система создает соревновательную атмосферу и позволяет отслеживать прогресс каждого участника.
                    </p>
                    <Link onClick={() => {window.scrollTo(0,0)}} to="/leaderboard" className='aboutleaderboard__button button-reverse'>Таблица лидеров</Link>
                </div>
            </div>
        </div>
    )
}

export default AboutLeaderboard;
