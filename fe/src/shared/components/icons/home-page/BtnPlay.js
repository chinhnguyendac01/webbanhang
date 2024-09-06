import React from 'react';

function BtnPlay() {
    return (
        <svg
            width={62}
            height={62}
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_588_53480)">
                <circle
                    cx={31}
                    cy={27}
                    r={21}
                    transform="rotate(-90 31 27)"
                    fill="white"
                />
            </g>
            <path
                d="M38.0004 27L26.7504 16.6077V37.3923L38.0004 27Z"
                fill="#0E0F3B"
            />
            <defs>
                <filter
                    id="filter0_d_588_53480"
                    x={0}
                    y={0}
                    width={62}
                    height={62}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy={4} />
                    <feGaussianBlur stdDeviation={5} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 0.537255 0 0 0 0 0.0235294 0 0 0 0.4 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_588_53480"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_588_53480"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
}
export default BtnPlay;
