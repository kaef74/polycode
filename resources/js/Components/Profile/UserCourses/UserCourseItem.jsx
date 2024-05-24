import '../../../../css/UserCourseItem.css';
import { Link } from '@inertiajs/react';

const UserCourseItem = ({ course }) => {
    const { id, title_course, level, progress, solved_tasks } = course;

    const truncateDescription = (title_course, length) => {
        return title_course.length > length ? title_course.substring(0, length) + '...' : title_course;
    };

    return (
        <Link href={`/passingcourse/${id}`} className='usercourseitem'>
            <div className='usercourseitem__info'>
                <h3 className='usercourseitem__title'>{truncateDescription(title_course, 18)}</h3>
                <p className='usercourseitem__text'>Уровень: <span className='color-blue'>{level ? level.name : 'Не указан'}</span></p>
            </div>
            <div className='usercourseitem__statistics'>
                <p className='usercourseitem__text'>Процент прохождения: <span className='color-blue'>{progress ?? '0'}%</span></p>
                <p className='usercourseitem__text'>Задач решено: {solved_tasks ?? 0}</p>
            </div>
        </Link>
    )
}

export default UserCourseItem;
