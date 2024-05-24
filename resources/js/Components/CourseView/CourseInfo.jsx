import React from 'react';
import { useForm } from '@inertiajs/react';
import '../../../css/CourseInfo.css';
import star from '../../../../public/storage/Icons/star.png';
import halfstar from '../../../../public/storage/Icons/halfstar.png';

const CourseInfo = ({ course, isEnrolled }) => {
    const { title_course, description_course, rating, tasks, time_spent, users_count, level } = course;

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

    const { post } = useForm();

    const handleEnroll = () => {
        post(`/courses/${course.id}/enroll`, {
            onSuccess: () => alert('Вы успешно записались на курс!'),
            onError: () => alert('Произошла ошибка при записи на курс!')
        });
    }

    return (
        <div className='courseinfo'>
            <h1 className='courseinfo__title'>{title_course}</h1>
            <div className='courseinfo__rating'>
                {starsArray.map((star, index) => <span key={index}>{star}</span>)}
                <p className='text-800'>{rating}</p>
            </div>
            <p className='courseinfo__description'>{description_course}</p>
            <p className='courseinfo__people'>На курс записались: {users_count} человек(а)</p>
            <div className='courseinfo__info'>
                <div className='courseinfo__block'>{tasks.length} ЗАДАЧ</div>
                <div className='courseinfo__block'>{time_spent} ЧАСОВ</div>
            </div>
            <div className='courseinfo__buttons'>
                {isEnrolled ? (
                    <button className='courseinfo__button button'>Вы уже записаны на этот курс</button>
                ) : (
                    <button className='courseinfo__button button' onClick={handleEnroll}>Поступить на курс</button>
                )}
                <button className='courseinfo__button button-reverse'>Хочу пройти</button>
            </div>
        </div>
    );
}

export default CourseInfo;
