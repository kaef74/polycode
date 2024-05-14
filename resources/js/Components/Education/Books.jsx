import '../../../css/Books.css';

const Books = () => {
    return (
        <div className='books'>
            <h2 className='books__title'>Популярные <span className='color-blue'>учебники</span></h2>
            <p className='books__text'>
                У нас Вы найдете обширный выбор учебников по различным аспектам программирования. Мы собрали лучшие издания, которые помогут вам освоить основы и углубиться в более сложные темы. Наши учебники охватывают широкий спектр языков программирования, алгоритмов, структур данных, разработки веб-приложений, машинного обучения и многого другого.
            </p>
            <ul className='books__list'>
                <li className='books__item'>
                    <h3 className='books__category'>Язык программирования Python</h3>
                    <p className='books__name'>- Python для начинающих (Эндрю М. Кельси)</p>
                    <p className='books__name'>- Программирование на Python 3 (Марк Лутц)</p>
                    <p className='books__name'>- Программирование игр, визуализация данных (Эрик Мэтсон)</p>
                </li>
                <li className='books__item'>
                    <h3 className='books__category'>Язык программирования JavaScript</h3>
                    <p className='books__name'>- JavaScript и JQuery: интерактивная веб-разработка (Джон Д.)</p>
                    <p className='books__name'>- Выразительный JavaScript (Марейн Хавербеке)</p>
                    <p className='books__name'>- Секреты JavaScript ниндзя (Джон Резиг)</p>
                </li>
                <li className='books__item'>
                    <h3 className='books__category'>Язык программирования C++</h3>
                    <p className='books__name'>- Язык программирования С++ (Бьерн Страуструп)</p>
                    <p className='books__name'>- Программирование: профессиональный подход (Майкл Доусон)</p>
                    <p className='books__name'>- C++ Primer (Стэнли Б. Липман)</p>
                </li>
                <li className='books__item'>
                    <h3 className='books__category'>Язык программирования Ruby</h3>
                    <p className='books__name'>- Изучаем Ruby (Крис Пайн)</p>
                    <p className='books__name'>- Программирование на Ruby (Дэвид Флэнаган)</p>
                    <p className='books__name'>- Ruby подробное руководство (Пол Ломбард)</p>
                </li>
                <li className='books__item'>
                    <h3 className='books__category'>Язык программирования Java</h3>
                    <p className='books__name'>- Java: руководство для начинающих (Герберт Ш.)</p>
                    <p className='books__name'>- Основы Java. Система обучения программированию (Н.)</p>
                    <p className='books__name'>- Эффективное программирование на Java (Райан Гослинг)</p>
                </li>
                <li className='books__item'>
                    <h3 className='books__category'>Язык программирования PHP</h3>
                    <p className='books__name'>- PHP и MySQL для начинающих (Ларри Ульман)</p>
                    <p className='books__name'>- Программирование на PHP. 2020 (Дэвид Скляр)</p>
                    <p className='books__name'>- PHP. Объекты, шаблоны и методики программирования (М. Э.)</p>
                </li>
            </ul>
        </div>
    )
}

export default Books;
