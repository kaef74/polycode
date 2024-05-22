import '../../../css/UserStatistics.css';

const UserStatistics = () => {
    return (
        <div className='userstatistics'>
            <h4 className='userstatistics__title'>Статистика</h4>
            <ul className='userstatistics__list'>
                <li className='userstatistics__item'>
                    <p className='userstatistics__name'>
                    Решено задач
                    </p>
                    <p className='userstatistics__value'>
                        59
                    </p>
                </li>
                <li className='userstatistics__item'>
                    <p className='userstatistics__name'>
                        Очки
                    </p>
                    <p className='userstatistics__value'>
                        30
                    </p>
                </li>
                <li className='userstatistics__item'>
                    <p className='userstatistics__name'>
                        Рейтинг
                    </p>
                    <p className='userstatistics__value'>
                        #10672
                    </p>
                </li>
            </ul>
            <h4 className='userstatistics__title'>Последние достижения</h4>
            <ul className='userstatistics__achievements'>
                <li className='achievement'>

                </li>
                <li className='achievement'>

                </li>
                <li className='achievement'>

                </li>
                <li className='achievement'>

                </li>
                <li className='achievement'>

                </li>
                <li className='achievement'>

                </li>
            </ul>
        </div>
    )
}

export default UserStatistics;
