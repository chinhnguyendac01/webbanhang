import React from 'react';

export default function IcProject(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props?.width ?? 20}
            height={props?.height ?? 20}
            fill="none"
            viewBox="0 0 20 20"
        >
            <g clipPath="url(#clip0_3472_5044)">
                <path
                    fill={props?.color ?? "#0E0F3B"}
                    d="M20 4.871L10 .703 0 4.871 10 9.04l10-4.168zm-10 5.832l-5.66-2.64L0 9.87l10 4.168 10-4.168-4.34-1.809L10 10.704zm0 5l-5.453-2.726L0 14.87l10 4.168 10-4.168-4.547-1.894L10 15.703z"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_3472_5044">
                    <path fill="#fff" d="M0 0H20V20H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}
