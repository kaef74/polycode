import React from 'react';
import '../../../../css/CatalogListItem.css';
import star from '../../../../../public/storage/Icons/star.png';
import { Link } from "@inertiajs/react";

const CatalogListItem = ({ course }) => {
    const truncateDescription = (description, length) => {
        return description.length > length ? description.substring(0, length) + '...' : description;
    };

    return (
        <div className='cataloglistitem'>
            <div className='cataloglistitem__info'>
                <Link href={route('courses.show', { id: course.id })} className='cataloglistitem__title'>{course.title_course}</Link>
                <p className='cataloglistitem__text'>Уровень: <span className='color-blue'>{course.level ? course.level.name : 'Не указан'}</span></p>
                <p className='cataloglistitem__text'>{truncateDescription(course.description_course, 100)}</p>
            </div>
            <div className='cataloglistitem__right'>
                <div className='cataloglistitem__rating'>
                    <img src={star} className='star' alt="Звезда" />
                    <p>{course.rating}</p>
                </div>
                <Link href={route('courses.show', { id: course.id })} className="cataloglistitem__more">Подробнее</Link>
            </div>
        </div>
    );
};

export default CatalogListItem;
