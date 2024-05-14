import '../../../css/CourseInfo.css';

import star from '../../../../public/storage/Icons/star.png';
import halfstar from '../../../../public/storage/Icons/halfstar.png';

const CourseInfo = ({id}) => {

    const rating = 4.6;

    const isIntegerRating = Number.isInteger(rating);

    const starsArray = [];
    const fullStars = isIntegerRating ? rating : Math.floor(rating);
    const hasHalfStar = !isIntegerRating && rating - Math.floor(rating) !== 0;

    for (let i = 0; i < fullStars; i++) {
        starsArray.push(<img key={i} src={star} className='star' alt='Звезда' />);
    }


    if (hasHalfStar) {
        starsArray.push(<img key="half" src={halfstar} className='star' alt='Половина звезды' />);
    }

    return (
        <div className='courseinfo'>
            <h1 className='courseinfo__title'>Основы Python</h1>
            <div className='courseinfo__rating'>
                {starsArray.map(star => star)}
                <p className='text-800'>{rating}</p>
            </div>
            <p className='courseinfo__description'>
            Отличное введение в мир программирования для тех, кто только начинает свой путь в этой области. Python - мощный инструмент с простым и понятным синтаксисом, и этот курс поможет вам освоить его базовые концепции и возможности. Независимо от вашего уровня подготовки, вы сможете легко усвоить материал благодаря понятным объяснениям и практическим заданиям. После завершения курса вы будете готовы к более продвинутым темам и проектам в области программирования на Python.
            </p>
            <p className='courseinfo__people'>
                Данный курс уже прошли: 157 человек(а)
            </p>
            <div className='courseinfo__info'>
                <div className='courseinfo__block'>20 ЗАДАЧ</div>
                <div className='courseinfo__block'>6 ЧАСОВ</div>
            </div>
            <div className='courseinfo__buttons'>
                <button className='courseinfo__button button'>Поступить на курс</button>
                <button className='courseinfo__button button-reverse'>Хочу пройти</button>
            </div>
        </div>
    )
}

export default CourseInfo;
