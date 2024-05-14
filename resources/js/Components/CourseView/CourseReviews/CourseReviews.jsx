import '../../../../css/CourseReviews.css';
import Review from './Review.jsx';

const CourseReviews = ({id}) => {
    return (
        <div className='coursereviews'>
            <h2 className='coursereviews__title'>Отзывы прошедших курс</h2>
            <Review id={id} />
            <Review id={id} />
        </div>
    )
}

export default CourseReviews;
