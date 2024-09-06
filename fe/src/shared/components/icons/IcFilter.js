import React from 'react'

export default function IcFilter(props) {
     return (
          <svg
               xmlns="http://www.w3.org/2000/svg"
               width={props?.width ?? 20}
               height={props?.height ?? 21}
               fill="none"
               viewBox="0 0 20 21"
          >
               <path
                    fill={props?.color ?? "#0E0F3B"}
                    d="M12.143 14.555a.714.714 0 110 1.428H7.857a.714.714 0 010-1.428h4.286zM15 10.269a.714.714 0 110 1.428H5a.714.714 0 110-1.428h10zm2.143-4.286a.715.715 0 010 1.429H2.857a.714.714 0 010-1.429h14.286z"
               ></path>
          </svg>
     )
}
