import React from 'react'
import styles from './Cirle.module.scss'
import Constants from 'utils/Constants'
export default function Cirle(props) {
  const { size, color , top, left , right , bottom ,zIndex} = props?.arttribute
  
  return (
    <div className={styles['circle']}
      style={{
        width: size ?? '12px',
        height: size ?? '12px',
        background: color ?? "#5FC7FF",
        top: top ?? '0',
        left: left ?? '0',
        right: right ?? '0',
        bottom: bottom ?? '0',
        zIndex : zIndex ?? Constants.Position.ON
      }}
    ></div>
  )
}
