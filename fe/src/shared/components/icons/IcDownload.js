import React from 'react'

export default function IcDownload(props) {
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
       d="M3 14.5a.5.5 0 01.5.5v4A1.5 1.5 0 005 20.5h14a1.5 1.5 0 001.5-1.5v-4a.5.5 0 011 0v4a2.5 2.5 0 01-2.5 2.5H5A2.5 2.5 0 012.5 19v-4a.5.5 0 01.5-.5z"
       clipRule="evenodd"
     ></path>
     <path
       fill={props?.color ?? "#000"}
       fillRule="evenodd"
       d="M6.646 9.646a.5.5 0 01.708 0L12 14.293l4.646-4.647a.5.5 0 01.708.708l-5 5a.5.5 0 01-.708 0l-5-5a.5.5 0 010-.708z"
       clipRule="evenodd"
     ></path>
     <path
       fill={props?.color ?? "#000"}
       fillRule="evenodd"
       d="M12 2.5a.5.5 0 01.5.5v12a.5.5 0 01-1 0V3a.5.5 0 01.5-.5z"
       clipRule="evenodd"
     ></path>
   </svg>
  )
}
