import '../../../css/InputOutput.css';

const InputOutput = () => {
    return (
        <div className='inputoutput'>
            <textarea className='inputoutput__input' placeholder='Входные данные для программы'/>
            <textarea className='inputoutput__output' readOnly placeholder='Выполните код, чтобы получить выходные данные'/>
        </div>
    )
}

export default InputOutput;
