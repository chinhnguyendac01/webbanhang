import React from 'react';

export default function IcContact(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props?.width ?? 20}
            height={props?.height ?? 20}
            fill="none"
            viewBox="0 0 20 20"
        >
            <path
                fill={props?.color ?? "#0E0F3B"}
                fillRule="evenodd"
                d="M3.437 4.167c-.632 0-1.145.513-1.145 1.146v9.375c0 .632.513 1.145 1.145 1.145h13.125c.633 0 1.146-.513 1.146-1.146V5.313c0-.633-.513-1.146-1.146-1.146H3.437zM1.458 5.313a1.98 1.98 0 011.98-1.98h13.124a1.98 1.98 0 011.98 1.98v9.375a1.98 1.98 0 01-1.98 1.979H3.437a1.98 1.98 0 01-1.979-1.98V5.313z"
                clipRule="evenodd"
            ></path>
            <path
                fill={props?.color ?? "#0E0F3B"}
                fillRule="evenodd"
                d="M4.046 5.994a.417.417 0 01.585-.073L10 10.097l5.37-4.176a.417.417 0 11.51.658l-5.624 4.375a.417.417 0 01-.512 0L4.12 6.579a.417.417 0 01-.073-.585z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
