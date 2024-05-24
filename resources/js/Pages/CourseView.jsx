import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import CourseInfo from '../Components/CourseView/CourseInfo.jsx';
import CourseReviews from '../Components/CourseView/CourseReviews/CourseReviews.jsx';
import '../../css/CourseView.css';

const CourseView = ({ auth, course, isEnrolled }) => {
    return (
        <AuthenticatedLayout auth={auth}>
            <section className='courseview'>
                <CourseInfo course={course} isEnrolled={isEnrolled} />
                <CourseReviews course={course} />
            </section>
        </AuthenticatedLayout>
    );
};

export default CourseView;
