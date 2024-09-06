import React from "react";

function IcDashboard(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ?? 20}
      height={props?.height ?? 20}
      fill="none"
      viewBox="0 0 21 20"
    >
      <path
        fill={props?.color ?? "#0E0F3B"}
        fillRule="evenodd"
        d="M10.244 1.338a.417.417 0 01.512 0l7.5 5.833c.101.079.16.2.16.329v9.167a2.083 2.083 0 01-2.083 2.083H4.667a2.083 2.083 0 01-2.084-2.083V7.5c0-.129.06-.25.161-.329l7.5-5.833zM3.417 7.704v8.963a1.25 1.25 0 001.25 1.25h11.666a1.25 1.25 0 001.25-1.25V7.704L10.5 2.194l-7.083 5.51z"
        clipRule="evenodd"
      ></path>
      <path
        fill={props?.color ?? "#0E0F3B"}
        fillRule="evenodd"
        d="M7.583 10c0-.23.187-.417.417-.417h5c.23 0 .417.187.417.417v8.333a.417.417 0 01-.834 0v-7.916H8.417v7.916a.417.417 0 01-.834 0V10z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default IcDashboard;
