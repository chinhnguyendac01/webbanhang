import React from 'react'

const IcChervonRightBold = ({ width, height, color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || 31}
            height={height || 30}
            viewBox="0 0 31 30"
            fill="none"
        >
            <g clipPath="url(#clip0_3218_11482)">
                <path
                    d="M30.0352 14.9922L15.9727 0.929687L15.9727 9.36719L0.972656 9.36719L0.972655 20.6172L15.9727 20.6172L15.9727 29.0547L30.0352 14.9922Z"
                    fill={color || "#white"}
                />
            </g>
            <defs>
                <clipPath id="clip0_3218_11482">
                    <rect
                        width={30}
                        height={30}
                        fill="white"
                        transform="translate(30.9727 -0.0078125) rotate(90)"
                    />
                </clipPath>
            </defs>
        </svg>

    )
}

export default IcChervonRightBold
