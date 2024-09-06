import React from 'react';

export default function IcChevronDown(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props?.width ?? 24}
            height={props?.height ?? 25}
            viewBox="0 0 24 25"
            fill="none"
        >
            <path
                d="M18 15.5L12 9.5L6 15.5"
                stroke="#FF8B13"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
