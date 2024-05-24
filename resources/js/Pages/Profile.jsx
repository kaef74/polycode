// Импортируем правильно
import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import UserInfo from '@/Components/Profile/UserInfo.jsx';
import UserActivity from '@/Components/Profile/UserActivity.jsx';
import UserCourses from '@/Components/Profile/UserCourses/UserCourses.jsx';
import UserStatistics from '@/Components/Profile/UserStatistics.jsx';
import '../../css/Profile.css';

export default function Profile({ auth, userCourses }) { // Принимаем только один объект props

    // Извлекаем user из auth
    const { user } = auth;

    return (
        <AuthenticatedLayout auth={auth}>
            <section className='profile'>
                <div className='profile__info'>
                    <UserInfo user={user}/>
                    <UserStatistics/>
                </div>
                <div className='profile__activity'>
                    <h1 className='profile__title'>Профиль пользователя <span className='font-bold'>{user.nickname}</span></h1>
                    <UserActivity/>
                    <UserCourses courses={userCourses}/>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
