import React from 'react'

export default function IcLogout(props) {
  return (
     <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ?? 16}
      height={props?.height ?? 16}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill={props?.color ?? "#0E0F3B"}
        fillRule="evenodd"
        d="M4.063 2.688a.937.937 0 00-.937.937v8.75a.937.937 0 00.937.938h2.5a.312.312 0 110 .624h-2.5a1.563 1.563 0 01-1.562-1.562v-8.75a1.562 1.562 0 011.562-1.563h2.5a.312.312 0 110 .626h-2.5zM10.717 4.654a.312.312 0 01.442 0l3.125 3.125a.313.313 0 010 .442l-3.125 3.125a.313.313 0 01-.442-.442L13.621 8l-2.904-2.904a.312.312 0 010-.442z"
        clipRule="evenodd"
      ></path>
      <path
        fill={props?.color ?? "#0E0F3B"}
        fillRule="evenodd"
        d="M6.25 8c0-.173.14-.313.313-.313h7.5a.312.312 0 110 .625h-7.5A.312.312 0 016.251 8z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
