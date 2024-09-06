import React from 'react';

export default function Menu(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props?.width ?? 25}
            height={props?.height ?? 26}
            viewBox="0 0 25 26"
            fill="none"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.604 13C2.604 12.7123 2.83719 12.4792 3.12484 12.4792H21.8748C22.1625 12.4792 22.3957 12.7123 22.3957 13C22.3957 13.2876 22.1625 13.5208 21.8748 13.5208H3.12484C2.83719 13.5208 2.604 13.2876 2.604 13Z"
                fill={props?.color ?? "#0E0F3B"}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.604 6.74999C2.604 6.46234 2.83719 6.22916 3.12484 6.22916H21.8748C22.1625 6.22916 22.3957 6.46234 22.3957 6.74999C22.3957 7.03764 22.1625 7.27082 21.8748 7.27082H3.12484C2.83719 7.27082 2.604 7.03764 2.604 6.74999Z"
                fill={props?.color ?? "#0E0F3B"}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.604 19.25C2.604 18.9623 2.83719 18.7292 3.12484 18.7292H21.8748C22.1625 18.7292 22.3957 18.9623 22.3957 19.25C22.3957 19.5376 22.1625 19.7708 21.8748 19.7708H3.12484C2.83719 19.7708 2.604 19.5376 2.604 19.25Z"
                fill={props?.color ?? "#0E0F3B"}
            />
        </svg>
    );
}
