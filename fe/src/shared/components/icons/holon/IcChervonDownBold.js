import React from 'react'

const IcChervonDownBold = ({ width, height, color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || 51}
            height={height || 50}
            viewBox="0 0 51 50"
            fill="none"
        >
            <g clipPath="url(#clip0_3218_11525)">
                <path
                    d="M25.749 48.4297L49.1865 24.9922L35.124 24.9922L35.124 -0.00781373L16.374 -0.00781537L16.374 24.9922L2.31153 24.9922L25.749 48.4297Z"
                    fill={color || "#FF8B13"}
                />
            </g>
            <defs>
                <clipPath id="clip0_3218_11525">
                    <rect
                        width={50}
                        height={50}
                        fill="white"
                        transform="translate(50.749 49.9922) rotate(-180)"
                    />
                </clipPath>
            </defs>
        </svg>

    )
}

export default IcChervonDownBold
