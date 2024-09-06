import React from 'react';

export default function IcJP(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props?.width ?? 24}
            height={props?.height ?? 18}
            fill="none"
            viewBox="0 0 24 18"
        >
            <g clipPath="url(#clip0_4236_11684)">
                <mask
                    id="mask0_4236_11684"
                    style={{ maskType: "luminance" }}
                    width="24"
                    height="18"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path fill="#fff" d="M0 0h24v18H0V0z"></path>
                </mask>
                <g mask="url(#mask0_4236_11684)">
                    <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M-1.5 0h27v18h-27V0z"
                        clipRule="evenodd"
                    ></path>
                    <path
                        fill="#BC002D"
                        d="M12.002 14.597a5.595 5.595 0 100-11.19 5.595 5.595 0 000 11.19z"
                    ></path>
                </g>
            </g>
            <rect
                width="23.7"
                height="17.7"
                x="0.15"
                y="0.15"
                stroke="#BBB"
                strokeWidth="0.3"
                rx="0.85"
            ></rect>
            <defs>
                <clipPath id="clip0_4236_11684">
                    <rect width="24" height="18" fill="#fff" rx="1"></rect>
                </clipPath>
            </defs>
        </svg>
    );
}
