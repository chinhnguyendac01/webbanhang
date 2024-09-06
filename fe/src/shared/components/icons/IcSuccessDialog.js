import React from 'react'

export default function IcSuccessDialog(props) {
  return (
     <svg
     xmlns="http://www.w3.org/2000/svg"
     width={props?.width ?? "60"}
     height={props?.height ?? "60"}
     fill="none"
     viewBox="0 0 60 60"
   >
     <path
       fill={props?.color ?? "#fff"}
       fillRule="evenodd"
       d="M39.157 9.434A22.5 22.5 0 1052.5 29.999V27.7a2.5 2.5 0 015 0V30a27.504 27.504 0 01-19.703 26.357 27.5 27.5 0 113.396-51.49 2.5 2.5 0 01-2.035 4.567z"
       clipRule="evenodd"
     ></path>
     <path
       fill={props?.color ?? "#fff"}
       fillRule="evenodd"
       d="M56.767 8.231a2.5 2.5 0 01.002 3.536l-25 25.025a2.5 2.5 0 01-3.537 0l-7.5-7.5a2.5 2.5 0 013.536-3.535l5.731 5.732L53.231 8.233a2.5 2.5 0 013.536-.002z"
       clipRule="evenodd"
     ></path>
   </svg>
  )
}
