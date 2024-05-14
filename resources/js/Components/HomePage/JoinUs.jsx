import '../../../css/JoinUs.css';

import { Link } from '@inertiajs/react';;

const JoinUs = () => {
    return (
        <div className='joinus'>
            <h2 className='joinus__title'>Готовы присоединиться <span className='color-blue'>к нам</span>?</h2>
            <p className='joinus__text'>
            Присоединяйтесь к нашему сообществу прямо сейчас и начните свой путь к освоению мира программирования. Наши курсы, соревнования и инструменты помогут вам расширить ваши знания, развить навыки и поднять ваш уровень владения языками программирования.
            </p>
            <Link to="/login" onClick={() => {window.scrollTo(0,0)}} className='joinus__button button'>Присоединиться</Link>
        </div>
    )
}

export default JoinUs;
