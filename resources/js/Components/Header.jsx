import '../../css/Header.css';

import logo from '../../../public/storage/Images/logo_new.png';
import profile from '../../../public/storage/Icons/profile.png';
import exit from '../../../public/storage/Icons/exit.png';

import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';

export default function Header ({ auth }) {
    const [userStatus, setUserStatus] = useState(true);
    const [showBurger, setShowBurger] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const menu = document.querySelector('.header__profile-menu');
            const button = document.querySelector('.button.header__button');

            if (menu && !menu.contains(event.target) && !button.contains(event.target)) {
                setShowBurger(false);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <header className='header'>
            <div className='header__container'>
                <Link href="/">
                    <img src={logo} className='header__logo' alt="Логотип" />
                </Link>
                <ul className='header__navbar'>
                    <li className='navbar__item'>
                        <a href="#" className='navbar__link'>Главная</a>
                    </li>
                    <li className='navbar__item'>
                        <Link to="/education" className='navbar__link'>
                            Обучение
                        </Link>
                    </li>
                    <li className='navbar__item'>
                        <a href="#" className='navbar__link'>Таблица лидеров</a>
                    </li>
                    <li className='navbar__item'>
                        <a href="#" className='navbar__link'>Форум</a>
                    </li>
                    <li className='navbar__item'>
                        <Link to="compiler" className='navbar__link'>Компилятор</Link>
                    </li>
                </ul>
                {auth.user ? (
                    <>
                        <div className='header__profile'>
                            <div onClick={() => {setShowBurger(!showBurger)}} className='button header__button'>
                                Сергей М.
                            </div>
                            {showBurger && (
                                <ul className='header__profile-menu'>
                                    <li className='header__profile-item'>
                                        <img src={profile} className='header__profile-icon' alt="Иконка"/>
                                        <Link
                                            className="header__profile-link" onClick={() => {
                                            window.scrollTo(0,0);
                                            setShowBurger(!showBurger);
                                            }} href={route('profile')}
                                        >
                                            Профиль
                                        </Link>
                                    </li>
                                    <li className='header__profile-item'>
                                        <img src={exit} className='header__profile-icon' alt="Иконка" />
                                        <Link href={route('logout')} className='header__profile-link header__profile-button' method="post" as="button">
                                            Выход
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </>
                ) : (
                    <Link
                        href={route('auth')}
                        className='button header__button'
                    >
                        Вход / Регистрация
                    </Link>
                )}



            </div>
        </header>
    );
}

