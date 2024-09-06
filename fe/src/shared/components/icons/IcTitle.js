import React from 'react'

const IcTitle = ({ width, height, classname }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            // width={width}
            // height={height}
            className={classname}
            viewBox="0 0 55 54"
            fill="none"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 12C1.34315 12 0 13.3431 0 15V51C0 52.6569 1.34315 54 3 54H22V38C22 36.3431 23.3431 35 25 35H42V15C42 13.3431 40.6569 12 39 12H3Z"
                fill="url(#paint0_linear_73_2888)"
            />
            <rect
                x={29}
                y={1}
                width={25}
                height={25}
                rx={2}
                stroke="url(#paint1_linear_73_2888)"
                strokeWidth={2}
            />
            <defs>
                <linearGradient
                    id="paint0_linear_73_2888"
                    x1={21}
                    y1={12}
                    x2={21}
                    y2={54}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F5453A" />
                    <stop offset="0.53125" stopColor="#F9A931" />
                    <stop offset={1} stopColor="#FFE454" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_73_2888"
                    x1="41.5"
                    y1={0}
                    x2="41.5"
                    y2={27}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F5453A" />
                    <stop offset="0.53125" stopColor="#F9A931" />
                    <stop offset={1} stopColor="#FFE454" />
                </linearGradient>
            </defs>
        </svg>

    )
}
IcTitle.defaultProps = {
    classname: '',
    width: 55,
    height: 54,
}
export default IcTitle
