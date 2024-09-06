import React from 'react'
import styles from './index.module.scss'
const PageTitle = ({ title }) => {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['title']}>{title}</div>
            <div className={styles['line']}></div>
        </div>
    )
}
PageTitle.defaultProps = {
    title: ""
}
export default PageTitle
