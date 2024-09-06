import React from 'react';
import styles from './HolonConcept.module.scss';
import conceptBg from 'assets/images/business-content/holon/concept-bg.png';

const HolonConcept = ({ props }) => {
    return (
        <div className={styles['holon-concept']} style={{ background: `url(${conceptBg})` }}>
            <div className='container w-100'>
                    <div className={styles['title']}>
                        {props?.title}
                    </div>
                    <div className={styles['desc']}>
                        <div style={{ padding: "0px", overflow: "unset" }} className="view ql-editor" dangerouslySetInnerHTML={{ __html: props?.content }} />
                    </div>
                    <div className={styles['image']}>
                        <img src={props?.image}></img>
                    </div>
            </div>
        </div>
    )
}

export default HolonConcept