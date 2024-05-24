import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Filters from '../Components/CourseCatalog/Filters';
import CatalogList from '../Components/CourseCatalog/CatalogList/CatalogList';
import '../../css/CourseCatalog.css';

const CourseCatalog = ({ auth, courses }) => {
    return (
        <AuthenticatedLayout auth={auth}>
            <section className='coursecatalog'>
                <Filters />
                <CatalogList courses={courses} />
            </section>
        </AuthenticatedLayout>
    );
};

export default CourseCatalog;
