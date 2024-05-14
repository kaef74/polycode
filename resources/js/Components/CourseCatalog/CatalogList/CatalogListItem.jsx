import '../../../../css/CatalogListItem.css';

import star from '../../../../../public/storage/Icons/star.png';

import { Link } from '@inertiajs/react';

const CatalogListItem = ({id}) => {
    return (
        <div className='cataloglistitem'>
            <div className='cataloglistitem__info'>
                <Link href={route('course-id')} className='cataloglistitem__title'>Основы Python</Link>
                <p className='cataloglistitem__text'>Уровень: <span className='color-blue'>начинающий</span></p>
                <p className='cataloglistitem__text'>Курс включает в себя разнообразные практические задачи по программированию, которые помогут улучшить ваш уровень программирования на Python.</p>
            </div>
            <div className='cataloglistitem__right'>
                <div className='cataloglistitem__rating'>
                    <img src={star} className='star' alt="Звезда" />
                    <p>4.6</p>
                </div>
                <Link to={`/course/${id}`} className="cataloglistitem__more">Подробнее</Link>
            </div>
        </div>
    )
}

export default CatalogListItem;
