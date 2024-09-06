import React from 'react'

export default function IcUser(props) {
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
        d="M4.456 13.123A3.833 3.833 0 017.166 12h6.668a3.833 3.833 0 013.833 3.833V17.5a.5.5 0 11-1 0v-1.667A2.833 2.833 0 0013.833 13H7.168a2.833 2.833 0 00-2.833 2.833V17.5a.5.5 0 01-1 0v-1.667c0-1.016.403-1.991 1.122-2.71zM10.5 3a2.833 2.833 0 100 5.667A2.833 2.833 0 0010.5 3zM6.667 5.833a3.833 3.833 0 117.666 0 3.833 3.833 0 01-7.667 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
