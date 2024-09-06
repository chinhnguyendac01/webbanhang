import React from 'react';
import styles from './Value.module.scss';

function Value(props) {
    return (
        <div className={styles['value']}>
            <div className={styles['topic']}>
                {props.topic}
            </div>
            <div className={styles['value-image']}>
                <img src={`${process.env.REACT_APP_STORAGE_URL}${props?.image}`} ></img>
            </div>
            <div className={styles['content-wrapper']}>
                <div className={styles['text']}>
                    <div className={styles['title']}>{props.title}</div>
                    <div className={styles['content']}>
                        {props?.content?.map((item, index) => (
                            <div className={styles['item']} key={index}>{item}</div>
                        ))}
                    </div>
                </div>
                <div className={styles['image']}>
                    <img src={`${process.env.REACT_APP_STORAGE_URL}${props?.image}`}></img>
                </div>
            </div>
        </div>
    );
}

Value.defaultProps = {
    topic: ``,
    title: ``,
    content: []
}

export default Value;
