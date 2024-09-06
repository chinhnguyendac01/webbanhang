import React, { useState, useRef, useEffect } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';
import './Editor.scss';
Quill.register('modules/imageResize', ImageResize);

const Editor = (props) => {
    const { editorHtml, setEditorHtml, onFocus, canEdit = true } = props;
    const reactQuillRef = useRef(null);

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }, { font: [] }],
            [{ size: [] }],

            [
                {
                    color: ['#000', '#FFF', '#FF8B13', '#07407B', '#0E0F3B'],
                },
                {
                    background: [
                        '#F00',
                        '#0F0',
                        '#00F',
                        '#000',
                        '#FFF',
                        '#FF8B13',
                        'color-picker',
                    ],
                },
            ],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
            ],
            [
                { align: '' },
                { align: 'center' },
                { align: 'right' },
                { align: 'justify' },
            ],
            ['link', 'image', 'video'],

            ['clean'],
        ],
        clipboard: {
            matchVisual: false,
        },
        imageResize: {
            parchment: Quill.import('parchment'),
            modules: ['Resize', 'DisplaySize'],
        },
        history: {
            delay: 500,
            maxStack: 100,
            userOnly: true,
        },
    };

    useEffect(() => {
        const editor = reactQuillRef.current?.getEditor();
        if (editor) {
            const observer = new MutationObserver((mutations) => {
                // Xử lý các biến đổi ở đây nếu cần
            });

            observer.observe(editor.root, {
                childList: true,
                subtree: true,
                attribute: true,
            });

            return () => {
                observer.disconnect();
            };
        }
    }, []);
    const handleChange = (html) => {
        setEditorHtml(html);
        // console.log(editorHtml);
    };

    return (
        <>
            <div className="custom-editor">
                <ReactQuill
                    ref={reactQuillRef}
                    theme="snow"
                    onChange={handleChange}
                    value={editorHtml}
                    modules={modules}
                    formats={Editor.formats}
                    bounds={'#root'}
                    placeholder="Start writing..."
                    onFocus={onFocus}
                    readOnly={!canEdit}
                />
            </div>
        </>
    );
};

Editor.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
    'color',
    'background',
    'align',
];
Editor.defaultProps = {
    onFocus: () => {},
};
export default Editor;
