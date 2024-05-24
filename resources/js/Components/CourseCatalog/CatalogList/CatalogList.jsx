import React from 'react';
import '../../../../css/CatalogList.css';
import search from '../../../../../public/storage/Icons/search.png';
import CatalogListItem from './CatalogListItem';

const CatalogList = ({ courses }) => {
    return (
        <div className='cataloglist'>
            <div className='cataloglist__search'>
                <img src={search} className='cataloglist__icon' alt="Поиск" />
                <input className='cataloglist__input' placeholder='Поиск..' />
            </div>
            <ul className='cataloglist__list'>
                {courses.map(course => (
                    <CatalogListItem key={course.id} course={course} />
                ))}
            </ul>
        </div>
    );
};

export default CatalogList;
