import { AllHTMLAttributes } from 'react';
import ReactQuill from 'react-quill';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import clsx from 'clsx';

interface EditorContainerProps extends AllHTMLAttributes<HTMLDivElement> {}

export default function EditorContainer({ className }: EditorContainerProps) {
    const [sketch, setSketch] = useState<string>(
        '<p>Please input your new post.</p>'
    );

    return (
        <div
            id="editor-container"
            className={clsx(className, 'flex flex-col gap-6 pt-16 pb-32')}>
            <input
                className="w-full border border-gray-300 h-10 outline-none px-4 font-medium text-sm text-gray-800"
                type="text"
                id="title-editor"
                placeholder="Title"
            />
            <ReactQuill
                className="border-gray-400 h-72 text-gray-700"
                theme="snow"
                value={sketch}
                onChange={setSketch}
            />
        </div>
    );
}
