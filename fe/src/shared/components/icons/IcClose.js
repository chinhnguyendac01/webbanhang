import React from 'react';

export default function IcClose(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props?.width ?? 25}
            height={props?.width ?? 26}
            viewBox="0 0 25 26"
            fill="none"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.84005 5.34005C5.04345 5.13665 5.37322 5.13665 5.57662 5.34005L21.2016 20.965C21.405 21.1684 21.405 21.4982 21.2016 21.7016C20.9982 21.905 20.6684 21.905 20.465 21.7016L4.84005 6.07662C4.63665 5.87322 4.63665 5.54345 4.84005 5.34005Z"
                fill={props?.color ?? '#2EB9E6'}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.2016 5.34005C21.405 5.54345 21.405 5.87322 21.2016 6.07662L5.57662 21.7016C5.37322 21.905 5.04345 21.905 4.84005 21.7016C4.63665 21.4982 4.63665 21.1684 4.84005 20.965L20.465 5.34005C20.6684 5.13665 20.9982 5.13665 21.2016 5.34005Z"
                fill={props?.color ?? '#2EB9E6'}
            />
        </svg>
    );
}
