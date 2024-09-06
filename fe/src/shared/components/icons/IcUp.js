import React from 'react';

export default function IcUp(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props?.width ?? 36}
            height={props?.height ?? 37}
            fill="none"
            viewBox="0 0 36 37"
        >
            <path
                stroke="#0E0F3B"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 14l9 9 9-9"
            ></path>
        </svg>
    );
}
