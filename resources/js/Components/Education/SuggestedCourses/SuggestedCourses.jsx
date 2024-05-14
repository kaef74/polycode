import UserCourseItem from '../../Profile/UserCourses/UserCourseItem.jsx';
import SuggestedCourseItem from './SuggestedCourseItem.jsx';
import '../../../../css/SuggestedCourses.css';

import { Link } from '@inertiajs/react';


const SuggestedCourses = () => {
    return (
        <div className='suggestedcourses'>
            <div className='suggestedcourses__top'>
                <h2 className='suggestedcourses__title'>ПРЕДЛОЖЕННЫЕ КУРСЫ</h2>
                <Link to="/coursecatalog" className='suggestedcourses__button'>ВСЕ КУРСЫ</Link>
            </div>

            <ul className='suggestedcourses__list'>
                <SuggestedCourseItem id={1}/>
                <SuggestedCourseItem id={1}/>
                <SuggestedCourseItem id={1}/>
            </ul>
        </div>
    )
}

export default SuggestedCourses;
