import '../../../css/Filters.css';

const Filters = () => {
    return (
        <div className='filters'>
            <h1 className='filters__title'>Фильтры</h1>
            <div className='filters__block'>
                <h3 className='filters__name'>Уровень курса:</h3>
                <ul className='filters__list'>
                    <li className='filters__item'>
                        <input type="checkbox" className='checkbox' />
                        <p>Начинающий</p>
                    </li>
                    <li className='filters__item'>
                        <input type="checkbox" className='checkbox' />
                        <p>Прдвинутый</p>
                    </li>
                    <li className='filters__item'>
                        <input type="checkbox" className='checkbox' />
                        <p>Соверешнный</p>
                    </li>
                </ul>
            </div>
            <div className='filters__block'>
                <h3 className='filters__name'>Предпочитаемые языки:</h3>
                <ul className='filters__list'>
                    <li className='filters__item'>
                        <input type="checkbox" className='checkbox' />
                        <p>Python</p>
                    </li>
                    <li className='filters__item'>
                        <input type="checkbox" className='checkbox' />
                        <p>C++</p>
                    </li>
                    <li className='filters__item'>
                        <input type="checkbox" className='checkbox' />
                        <p>C#</p>
                    </li>
                    <li className='filters__item'>
                        <input type="checkbox" className='checkbox' />
                        <p>C</p>
                    </li>
                    <li className='filters__item'>
                        <input type="checkbox" className='checkbox' />
                        <p>Java</p>
                    </li>
                    <li className='filters__item'>
                        <input type="checkbox" className='checkbox' />
                        <p>JavaScript</p>
                    </li>
                    <li className='filters__item'>
                        <input type="checkbox" className='checkbox' />
                        <p>HTML | CSS</p>
                    </li>
                    <li className='filters__item'>
                        <input type="checkbox" className='checkbox' />
                        <p>PHP</p>
                    </li>
                </ul>
            </div>
            <div className='filters__block'>
                <h3 className='filters__name'>Категории:</h3>
                <ul className='filters__list'>
                    <li className='filters__item'>
                        <input type="checkbox" className='checkbox' />
                        <p>Фронтенд-разработка</p>
                    </li>
                    <li className='filters__item'>
                        <input type="checkbox" className='checkbox' />
                        <p>Бэкенд-разработка</p>
                    </li>
                    <li className='filters__item'>
                        <input type="checkbox" className='checkbox' />
                        <p>Мобильная разработка</p>
                    </li>
                    <li className='filters__item'>
                        <input type="checkbox" className='checkbox' />
                        <p>Машинное обучение</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Filters;
