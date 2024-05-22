import '../../../css/About.css';

import { Link } from '@inertiajs/react';

import photo from '../../../../public/storage/Images/about.png';

const About = () => {
    return (
        <div className='about'>
            <div className='about__container'>
                <div className='about__info'>
                    <h2 className='about__title'>Что такое <span className='color-blue'>ПОЛИКОД МИРЭА?</span></h2>
                    <p className='about__text'>
                    Мы - инновационная платформа с участием студентов от института РТУ МИРЭА, где вы можете углубить свои знания в программировании, участвовать в соревнованиях и компилировать код на различных языках программирования.
                    </p>
                    <Link href={route('education')} className="about__button button">Хочу обучаться</Link>
                </div>
                <img src={photo} className='about__photo' alt="Фото" />
            </div>
        </div>
    )
}

export default About;
