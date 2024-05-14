import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import '../../css/Compiler.css';
import CompilerField from '../Components/Compiler/CompilerField.jsx';
import SelectLanguage from '../Components/Compiler/SelectLanguage.jsx';
import InputOutput from '../Components/Compiler/InputOutput.jsx';

export default function Compiler ({ auth }) {
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
        <section className='compiler'>
            <h1 className='compiler__title'>Компилятор</h1>
            <p className='compiler__text'>На нашей платформе вы можете быстро и легко компилировать код на различных языках программирования прямо в вашем браузере. Просто введите код, выберите язык и получите результаты.</p>
            <div className='compiler__field'>
                <div className='compiler__top'>
                    <SelectLanguage onSelectLanguage={handleLanguageChange} />
                    <button className='compiler__button button' onClick={handleRunCode}>Запустить код</button>
                </div>
                <div className='compiler__bottom'>
                    <CompilerField language={selectedLanguage} setEditorCode={setEditorCode} />
                    <InputOutput />
                </div>
            </div>
        </section>
        </AuthenticatedLayout>
    )
}
