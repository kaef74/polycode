import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import CompilerField from '../Components/Compiler/CompilerField.jsx';
import SelectLanguage from '../Components/Compiler/SelectLanguage.jsx';
import '../../css/DailyChallenge.css';

import { useState } from 'react';

export default function DailyChallengePage ({ auth }) {

    const [selectedLanguage, setSelectedLanguage] = useState("python");
    const [editorCode, setEditorCode] = useState("");

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    const handleRunCode = () => {
        console.log(editorCode);

    };

    return (
        <AuthenticatedLayout auth={auth}>
        <section className='dailychallengepage'>
            <h1 className='dailychallengepage__title'>Ежедневное задание</h1>
            <div className='dailychallengepage__tags'>
                <div className='tag'>#JS</div>
                <div className='tag'>#JAVASCRIPT</div>
            </div>
            <p className='dailychallengepage__level'>Уровень: <span className='color-blue'>начинающий</span></p>
            <p className='dailychallengepage__time'>Осталось времени: 12 ч. 25 мин.</p>

            <div className='dailychallengepage__field'>
                <h2 className='dailychallengepage__name'>Задание</h2>
                <p className='dailychallengepage__task'>Разработать функцию-калькулятор на языке JavaScript, способную обрабатывать математические выражения, содержащие операции сложения, вычитания, умножения, деления, а также скобки. Функция должна принимать строку, представляющую математическое выражение, и возвращать результат его вычисления. Допускаются выражения с использованием вещественных чисел.</p>
                <h3 className='dailychallengepage__block'>Входные данные</h3>
                <p className='dailychallengepage__input'>10*(7/3.5)</p>
                <h3 className='dailychallengepage__block'>Выходные данные</h3>
                <p className='dailychallengepage__input'>20</p>
                <h3 className='dailychallengepage__block'>Примечание</h3>
                <p className='dailychallengepage__input'>Программа принимает на вход строку-выражение и выводит результат вычислений</p>

                <div className='dailychallengepage__editor'>
                    <div className='dailychallengepage__editor-top'>
                        <SelectLanguage onSelectLanguage={handleLanguageChange}/>
                    </div>
                    <div className='dailychallengepage__editor-bottom'>
                        <CompilerField language={selectedLanguage} setEditorCode={setEditorCode}/>
                        <div className='dailychallengepage__button button'>Отправить</div>
                    </div>
                </div>




            </div>
        </section>
        </AuthenticatedLayout>
    )
}
