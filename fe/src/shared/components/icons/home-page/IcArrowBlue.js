import React from 'react';

function IcArrowBlue(props) {
    return (
        <svg
            width={props?.width ?? 40}
            height={props?.height ?? 41}
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_5606_3547)">
                <path
                    d="M20 38.7812L38.75 20.0312L27.5 20.0312L27.5 0.031249L12.5 0.0312477L12.5 20.0312L1.25 20.0312L20 38.7812Z"
                    fill="#07407B"
                />
            </g>
            <defs>
                <clipPath id="clip0_5606_3547">
                    <rect
                        width={40}
                        height={40}
                        fill="white"
                        transform="translate(40 40.0312) rotate(-180)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
}
export default IcArrowBlue;
