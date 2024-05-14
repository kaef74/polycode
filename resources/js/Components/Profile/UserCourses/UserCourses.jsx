import React from 'react';
import UserCourseItem from './UserCourseItem';
import '../../../../css/UserCourses.css';
import { usePage } from '@inertiajs/react';

const UserCourses = () => {
    // Получение props, переданных сервером
    const { props } = usePage();
    const { id } = props;

    return (
        <div className='usercourses'>
            <h2 className='usercourses__title'>Мои курсы</h2>
            <ul className='usercourses__list'>
                {/* Пример использования id для демонстрации. Здесь можно генерировать реальные данные. */}
                <UserCourseItem id={id}/>
                <UserCourseItem id={id}/>
                <UserCourseItem id={id}/>
                <UserCourseItem id={id}/>
                <UserCourseItem id={id}/>
                <UserCourseItem id={id}/>
                <UserCourseItem id={id}/>
            </ul>
        </div>
    );
}

export default UserCourses;
