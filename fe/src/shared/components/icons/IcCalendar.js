import React from "react";

function IcCalendar(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ?? 24}
      height={props?.height ?? 24}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={props?.color ?? "#000"}
        fillRule="evenodd"
        d="M5 5a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1H5zM2 6a3 3 0 013-3h14a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V6z"
        clipRule="evenodd"
      ></path>
      <path
        fill={props?.color ?? "#000"}
        fillRule="evenodd"
        d="M16 1a1 1 0 011 1v4a1 1 0 11-2 0V2a1 1 0 011-1zM8 1a1 1 0 011 1v4a1 1 0 01-2 0V2a1 1 0 011-1zM2 10a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default IcCalendar;
