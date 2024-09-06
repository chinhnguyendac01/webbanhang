import React from 'react';

export default function IcRadioUnCheck(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props?.width ?? 20}
            height={props?.height ?? 20}
            fill="none"
            viewBox="0 0 21 20"
        >
            <g clipPath="url(#clip0_2326_3860)">
                <path
                    fill="#0E0F3B"
                    d="M10.5 0C4.977 0 .5 4.477.5 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18.77c-4.825 0-8.75-3.945-8.75-8.77 0-4.825 3.925-8.75 8.75-8.75s8.75 3.925 8.75 8.75-3.925 8.77-8.75 8.77z"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_2326_3860">
                    <path
                        fill="#fff"
                        d="M0 0H20V20H0z"
                        transform="translate(.5)"
                    ></path>
                </clipPath>
            </defs>
        </svg>
    );
}
