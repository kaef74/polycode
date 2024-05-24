import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Filters from '../Components/CourseCatalog/Filters';
import CatalogList from '../Components/CourseCatalog/CatalogList/CatalogList';
import '../../css/CourseCatalog.css';

const CourseCatalog = ({ auth, courses, levels, languages }) => {
    const [filteredCourses, setFilteredCourses] = useState(courses);

    const handleFilterChange = (filters) => {
        let filtered = courses;

        if (filters.levels.length > 0) {
            filtered = filtered.filter((course) =>
                filters.levels.includes(course.level.name)
            );
        }

        if (filters.languages.length > 0) {
            filtered = filtered.filter((course) =>
                (course.languages || []).some((language) =>
                    filters.languages.includes(language.name)
                )
            );
        }

        setFilteredCourses(filtered);
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <section className='coursecatalog'>
                <Filters levels={levels} languages={languages} onFilterChange={handleFilterChange} />
                <CatalogList courses={filteredCourses} />
            </section>
        </AuthenticatedLayout>
    );
};

export default CourseCatalog;
