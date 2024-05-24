import '../../../css/WeeklyChallengeComp.css';

import { Link } from '@inertiajs/react';
import {useEffect, useState} from "react";

const WeeklyChallenge = ({ weekly, serverTime }) => {
    const level = weekly ? weekly.level.name : "не указан";
    const [currentTime, setCurrentTime] = useState(new Date(serverTime));

    const calculateTimeLeft = () => {
        const endOfWeek = new Date(currentTime.getTime());
        endOfWeek.setDate(currentTime.getDate() + (7 - currentTime.getDay()));
        endOfWeek.setHours(0, 0, 0, 0);
        const diff = endOfWeek - currentTime;
        const days = String(Math.floor(diff / (1000 * 60 * 60 * 24)));
        const hours = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        return `${days} д. ${hours} ч. ${minutes} мин.`;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date(currentTime.getTime() + 1000));
        }, 1000);
        return () => clearInterval(interval);
    }, [currentTime]);

    const timeLeftFormatted = calculateTimeLeft();


    return (
        <Link href={route('weekly-challenge')} className='weeklychallenge'>
            <h2 className='weeklychallenge__title'>ЕЖЕНЕДЕЛЬНЫЙ КЕЙС</h2>
            <p className='weeklychallenge__level'>Уровень: <span className='color-blue'>{level}</span></p>
            <div className='weeklychallenge__bottom'>
                <ul className='weeklychallenge__tags'>
                    <li className='tag'>
                        #СВОЙ_СТЕК
                    </li>
                </ul>
                <p className='weeklychallenge__time'>
                    Осталось времени: {timeLeftFormatted}
                </p>
            </div>
        </Link>
    )
}

export default WeeklyChallenge;
