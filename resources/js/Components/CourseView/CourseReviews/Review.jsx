import '../../../../css/Review.css';

import star from '../../../../../public/storage/Icons/star.png';
import halfstar from '../../../../../public/storage/Icons/halfstar.png';

import like from '../../../../../public/storage/Icons/like.png';

const Review = ({id}) => {
    const rating = 5.0;

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
        <div className="review">
            <div className='review__info'>
                <div className='review__info-user'>
                    <p className='review__info-name'>Мякотных Сергей</p>
                    <p className='review__info-date'>04.07.2024</p>
                </div>
                <div className='review__info-rating'>
                        {starsArray.map(star => star)}
                        <p className='rating'>{rating}</p>
                </div>
                <p className='review__text'>
                Отличный курс! Автор поработал на славу! Подробно рассмотрены все основные темы HTML / CSS. Материал изложен понятно и интересно. Пройденную теорию можно закрепить разнообразными тестами и заданиями. Над частью из них придется «попотеть». Понравилось, что автор дает ссылки на другие полезные источники, чтобы можно было углубиться в изучение темы.
                </p>
                <div className='review__marks'>
                    <div className='review__mark'>
                        <img src={like} className='review__like' alt="Нравится"/>
                        <p>7</p>
                    </div>
                    <div className='review__mark'>
                        <p>1</p>
                        <img src={like} className='review__dislike' alt="Не нравится"/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review;
