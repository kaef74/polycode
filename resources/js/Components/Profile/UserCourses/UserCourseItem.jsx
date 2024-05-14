import '../../../../css/UserCourseItem.css';

import { Link } from '@inertiajs/react';

const UserCourseItem = ({id}) => {

    const title = "Основы Python";
    const level = "начинающий";
    const persentage = "55%";
    const solved_tasks = 11;

    return (
        <Link to={`/passingcourse/${id}`} className='usercourseitem'>
            <div className='usercourseitem__info'>
                <h3 className='usercourseitem__title'>{title}</h3>
                <p className='usercourseitem__text'>Уровень: <span className='color-blue'>{level}</span></p>
            </div>
            <div className='usercourseitem__statistics'>
                <p className='usercourseitem__text'>Процент прохождения: <span className='color-blue'>{persentage}</span></p>
                <p className='usercourseitem__text'>Задач решено: {solved_tasks}</p>
            </div>
        </Link>
    )
}

export default UserCourseItem;
