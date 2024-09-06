import React from 'react';

export default function IcCheck(props) {
    return (
        <svg
            width={props?.width ?? 15}
            height={props?.height ?? 15}
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.8333 1.66667H2.16667V18.3333H18.8333V1.66667ZM0.5 0V20H20.5V0H0.5Z"
                fill="#FF8B13"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.7646 5.25321C18.085 5.58362 18.0769 6.11119 17.7465 6.43158L9.15271 14.7649C8.82948 15.0784 8.31571 15.0784 7.99247 14.7649L4.08622 10.977C3.75582 10.6566 3.7477 10.1291 4.06809 9.79867C4.38848 9.46826 4.91606 9.46015 5.24646 9.78054L8.57259 13.0059L16.5862 5.23508C16.9166 4.91469 17.4442 4.92281 17.7646 5.25321Z"
                fill={props?.color ?? '#FF8B13'}
            />
        </svg>
    );
}
