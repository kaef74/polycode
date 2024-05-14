import '../../../css/WeeklyChallengeComp.css';

import { Link } from '@inertiajs/react';

const WeeklyChallenge = () => {

    const level = "продвинутый";

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
                    Осталось времени: 3 д. 12 ч. 25 мин.
                </p>
            </div>
        </Link>
    )
}

export default WeeklyChallenge;
