import '../../../css/News.css';

const News = () => {
    return (
        <div className='news'>
            <h2 className='news__title'>Последние новости</h2>
            <ul className='news__list'>
                <li className='news__item'>
                    <h3 className='news__name'>Студенческий хакатон</h3>
                    <p className='news__date'>06.05.2024</p>
                    <p className='news__text'>
                    Открыта регистрация на студенческий хакатон «Системное программирование», организованный Институтом перспективных технологий и индустриального программирования и «Группой Астра».
                    </p>
                </li>
                <li className='news__item'>
                    <h3 className='news__name'>Стартовал новый еженедельный кейс</h3>
                    <p className='news__date'>11.05.2024</p>
                    <p className='news__text'>
                    Приглашаем всех студентов принять участие в нашем новом еженедельном кейсе! Создание простого блога - это отличная возможность попрактиковаться в разработке веб-приложений и познакомиться с современными технологиями. Участвуйте, развивайтесь и делитесь своими результатами с сообществом!
                    </p>
                </li>
                <li className='news__item'>
                    <h3 className='news__name'>Доступен новый курс "Искусственный интеллект в медицине"</h3>
                    <p className='news__date'>27.04.2024</p>
                    <p className='news__text'>
                    Хотите погрузиться в увлекательный мир искусственного интеллекта и его применения в медицине? Тогда этот курс для вас! Изучайте основы машинного обучения, анализа медицинских данных и разработки инновационных решений в области здравоохранения. Регистрируйтесь прямо сейчас и станьте экспертом в области AI!
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default News;
