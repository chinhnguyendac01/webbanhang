import React from 'react';

function Icon(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props?.width ?? 30}
            height={props?.height ?? 30}
            fill="none"
            viewBox="0 0 30 30"
        >
            <path d="M30 15c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15z"></path>
            <path
                fill="#fff"
                fillRule="evenodd"
                d="M10.94 4.94a1.5 1.5 0 012.12 0l9 9a1.5 1.5 0 010 2.12l-9 9a1.5 1.5 0 01-2.12-2.12L18.878 15l-7.94-7.94a1.5 1.5 0 010-2.12z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

export default Icon;
