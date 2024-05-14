import '../../../../css/SuggestedCourseItem.css';

import star from '../../../../../public/storage/Icons/star.png';

import { Link } from '@inertiajs/react';

const SuggestedCourseItem = ({id}) => {

    const title = "Основы Python";
    const level = "начинающий";
    const persentage = "55%";
    const solved_tasks = 11;

    return (
        <div className='suggestedcourseitem'>
            <div className='suggestedcourseitem__info'>
                <h3 className='suggestedcourseitem__title'>{title}</h3>
                <p className='suggestedcourseitem__text'>Уровень: <span className='color-blue'>{level}</span></p>
            </div>
            <div className='suggestedcourseitem__statistics'>
                <div className='suggestedcourseitem__rating'>
                    <img src={star} className='star' alt="Звезда" />
                    <p className='rating'>4.9</p>
                </div>
                <Link to={`/course/${id}`} className='suggestedcourseitem__more'>
                    Подробнее
                </Link>
            </div>
        </div>
    )
}

export default SuggestedCourseItem;
