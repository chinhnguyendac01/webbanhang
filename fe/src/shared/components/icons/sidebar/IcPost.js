import React from 'react'

export default function IcPost(props) {
  return (
     <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ?? 20}
      height={props?.height ?? 20}
      fill="none"
      viewBox="0 0 21 20"
    >
      <path
        fill={props?.color ?? "#414042"}
        d="M5.5 6.5A.5.5 0 016 6h7a.5.5 0 010 1H6a.5.5 0 01-.5-.5zM11 9a.5.5 0 000 1h2a.5.5 0 000-1h-2zm-.5 3.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zM6 9a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3A.5.5 0 009 9H6zm.5 3v-2h2v2h-2zm-4-7a2 2 0 012-2h10a2 2 0 012 2v1a2 2 0 012 2v5.5A2.5 2.5 0 0116 16H5a2.5 2.5 0 01-2.5-2.5V5zm13 0a1 1 0 00-1-1h-10a1 1 0 00-1 1v8.5A1.5 1.5 0 005 15h11a1.5 1.5 0 001.5-1.5V8a1 1 0 00-1-1v6.5a.5.5 0 01-1 0V5z"
      ></path>
    </svg>
  )
}
