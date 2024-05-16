import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import CompilerField from '../Components/Compiler/CompilerField.jsx';
import SelectLanguage from '../Components/Compiler/SelectLanguage.jsx';
import '../../css/DailyChallenge.css';

import { useState, useEffect } from 'react';

export default function DailyChallengePage({ auth, daily}) {
    const [selectedLanguage, setSelectedLanguage] = useState(daily ? daily.language.name : "");
    const [editorCode, setEditorCode] = useState("");
    const [timeLeftFormatted, setTimeLeftFormatted] = useState("");

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    const handleRunCode = () => {
        console.log(editorCode);
    };

    const calculateTimeLeft = () => {
        const now = new Date();
        const midnight = new Date(now);
        midnight.setHours(24, 0, 0, 0);
        const diff = midnight - now;
        const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeftFormatted(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <AuthenticatedLayout auth={auth}>
            <section className='dailychallengepage'>
                <h1 className='dailychallengepage__title'>Ежедневное задание</h1>
                {daily ? (
                    <>
                        <div className='dailychallengepage__tags'>
                            <div className='tag'>#{daily.language.name.toUpperCase()}</div>
                        </div>
                        <p className='dailychallengepage__level'>Уровень: <span
                            className='color-blue'>{daily.level}</span></p>
                        <p className='dailychallengepage__time'>Осталось времени: {timeLeftFormatted}</p>

                        <div className='dailychallengepage__field'>
                            <h2 className='dailychallengepage__name'>Задание</h2>
                            <p className='dailychallengepage__task'>{daily.description}</p>
                            <h3 className='dailychallengepage__block'>Входные данные</h3>
                            <p className='dailychallengepage__input'>{daily.input_example}</p>
                            <h3 className='dailychallengepage__block'>Выходные данные</h3>
                            <p className='dailychallengepage__input'>{daily.output_example}</p>
                            <h3 className='dailychallengepage__block'>Примечание</h3>
                            <p className='dailychallengepage__input'>{daily.note}</p>

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
                    </>
                ) : (
                    <p>Сегодня задание не назначено.</p>
                )}
            </section>
        </AuthenticatedLayout>
    );
}
