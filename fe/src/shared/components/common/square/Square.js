import React from 'react'
import styles from './Square.module.scss'
import Cirle from '../cirle/Cirle';
export default function Square(props) {
  const { children, cirles,width,height} = props;
  return (
    <div className={styles['square']} 
    style={{
      width: width,
      height: height
    }}>
      <div className={styles['children']}>
        {children}
      </div>
      <div className={styles['frame']}></div>
      {cirles?.map((item, index) => (
        <Cirle key={index} arttribute={item} />
      ))}

    </div>
  )
}
