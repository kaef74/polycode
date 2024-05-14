import '../../../css/AboutCourses.css';

import { Link } from '@inertiajs/react';

import photo from '../../../../public/storage/Images/aboutcourses.png';

const AboutCourses = () => {
    return (
        <div className='aboutcourses'>
            <div className='aboutcourses__container'>
                <div className='aboutcourses__info'>
                    <h2 className='aboutcourses__title'>Прохождение <span className='color-blue'>курсов</span></h2>
                    <p className='aboutcourses__text'>
                    На нашем сайте представлены разнообразные курсы по программированию. Эти курсы охватывают широкий спектр тем, начиная с основных концепций программирования и заканчивая продвинутыми техниками разработки программного обеспечения.
                    </p>
                    <p className='aboutcourses__text'>
                    Участники могут выбирать курсы, соответствующие их уровню подготовки и интересам, и изучать материалы в удобном для них темпе.
                    </p>
                    <Link to="/coursecatalog" onClick={() => {window.scrollTo(0,0)}} className="aboutcourses__button button">Каталог курсов</Link>
                </div>
                <img src={photo} className='aboutcourses__photo' alt="Фото" />
            </div>
        </div>
    )
}

export default AboutCourses;
