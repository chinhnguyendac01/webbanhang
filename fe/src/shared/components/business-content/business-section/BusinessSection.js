import React from 'react'
import styles from './BusinessSection.module.scss'
import "react-quill/dist/quill.core.css";

const BusinessSection = ({ data, sectionImg, imageLeft = true }) => {
    return (
        <div className={`${styles['section-container']}`}
        >

            {Array.isArray(data) ? (
                <div className={styles['block-text']}>
                    <div className={styles['block-text-content']}>
                        {Array.isArray(data) && data?.map((item, idx) => (
                            <div key={idx} className={styles['item']}>
                                {item}
                            </div>
                        ))
                        }
                    </div>
                </div>
            ) : (
                <div className={styles['block_right_2']}>
                    <div style={{ padding: "0px", overflow: "unset" }} className="view ql-editor" dangerouslySetInnerHTML={{ __html: data }} />
                </div>
            )}
            <div className={styles['block-image']}>
                <img src={sectionImg}></img>
            </div>
        </div>
    )
}
BusinessSection.defaultProps = {
    data: [
    ],
    sectionImg: ""
}
export default BusinessSection
