import React from 'react'
import styles from './index.module.scss'
import "react-quill/dist/quill.core.css";

const OverviewBlock = ({ data, sectionImg, }) => {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['block-image']}>
                <img src={sectionImg}></img>
            </div>
            <div className={styles['block-content']}>
                <div style={{ padding: "0px", overflow: "unset" }} className="view ql-editor" dangerouslySetInnerHTML={{ __html: data }} />
            </div>
        </div>
    )
}

export default OverviewBlock
