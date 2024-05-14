import '../../../css/UserInfo.css';

import photo from '../../../../public/storage/Images/profile_photo.png';

import { Link } from '@inertiajs/react';

export default function UserInfo({ user }) {
    // Преобразуем строку ISO в объект Date
    const dateObject = new Date(user.created_at);

    // Форматируем дату в формате ДД.ММ.ГГГГ
    const registrationDateFormatted = [
        ('0' + dateObject.getDate()).slice(-2), // Добавляем ведущий ноль и берём последние два символа
        ('0' + (dateObject.getMonth() + 1)).slice(-2), // Месяцы начинаются с 0, добавляем 1
        dateObject.getFullYear() // Год
    ].join('.');

    return (
        <div className='userinfo'>
            <img src={photo} className='userinfo__photo' alt="Фотография" />
            <div className='userinfo__info'>
                <p className='userinfo__fullname'>{user.first_name + " " + user.last_name}</p>
                <p className='userinfo__date'>Дата регистрации: {registrationDateFormatted}</p>
            </div>
            <Link to="/editprofile" className="userinfo__button button">
                Редактировать
            </Link>
        </div>
    );
}

