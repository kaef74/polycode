import '../../css/PassingCourse.css';
import { useState } from 'react';
import { usePage } from '@inertiajs/react';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SelectLanguage from '../Components/Compiler/SelectLanguage.jsx';
import CompilerField from '../Components/Compiler/CompilerField.jsx';

const PassingCourse = ({ auth }) => {
    const { course } = usePage().props;
    const [currentTask, setCurrentTask] = useState(0);
    const [selectedLanguage, setSelectedLanguage] = useState("python");
    const [editorCode, setEditorCode] = useState("");
    const [completedTasks, setCompletedTasks] = useState([]);

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    const handleRunCode = () => {
        console.log(editorCode);
    };

    const handleCompleteTask = async (taskId) => {
        try {
            const response = await axios.post(`/tasks/${taskId}/complete`);
            setCompletedTasks([...completedTasks, taskId]);
            alert('Задание выполнено!');
        } catch (error) {
            alert('Произошла ошибка при выполнении задания.');
        }
    };

    const tasks = [{ id: 0, title_task: course.title_course, task: course.description_course, input_example: '', output_example: '', note_task: '' }, ...course.tasks];

    return (
        <AuthenticatedLayout auth={auth}>
            <section className='passingcourse'>
                <div className='passingcourse__info'>
                    <h1 className='passingcourse__title'>{course.title_course}</h1>
                    <p className='passingcourse__statistics'>Прогресс курса: {completedTasks.length} / {tasks.length - 1}</p>
                    <ul className='passingcourse__tasklist'>
                        {tasks.slice(0, 6).map((task, index) => (
                            <li key={task.id} onClick={() => setCurrentTask(index)} className={`passingcourse__task ${currentTask === index ? 'current-task' : ''}`}>
                                {index === 0 ? task.title_task : `${index}. ${task.title_task}`}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='passingcourse__content'>
                    <div className='passingcourse__field'>
                        {currentTask === 0 ? (
                            <>
                                <h2 className='passingcourse__tasknumber'>{course.title_course}</h2>
                                <p className='passingcourse__text'>{course.description_course}</p>
                                <button onClick={() => setCurrentTask(currentTask + 1)} className='passingcourse__button button'>Приступим</button>
                            </>
                        ) : (
                            <>
                                <h2 className='passingcourse__tasknumber'>Задание №{currentTask}</h2>
                                <p className='passingcourse__text'>{tasks[currentTask].task}</p>
                                <p className='passingcourse__block'>Входные данные</p>
                                <p className='passingcourse__input'>{tasks[currentTask].input_example}</p>
                                <p className='passingcourse__block'>Выходные данные</p>
                                <p className='passingcourse__input'>{tasks[currentTask].output_example}</p>
                                <p className='passingcourse__block'>Примечание</p>
                                <p className='passingcourse__input'>{tasks[currentTask].note_task}</p>
                                <div className='passingcourse__editor'>
                                    <div className='passingcourse__editor-top'>
                                        <SelectLanguage onSelectLanguage={handleLanguageChange} />
                                    </div>
                                    <div className='passingcourse__editor-bottom'>
                                        <CompilerField language={selectedLanguage} setEditorCode={setEditorCode} />
                                    </div>
                                </div>
                                <div className='passingcourse__buttons'>
                                    {completedTasks.includes(tasks[currentTask].id) ? (
                                        <>
                                            <p className='passingcourse__button button'>Вы выполнили задание</p>
                                            <button onClick={() => setCurrentTask(currentTask + 1)}
                                                    className='passingcourse__button button'>Следующее задание
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button className='passingcourse__button button'
                                                    onClick={handleRunCode}>Отправить
                                            </button>
                                            <button onClick={() => setCurrentTask(currentTask + 1)}
                                                    className='passingcourse__button button'>Следующее задание
                                            </button>
                                            <button onClick={() => handleCompleteTask(tasks[currentTask].id)}
                                                    className='passingcourse__button button'>Завершить задание
                                            </button>
                                        </>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                    <div className='passingcourse__sends'>
                        <h3 className='sends__title'>Мои посылки</h3>
                        <p>Посылок нет :(</p>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
};

export default PassingCourse;
