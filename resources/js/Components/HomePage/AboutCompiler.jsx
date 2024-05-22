import '../../../css/AboutCompiler.css';

import { Link } from '@inertiajs/react';

import photo from '../../../../public/storage/Images/aboutcompiler.png';

const AboutCompiler = () => {

    return (
        <div className='aboutcompiler'>
            <div className='aboutcompiler__container'>
                <img src={photo} className='aboutcompiler__photo' alt="Фото" />
                <div className='aboutcompiler__info'>
                    <h2 className='aboutcompiler__title'>Собственный <span className='color-blue'>компилятор</span></h2>
                    <p className='aboutcompiler__text'>
                    На нашем сайте есть собственный компилятор, который позволяет пользователям писать, отлаживать и выполнять свой код прямо в веб-браузере.
                    </p>
                    <p className='abotucompiler__text'>
                    Этот инструмент обеспечивает удобство и эффективность в процессе программирования, а также устраняет необходимость установки и настройки дополнительного программного обеспечения на компьютере.
                    </p>
                    <Link href={route('compiler')} className="aboutcompiler__button button-reverse">Начать кодить</Link>
                </div>
            </div>
        </div>
    )
}

export default AboutCompiler;
