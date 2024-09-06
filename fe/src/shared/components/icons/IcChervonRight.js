import React from 'react'

const IcChervonRight = ({ props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props?.width || 20}
            height={props?.height || 20}
            viewBox="0 0 20 20"
            fill="none"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.41087 1.07757C9.73631 0.752135 10.2639 0.752138 10.5894 1.07758L18.9225 9.41081C19.2479 9.73624 19.2479 10.2639 18.9225 10.5893L10.5894 18.9227C10.264 19.2482 9.73632 19.2482 9.41087 18.9228C9.08543 18.5973 9.08542 18.0697 9.41085 17.7442L16.3215 10.8334H1.66659C1.20635 10.8334 0.833252 10.4603 0.833252 10.0001C0.833252 9.53982 1.20635 9.16673 1.66659 9.16673H16.3214L9.41086 2.25608C9.08543 1.93064 9.08543 1.40301 9.41087 1.07757Z"
                fill={props?.color || "white"}
            />
        </svg>

    )
}

export default IcChervonRight
