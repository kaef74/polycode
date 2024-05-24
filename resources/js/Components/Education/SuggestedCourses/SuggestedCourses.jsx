import React from 'react';
import '../../../../css/SuggestedCourses.css';
import SuggestedCourseItem from './SuggestedCourseItem.jsx';
import { Link } from '@inertiajs/react';

const SuggestedCourses = ({ courses }) => {


    return (
        <div className='suggestedcourses'>
            <div className='suggestedcourses__top'>
                <h2 className='suggestedcourses__title'>ПРЕДЛОЖЕННЫЕ КУРСЫ</h2>
                <Link href={route('courses.index')} className='suggestedcourses__button'>ВСЕ КУРСЫ</Link>
            </div>
            <ul className='suggestedcourses__list'>
                {courses.map(course => (
                    <SuggestedCourseItem key={course.id} course={course} />
                ))}
            </ul>
        </div>
    );
};

export default SuggestedCourses;
