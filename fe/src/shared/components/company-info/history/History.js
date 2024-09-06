import React from 'react';
import styles from './History.module.scss';

function History(props) {
    return (
        <div className={styles['History']}>
            <div className={styles['topic']}>{props.topic}</div>
            <div className={styles['content-wrapper']}>
                <img src={`${process.env.REACT_APP_STORAGE_URL}${props?.image}`}></img>
            </div>
        </div>
    );
}

History.defaultProps = {
    topic: ``
}

export default History;