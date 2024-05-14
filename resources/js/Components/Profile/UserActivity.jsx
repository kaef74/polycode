import React, { useState, useEffect } from 'react';

import '../../../css/UserActivity.css';

const MonthList = () => {
    const months = [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];

    return (
        <React.Fragment>
            {months.map((month, index) => (
                <li className="activity__month" key={index}>{month}</li>
            ))}
        </React.Fragment>
    );
};


const Box_list = ({ onHover }) => {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 365);



    const [completedTasks, setCompletedTasks] = useState([]);

    useEffect(() => {
        const randomTasks = Array.from({ length: 366 }, () => Math.floor(Math.random() * 13));
        setCompletedTasks(randomTasks);
    }, []);

    const items = completedTasks.map((tasks, index) => {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + index);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();

        let boxClass = 'activity__box';
        if (tasks === 0) {
            boxClass += ' background-d9d9d9';
        } else if (tasks >= 1 && tasks <= 3) {
            boxClass += ' background-B1D4E5-50';
        } else if (tasks >= 4 && tasks <= 7) {
            boxClass += ' background-B1D4E5';
        } else if (tasks >= 8 && tasks <= 11) {
            boxClass += ' background-59A1FF-50';
        } else {
            boxClass += ' background-59A1FF';
        }

        return (
            <li
            className={boxClass}
            key={index}
            onMouseEnter={() => onHover(`${day} ${month} ${year}`, tasks)}
            onMouseLeave={() => onHover(null)}
        >
        </li>
        );
    });

    return (
        <React.Fragment>
            {items}
        </React.Fragment>
    );
};



const Activity = () => {
    const [hoveredDate, setHoveredDate] = useState(null);
    const [tasks, setTasks] = useState(null);

    let total_number_task = 0;

    return (
        <div className='useractivity'>
            <div className='activity__container'>
                <ul className='activity__weekday'>
                    <li className='activity__weekday--item'>
                        <p className='activity__day'>Пн</p>
                    </li>
                    <li className='activity__weekday--item'>
                        <p className='activity__day'>Вт</p>
                    </li>
                    <li className='activity__weekday--item'>
                        <p className='activity__day'>Ср</p>
                    </li>
                    <li className='activity__weekday--item'>
                        <p className='activity__day'>Чт</p>
                    </li>
                    <li className='activity__weekday--item'>
                        <p className='activity__day'>Пт</p>
                    </li>
                    <li className='activity__weekday--item'>
                        <p className='activity__day'>Сб</p>
                    </li>
                    <li className='activity__weekday--item'>
                        <p className='activity__day'>Вс</p>
                    </li>
                </ul>
                <div className='activity__right-block'>
                    <ul className='activity__months'>
                    <MonthList />
                    </ul>
                    <ul className='activity__table'>
                    <Box_list onHover={(date, tasks) => {
                        setHoveredDate(date);
                        setTasks(tasks);
                    }} />
                    </ul>
                </div>
            </div>
            <div className='activity__info'>
                <p className='activity__totaltasks'>Всего задач решено: {total_number_task}</p>
                <div className='activity__aboutdate'>
                {hoveredDate && (
                <>
                    <p className='activity__date'>{hoveredDate}</p>
                    <p className='activity__totaltasks'>Задач решено: {tasks}</p>
                </>
                )}

                </div>
                <div className='activity__graduation'>
                    <p>мало</p>
                    <ul className='graduation__list'>
                        <li className='graduation__box background-d9d9d9'></li>
                        <li className='graduation__box background-B1D4E5-50'></li>
                        <li className='graduation__box background-B1D4E5'></li>
                        <li className='graduation__box background-59A1FF-50'></li>
                        <li className='graduation__box background-59A1FF'></li>
                    </ul>
                    <p>много</p>
                </div>
            </div>
        </div>
    )
}

export default Activity;
