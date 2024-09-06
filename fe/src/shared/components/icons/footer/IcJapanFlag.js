import React from 'react';

function IcJapanFlag() {
    return (
        <svg
            width={20}
            height={15}
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <mask
                id="mask0_1519_2606"
                style={{ maskType: 'luminance' }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={20}
                height={15}
            >
                <path d="M0 0.5H20V14.5H0V0.5Z" fill="white" />
            </mask>
            <g mask="url(#mask0_1519_2606)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M-1.25 0.5H21.25V14.5H-1.25V0.5Z"
                    fill="white"
                />
                <path
                    d="M10.0017 11.852C12.5768 11.852 14.6643 9.90363 14.6643 7.50021C14.6643 5.09679 12.5768 3.14844 10.0017 3.14844C7.4266 3.14844 5.33908 5.09679 5.33908 7.50021C5.33908 9.90363 7.4266 11.852 10.0017 11.852Z"
                    fill="#D30000"
                />
            </g>
        </svg>
    );
}
export default IcJapanFlag;
