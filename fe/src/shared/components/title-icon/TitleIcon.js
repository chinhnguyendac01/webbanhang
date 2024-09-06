import React from 'react'
import IcTitle from '../icons/IcTitle'
import styles from './TitleIcon.module.scss'
const TitleIcon = ({ text }) => {
    const textArray = text.split(' ')
    return (
        <div className={styles['title']}>
            <span className={styles['title-icon']}>
                <IcTitle classname={styles['icon']} />
            </span>
            <span className={styles['title-text']}>
                {textArray?.map((txt, idx) => (
                    <span key={idx} className={`${styles['text-color']}`}>{txt}&nbsp;</span>
                ))}
            </span>
        </div>
    )
}
TitleIcon.defaultProps = {
    text: ""
}
export default TitleIcon
