import React from 'react'
import styles from './index.module.scss'
import IcChervonRightBold from 'shared/components/icons/holon/IcChervonRightBold'
import IcChervonDownBold from 'shared/components/icons/holon/IcChervonDownBold'
const BlockTop = ({ textLeft, textRight, className = "" }) => {
    return (
        <div
            className=
            {`${styles['block']} ${styles['block-orange']} ${className}`}
        >
            <span className={styles['block-left']}> {textLeft}</span>
            <div className={styles['icon-right']}>
                <IcChervonRightBold color={"#FFF"} />
            </div>
            <div className={styles['icon-down']}>
                <IcChervonDownBold width={24} height={24} color={"#FFF"} />
            </div>
            <span className={styles['text-block']}> {textRight}</span>
        </div >
    )
}

export default BlockTop
