import React from "react";

function IcLocation(props) {
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
        d="M12 2a8 8 0 00-8 8c0 3.098 2.016 6.104 4.226 8.437A29.419 29.419 0 0012 21.773a29.412 29.412 0 003.774-3.335C17.984 16.103 20 13.097 20 10a8 8 0 00-8-8zm0 21l-.555.832-.003-.002-.007-.005-.023-.015a28.518 28.518 0 01-1.441-1.074 31.428 31.428 0 01-3.197-2.923C4.484 17.396 2 13.902 2 10a10 10 0 0120 0c0 3.902-2.484 7.396-4.774 9.813a31.433 31.433 0 01-4.254 3.726 18.887 18.887 0 01-.384.27l-.023.016-.007.005-.002.001s-.001.001-.556-.831zm0 0l.555.832a1 1 0 01-1.11 0L12 23z"
        clipRule="evenodd"
      ></path>
      <path
        fill={props?.color ?? "#000"}
        fillRule="evenodd"
        d="M12 8a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default IcLocation;
