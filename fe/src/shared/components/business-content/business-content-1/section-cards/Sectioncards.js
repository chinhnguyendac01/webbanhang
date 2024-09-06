import React from 'react'
import styles from './index.module.scss'


import Card from '../card/Card';
const SectionCards = ({ props }) => {
    return (
        <div className={styles['section-container']}>
            <div className={styles['title-container']}>
                <div className={styles['section-title']}>
                    {props?.title}
                </div>
                {/* <div className={styles['sub-title']}>
                    {props?.subTitle}
                </div> */}
            </div>
            <div className={styles['section-content']}>
                <div className={styles['content-text']}>
                    <div style={{ padding: "0px", overflow: "unset" }} className="view ql-editor" dangerouslySetInnerHTML={{ __html: props?.content }} />
                </div>
                <div className={`${styles['cards-list']}`}>
                    {Array.isArray(props?.cards) && props?.cards?.map((card, index) => (
                        <div key={index} className={styles['item']}>
                            <Card props={card} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
SectionCards.defaultProps = {
    props: {
        title: "",
        subTitle: "",
        content: "",
        cards: [

        ]
    }
}
export default SectionCards
