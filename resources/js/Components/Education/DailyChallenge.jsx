import '../../../css/DailyChallengeComp.css';
import { Link } from '@inertiajs/react';
import { useEffect, useState } from "react";

const DailyChallenge = ({ daily, serverTime }) => {
    const [currentTime, setCurrentTime] = useState(new Date(serverTime));

    const calculateTimeLeft = () => {
        const midnight = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate() + 1);
        const diff = midnight - currentTime;
        const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date(currentTime.getTime() + 1000));
        }, 1000);
        return () => clearInterval(interval);
    }, [currentTime]);

    const timeLeftFormatted = calculateTimeLeft();

    return (
        <Link href={route('daily-challenge')} className='dailychallenge'>
                    <h2 className='dailychallenge__title'>ЕЖЕДНЕВНОЕ ЗАДАНИЕ</h2>
            {daily ? (
                <>
                    <p className='dailychallenge__level'>Уровень: <span className='color-blue'>{daily.level.name}</span></p>
                    <div className='dailychallenge__bottom'>
                        <ul className='dailychallenge__tags'>
                            <li className='tag'>
                                #{daily.language.name.toUpperCase()}
                            </li>
                        </ul>
                        <p className='dailychallenge__time'>
                            Осталось времени: {timeLeftFormatted}
                        </p>
                    </div>
                </>
            ) : (
                <>
                <p className='dailychallenge__level'>Уровень: <span className='color-blue'>chill</span></p>
                <div className='dailychallenge__bottom'>
                    <ul className='dailychallenge__tags'>
                        <li className='tag'>
                            #ОТДЫХ
                        </li>
                    </ul>
                    <p className='dailychallenge__time'>
                        Сегодня задание не назначено.
                    </p>
                </div>
                </>
            )}
        </Link>
    );
};

export default DailyChallenge;
