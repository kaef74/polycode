import '../../../../css/SuggestedCourseItem.css';
import star from '../../../../../public/storage/Icons/star.png';
import { Link } from '@inertiajs/react';

const SuggestedCourseItem = ({ course }) => {
    const { id, title_course, level, rating } = course;

    const truncateDescription = (title_course, length) => {
        return title_course.length > length ? title_course.substring(0, length) + '...' : title_course;
    };

    return (
        <div className='suggestedcourseitem'>
            <div className='suggestedcourseitem__info'>
                <h3 className='suggestedcourseitem__title'>{truncateDescription(course.title_course, 30)}</h3>
                <p className='suggestedcourseitem__text'>Уровень: <span className='color-blue'>{level ? level.name : 'Не указан'}</span></p>
            </div>
            <div className='suggestedcourseitem__statistics'>
                <div className='suggestedcourseitem__rating'>
                    <img src={star} className='star' alt="Звезда" />
                    <p className='rating'>{rating}</p>
                </div>
                <Link href={route('courses.show', { id })} className='suggestedcourseitem__more'>
                    Подробнее
                </Link>
            </div>
        </div>
    );
};

export default SuggestedCourseItem;
