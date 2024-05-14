import '../../../css/DailyChallengeComp.css';

import { Link } from '@inertiajs/react';

const DailyChallenge = () => {

    const level = "начинающий";

    return (
        <Link href={route('daily-challenge')} className='dailychallenge'>
            <h2 className='dailychallenge__title'>ЕЖЕДНЕВНОЕ ЗАДАНИЕ</h2>
            <p className='dailychallenge__level'>Уровень: <span className='color-blue'>{level}</span></p>
            <div className='dailychallenge__bottom'>
                <ul className='dailychallenge__tags'>
                    <li className='tag'>
                        #JS
                    </li>
                    <li className='tag'>
                        #JAVASCRIPT
                    </li>
                </ul>
                <p className='dailychallenge__time'>
                    Осталось времени: 12 ч. 25 мин.
                </p>
            </div>
        </Link>
    )
}

export default DailyChallenge;
