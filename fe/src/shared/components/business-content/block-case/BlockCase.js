import React from 'react'
import styles from './BlockCase.module.scss'

export default function BlockCase(props) {
     const { colorboder = '#FF8B13', title, listItems } = props;
     
     return (
          <div className={styles['blockcase']} style={{border:`1px solid ${colorboder}`}}>
               <h1 className={styles['title']}> {title}</h1>
               <ul className={styles['ul-styles']}>
               {listItems?.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
               </ul>
          </div>
     )
}
