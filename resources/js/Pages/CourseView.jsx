import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import React from 'react';
import CourseInfo from '../Components/CourseView/CourseInfo.jsx';
import CourseReviews from '../Components/CourseView/CourseReviews/CourseReviews.jsx';
import '../../css/CourseView.css';
import { usePage } from '@inertiajs/react';

export default function CourseView({ auth }) {
    // Использование usePage для доступа к параметрам, передаваемым сервером
    const { props } = usePage();
    const { course } = props;

    return (
        <AuthenticatedLayout auth={auth} >
            <section className='courseview'>
                <CourseInfo course={course} />
                <CourseReviews courseId={course.id} />
            </section>
        </AuthenticatedLayout>
    );
}
