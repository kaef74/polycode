import React from 'react';
import UserCourseItem from './UserCourseItem';
import '../../../../css/UserCourses.css';

const UserCourses = ({ courses }) => {

    return (
        <div className='usercourses'>
            <h2 className='usercourses__title'>Мои курсы</h2>
            <ul className='usercourses__list'>
                {courses.length > 0 ? (
                    courses.map(course => (
                        <UserCourseItem key={course.id} course={course} />
                    ))
                ) : (
                    <li>У вас еще нет курсов</li>
                )}
            </ul>
        </div>
    );
}

export default UserCourses;
