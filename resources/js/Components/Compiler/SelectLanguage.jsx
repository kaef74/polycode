import React, { useState } from 'react';
import '../../../css/SelectLanguage.css';

const SelectLanguage = ({ onSelectLanguage }) => {
    const arrowIcon = '/storage/Icons/arrow.svg';

    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("Python 3.12.1");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const selectLanguage = (language) => {
        let languageCode;
        switch (language) {
            case "Python 3.12.1":
                languageCode = "python";
                break;
            case "Node.js 18.16.0":
                languageCode = "javascript";
                break;
            case "Java 17 (Temurin JDK)":
                languageCode = "java";
                break;
            case "GNU GCC 13.1 C++20":
                languageCode = "cpp";
                break;
            default:
                languageCode = language.toLowerCase().replace(/\s+/g, '-');
                break;
        }
        setSelectedLanguage(language);
        onSelectLanguage(languageCode);
        setIsOpen(false);
    };

    return (
        <div className='selectlanguage'>
            <p className='selectlanguage__text'>Язык</p>
            <div className='selectlanguage__box' onClick={toggleMenu}>
                <p className='selectlanguage__language'>{selectedLanguage}</p>
                <img src={arrowIcon} className={`selectlanguage__icon ${isOpen ? 'open' : ''}`} alt="Arrow Icon"/>
                {isOpen && (
                    <div className="selectlanguage__menu">
                        <ul className="selectlanguage__menu-list">
                            <li className="selectlanguage__menu-item"
                                onClick={() => selectLanguage("Python 3.12.1")}>Python 3.12.1
                            </li>
                            <li className="selectlanguage__menu-item"
                                onClick={() => selectLanguage("GNU GCC 13.1 C++20")}>GNU GCC 13.1 C++20
                            </li>
                            <li className="selectlanguage__menu-item"
                                onClick={() => selectLanguage("Node.js 18.16.0")}>Node.js 18.16.0
                            </li>
                            <li className="selectlanguage__menu-item"
                                onClick={() => selectLanguage("Java 17 (Temurin JDK)")}>Java 17 (Temurin JDK)
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SelectLanguage;
