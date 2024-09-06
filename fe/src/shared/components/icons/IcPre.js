import React from "react";

function IcPre(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ?? 30}
      height={props?.height ?? 30}
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
       
        d="M0 15c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15z"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M19.06 4.94a1.5 1.5 0 00-2.12 0l-9 9a1.5 1.5 0 000 2.12l9 9a1.5 1.5 0 002.12-2.12L11.122 15l7.94-7.94a1.5 1.5 0 000-2.12z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default IcPre;
