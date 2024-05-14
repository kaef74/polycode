import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';

import '../../css/WeeklyChallenge.css';

export default function WeeklyChallengePage ({ auth }) {
    return (
        <AuthenticatedLayout auth={ auth }>
        <section className='weeklychallengepage'>
            <h1 className='weeklychallengepage__title'>Еженедельный кейс</h1>
            <div className='weeklychallengepage__tags'>
                <div className='tag'>#СВОЙ_СТЕК</div>
            </div>
            <p className='weeklychallengepage__level'>Уровень: <span className='color-blue'>продвинутый</span></p>
            <p className='weeklychallengepage__time'>Осталось времени: 3 д. 12 ч. 25 мин.</p>

            <div className='weeklychallengepage__field'>
            <h2 className='dailychallengepage__name'>Задание</h2>
                <p className='dailychallengepage__task'>Разработать функцию-калькулятор на языке JavaScript, способную обрабатывать математические выражения, содержащие операции сложения, вычитания, умножения, деления, а также скобки. Функция должна принимать строку, представляющую математическое выражение, и возвращать результат его вычисления. Допускаются выражения с использованием вещественных чисел.</p>
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
