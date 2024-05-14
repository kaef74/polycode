import '../../css/PassingCourse.css';

import { useState } from 'react';

// import { useParams } from 'react-router-dom';

import {courses} from '../Help/Courses.js';
import SelectLanguage from '../Components/Compiler/SelectLanguage.jsx';
import CompilerField from '../Components/Compiler/CompilerField.jsx';

const PassingCourse = () => {

    const result1 = "ОК";
    const result2 = "WA";

    const [selectedLanguage, setSelectedLanguage] = useState("python");
    const [editorCode, setEditorCode] = useState("");

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    const handleRunCode = () => {
        console.log(editorCode);

    };

    /* ________________________ */

    const [currentTask, setCurrentTask] = useState(0);

    const {id} = useParams();

    const course = courses[id];
    const tasks = (course.tasks).map(task => task);

    return (
        <section className='passingcourse'>
            <div className='passingcourse__info'>
                <h1 className='passingcourse__title'>{course.title}</h1>
                <p className='passingcourse__statistics'>Прогресс курса: {course.solvedtasks} / {course.taskcount}</p>
                <ul className='passingcourse__tasklist'>

                        {(course.tasks).map(task => (
                            <li onClick={() => setCurrentTask(task.id)} className={`passingcourse__task ${currentTask == task.id ? 'current-task' : ''}`}>
                                {task.id == 0 && task.name}
                                {task.id != 0 && task.id + ". " + task.name}
                            </li>
                        ))}
                </ul>
            </div>
            <div className='passingcourse__content'>
                <div className='passingcourse__field'>
                    {currentTask === 0 ? (
                        <>
                            <h2 className='passingcourse__tasknumber'>{course.title}</h2>
                            <p className='passingcourse__text'>
                                {course.description}
                            </p>
                            <button onClick={() => setCurrentTask(currentTask + 1)} className='passingcourse__button button'>Приступим</button>
                        </>
                    ) :
                    <>
                        <h2 className='passingcourse__tasknumber'>Задание №{currentTask}</h2>
                        <p className='passingcourse__text'>
                                {(tasks[currentTask].text)}
                        </p>

                        <p className='passingcourse__block'>Входные данные</p>
                        <p className='passingcourse__input'>{tasks[currentTask].input}</p>

                        <p className='passingcourse__block'>Выходные данные</p>
                        <p className='passingcourse__input'>{tasks[currentTask].output}</p>

                        <p className='passingcourse__block'>Примечание</p>
                        <p className='passingcourse__input'>{tasks[currentTask].note}</p>

                        <div className='passingcourse__editor'>
                            <div className='passingcourse__editor-top'>
                                <SelectLanguage onSelectLanguage={handleLanguageChange}/>
                            </div>
                            <div className='passingcourse__editor-bottom'>
                                <CompilerField language={selectedLanguage} setEditorCode={setEditorCode}/>
                            </div>
                        </div>

                        <div className='passingcourse__buttons'>
                            <button className='passingcourse__button button'>Отправить</button>
                            <button onClick={() => setCurrentTask(currentTask + 1)} className='passingcourse__button button'>Следующее задание</button>
                        </div>
                    </>
                    }
                </div>

                <div className='passingcourse__sends'>
                    <h3 className='sends__title'>Мои посылки</h3>
                    {currentTask == 1 ? (
                         <table className="custom-table">
                         <thead>
                             <tr>
                                 <th className="center">Время посылки</th>
                                 <th className="center">Компилятор</th>
                                 <th className="center">Вердикт</th>
                                 <th className="center">Время</th>
                                 <th className="center">Память</th>
                                 <th className="center">Тесты</th>
                                 <th className="center">Баллы</th>
                                 <th className="center">Отчёт</th>
                             </tr>
                         </thead>
                         <tbody>
                             <tr className="with-line">
                                 <td className="center">11 сен. 2023, 21:51:55</td>
                                 <td className="center">Node.js</td>
                                 <td className={`center ${result1 == "ОК" ? 'color-blue' : 'color-red'}`}>OK</td>
                                 <td className="center">88ms</td>
                                 <td className="center">10.13Mb</td>
                                 <td className="center">1</td>
                                 <td className="center font-bold">100</td>
                                 <td className="center "><a className='color-blue' href="#">Посмотреть</a></td>
                             </tr>
                             <tr className="with-line">
                                 <td className="center">11 сен. 2023, 21:51:55</td>
                                 <td className="center">Node.js</td>
                                 <td className={`center ${result2 == "ОК" ? 'color-blue' : 'color-red'}`}>WA</td>
                                 <td className="center">88ms</td>
                                 <td className="center">10.13Mb</td>
                                 <td className="center">-</td>
                                 <td className="center font-bold">0</td>
                                 <td className="center "><a className='color-blue' href="#">Посмотреть</a></td>
                             </tr>
                         </tbody>
                     </table>
                    ) :
                    <p>Посылок нет :(</p>
                    }

                </div>
            </div>
        </section>
    )
}

export default PassingCourse;
