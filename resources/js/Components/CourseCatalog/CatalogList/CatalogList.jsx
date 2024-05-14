import '../../../../css/CatalogList.css';

import search from '../../../../../public/storage/Icons/search.png';
import CatalogListItem from './CatalogListItem.jsx';

const CatalogList = () => {
    return (
        <div className='cataloglist'>
            <div className='cataloglist__search'>
                <img src={search} className='cataloglist__icon' alt="Поиск" />
                <input className='cataloglist__input' placeholder='Поиск..' />
            </div>
            <ul className='cataloglist__list'>
                <CatalogListItem id={1}/>
                <CatalogListItem id={1}/>
                <CatalogListItem id={1}/>
                <CatalogListItem id={1}/>
                <CatalogListItem id={1}/>
                <CatalogListItem id={1}/>
                <CatalogListItem id={1}/>
                <CatalogListItem id={1}/>
                <CatalogListItem id={1}/>
            </ul>
        </div>
    )
}

export default CatalogList;
