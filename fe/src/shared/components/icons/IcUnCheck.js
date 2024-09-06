import React from 'react';

export default function IcUnCheck(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props?.width ?? 15}
            height={props?.height ?? 15}
            viewBox="0 0 15 15"
            fill="none"
        >
            <rect width="15" height="15" fill="white" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.75 1.25H1.25V13.75H13.75V1.25ZM0 0V15H15V0H0Z"
                fill={props?.color ?? "#0E0F3B" }
            />
        </svg>
    );
}
