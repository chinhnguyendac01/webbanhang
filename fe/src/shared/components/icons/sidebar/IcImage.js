import React from "react";

function IcImage(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ?? 17}
      height={props?.height ?? 17}
      fill="none"
      viewBox="0 0 15 16"
    >
      <path
        fill={props?.color ?? "#0E0F3B"}
        fillRule="evenodd"
        d="M2.738 1.833a1.405 1.405 0 00-1.405 1.405v9.524a1.405 1.405 0 001.405 1.405h9.524a1.405 1.405 0 001.405-1.405V3.238a1.405 1.405 0 00-1.405-1.405H2.738zm-1.7-.295a2.405 2.405 0 011.7-.705h9.524a2.405 2.405 0 012.405 2.405v9.524a2.405 2.405 0 01-2.405 2.405H2.738a2.405 2.405 0 01-2.405-2.405V3.238c0-.638.254-1.25.705-1.7z"
        clipRule="evenodd"
      ></path>
      <path
        fill={props?.color ?? "#0E0F3B"}
        fillRule="evenodd"
        d="M3.337 5.742a.5.5 0 01.707 0l4.402 4.402 2.51-2.498a.5.5 0 01.707 0l2.857 2.858a.5.5 0 11-.707.707l-2.504-2.505-2.156 2.145 3.462 3.462a.5.5 0 01-.707.707L3.69 6.802 1.187 9.306a.5.5 0 11-.707-.707l2.857-2.857z"
        clipRule="evenodd"
      ></path>
      <path
        fill={props?.color ?? "#0E0F3B"}
        d="M10.833 5.62a.952.952 0 100-1.906.952.952 0 000 1.905z"
      ></path>
    </svg>
  );
}

export default IcImage;
