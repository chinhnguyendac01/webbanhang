import React from "react";

function IcArrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ?? 24}
      height={props?.height ?? 24}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={props?.color ?? "#0E0F3B"} 
        fillRule="evenodd"
        d="M11.293 1.293a1 1 0 011.414 0l10 10a1 1 0 010 1.414l-10 10a1 1 0 01-1.414-1.414L19.586 13H2a1 1 0 110-2h17.586l-8.293-8.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default IcArrow;
