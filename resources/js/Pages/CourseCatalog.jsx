import CatalogList from '../Components/CourseCatalog/CatalogList/CatalogList.jsx';
import Filters from '../Components/CourseCatalog/Filters.jsx';
import '../../css/CourseCatalog.css';

const CourseCatalog = () => {
    return (
        <section className='coursecatalog'>
            <Filters />
            <CatalogList />
        </section>
    )
}

export default CourseCatalog;
