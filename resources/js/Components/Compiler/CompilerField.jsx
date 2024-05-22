import React from 'react';
import '../../../css/CompilerField.css';
import { Editor } from '@monaco-editor/react';

const CompilerField = ({ language, setEditorCode }) => {

    const handleEditorChange = (value, event) => {
        setEditorCode(value);
    };

    return (
        <>
        <div className='compilerfield'>
             <Editor
                language={language}
                defaultValue={`// Начните писать ваш код здесь...`}
                theme="vs"
                onChange={handleEditorChange}
                options={{
                    fontSize: 14,
                    fontFamily: 'Menlo, Monaco, "Courier New", monospace',
                    lineNumbers: "on",
                    wordWrap: "on",
                    scrollBeyondLastLine: false,
                    cursorSmoothCaretAnimation: true,
                    minimap: { enabled: false }
                }}
            />

        </div>
        </>
    );
};

export default CompilerField;
