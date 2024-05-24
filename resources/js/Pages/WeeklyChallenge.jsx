import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import '../../css/WeeklyChallenge.css';
import {useEffect, useState} from "react";

export default function WeeklyChallengePage({ auth, weekly, serverTime }) {
    const level = weekly ? weekly.level.name : "не указан";
    const description = weekly ? weekly.description : "Описание задания не доступно.";
    const [currentTime, setCurrentTime] = useState(new Date(serverTime));

    const calculateTimeLeft = () => {
        const endOfWeek = new Date(currentTime.getTime());
        endOfWeek.setDate(currentTime.getDate() + (7 - currentTime.getDay()));
        endOfWeek.setHours(0, 0, 0, 0);
        const diff = endOfWeek - currentTime;
        const days = String(Math.floor(diff / (1000 * 60 * 60 * 24)));
        const hours = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
        return `${days} д. ${hours} ч. ${minutes} мин. ${seconds} сек.`;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date(currentTime.getTime() + 1000));
        }, 1000);
        return () => clearInterval(interval);
    }, [currentTime]);

    const timeLeftFormatted = calculateTimeLeft();

    return (
        <AuthenticatedLayout auth={auth}>
            <section className='weeklychallengepage'>
                <h1 className='weeklychallengepage__title'>Еженедельный кейс</h1>
                <div className='weeklychallengepage__tags'>
                    <div className='tag'>#СВОЙ_СТЕК</div>
                </div>
                <p className='weeklychallengepage__level'>Уровень: <span className='color-blue'>{level}</span></p>
                <p className='weeklychallengepage__time'>Осталось времени: {timeLeftFormatted}</p>
                <div className='weeklychallengepage__field'>
                    <h2 className='dailychallengepage__name'>Задание</h2>
                    <p className='dailychallengepage__task'>{description}</p>
                    <p className='weeklychallengepage__requirements'>Для успешной сдачи кейса Вам необходимо прикрепить:</p>
                    <ul className='weeklychallengepage__requirements-list'>
                        <li className='requirement'>
                            - Файл отчёта по кейсу (.docx или .doc или pdf)
                        </li>
                        <li className='requirement'>
                            - Архив с Вашим проектом
                        </li>
                        <li className='requirement'>
                            - Руководство пользователя или инструкция по работе
                        </li>
                    </ul>
                    <p className='weeklychallengepage__requirements'>Файлы:</p>
                    <form className='weeklychallengepage__form'>
                        <input className="weeklychallengepage__input" type="file" multiple />
                        <button className='weeklychallengepage__button button'>Отправить на проверку</button>
                    </form>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
