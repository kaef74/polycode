import React, { useState, useEffect } from 'react';
import '../../../css/Filters.css';

const Filters = ({ levels, languages, onFilterChange }) => {
    const [selectedLevels, setSelectedLevels] = useState([]);
    const [selectedLanguages, setSelectedLanguages] = useState([]);

    const handleLevelChange = (event) => {
        const value = event.target.value;
        setSelectedLevels((prevLevels) =>
            prevLevels.includes(value)
                ? prevLevels.filter((level) => level !== value)
                : [...prevLevels, value]
        );
    };

    const handleLanguageChange = (event) => {
        const value = event.target.value;
        setSelectedLanguages((prevLanguages) =>
            prevLanguages.includes(value)
                ? prevLanguages.filter((language) => language !== value)
                : [...prevLanguages, value]
        );
    };

    useEffect(() => {
        onFilterChange({ levels: selectedLevels, languages: selectedLanguages });
    }, [selectedLevels, selectedLanguages]);

    return (
        <div className='filters'>
            <h1 className='filters__title'>Фильтры</h1>
            <div className='filters__block'>
                <h3 className='filters__name'>Уровень курса:</h3>
                <ul className='filters__list'>
                    {levels.map((level) => (
                        <li className='filters__item' key={level.id}>
                            <input
                                type="checkbox"
                                className='checkbox'
                                value={level.name}
                                onChange={handleLevelChange}
                            />
                            <p>{level.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='filters__block'>
                <h3 className='filters__name'>Предпочитаемые языки:</h3>
                <ul className='filters__list'>
                    {languages.map((language) => (
                        <li className='filters__item' key={language.id}>
                            <input
                                type="checkbox"
                                className='checkbox'
                                value={language.name}
                                onChange={handleLanguageChange}
                            />
                            <p>{language.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Filters;
