import '../../css/Footer.css';

import logo from '../../../public/storage/Images/logo.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <ul className='footer__columns'>
                <li className='footer__column'>
                    <a href="#">
                        <img src={logo} className='header__logo' alt="Логотип" />
                    </a>
                    <p className='copyright'>
                        © 2024 Поликод МИРЭА
                        Все права защищены
                    </p>
                </li>
                <li className='footer__column'>
                    <p className='footer__title'>Компания</p>
                    <a href="#" className='footer__link'>О нас</a>
                    <a href="#" className='footer__link'>Свяжитесь с нами</a>
                </li>
                <li className='footer__column'>
                    <p className='footer__title'>Поддержка</p>
                    <a href="#" className='footer__link'>Политика конфиденциальности</a>
                    <a href="#" className='footer__link'>Пользовательское соглашение</a>
                    <a href="#" className='footer__link'>Правила сервиса</a>
                </li>
                <li className='footer__column'>
                    <p className='footer__title'>Позвоните нам</p>
                    <a href="#" className='footer__link'>+7 (999) 929 28-79</a>
                    <p className='footer__title'>Напишите нам</p>
                    <a href="#" className='footer__link'>polycode@gmail.com</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;
