import React from 'react';

function IcBell (props) {
    return (
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ?? 25 }
      height={props?.height ?? 25 }
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.571 24.286c-.952 1.428-2.142 2.143-3.571 2.143-1.429 0-2.619-.715-3.571-2.143m10.835-2.143H7.736a2.358 2.358 0 01-2.022-3.572 15.037 15.037 0 002.143-7.735v-1.55a5.714 5.714 0 015.714-5.715h2.858a5.714 5.714 0 015.714 5.715v1.55c0 2.724.74 5.4 2.143 7.735a2.357 2.357 0 01-2.022 3.572z"
      ></path>
    </svg>


    )
}
export default IcBell;