import '../../../css/EducationInfo.css';

import education_photo from '../../../../public/storage/Images/education.png';

const EducationInfo = () => {
    return (
        <div className='educationinfo'>
            <div className='educationinfo__info'>
            <h1 className='educationinfo__title'>Обучение в <span className='color-blue'>ПОЛИКОД МИРЭА</span></h1>
                <p className='educationinfo__text'>
                    Здесь вы найдете все необходимое для эффективного и интересного обучения программированию. Вот что мы предлагаем:
                </p>
                <ul className='educationinfo__list'>
                    <li className='educationinfo__item'>
                        <h3 className='educationinfo__item__title'>   1. Курсы по программированию</h3>
                        <p className='educationinfo__item__text'>Мы предлагаем широкий выбор курсов, охватывающих различные языки программирования, технологии и концепции. Независимо от вашего уровня подготовки, вы сможете найти подходящий курс для своего развития.</p>
                    </li>
                    <li className='educationinfo__item'>
                        <h3 className='educationinfo__item__title'>   2. Ежедневные задания</h3>
                        <p className='educationinfo__item__text'>Получайте ежедневные задания и задачи, помогающие вам постоянно улучшать свои навыки программирования. Регулярная практика — залог успешного освоения любого навыка.</p>
                    </li>
                    <li className='educationinfo__item'>
                        <h3 className='educationinfo__item__title'>   3. Еженедельный кейс</h3>
                        <p className='educationinfo__item__text'>Каждую неделю вы будете решать реальные кейсы из мира программирования. Это не только отличный способ применить ваши знания на практике, но и возможность участвовать в соревнованиях среди других студентов и проверить свои навыки.</p>
                    </li>
                </ul>
            </div>
            <img src={education_photo} className='educationinfo__photo' alt="Фото" />
        </div>
    )
}

export default EducationInfo;
