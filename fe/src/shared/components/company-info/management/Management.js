import React from 'react';
import styles from './Management.module.scss';

function Management(props) {
    return (
        <div className={styles['Management']}>
            <div className={styles['topic']}>{props.topic}</div>
            {props?.target?.length ?
                (
                    <>
                        <div className={styles['intro']}>{props.intro}</div>
                        <div className={styles['target']}>
                            {props?.target?.map((item, index) => (
                                <div key={index}>
                                    <div className={styles['title']}>{item.title}</div>
                                    <div className={styles['content']}>{item.content}</div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <div style={{ padding: "0px", overflow: "unset" }} className="view ql-editor" dangerouslySetInnerHTML={{ __html: props?.text }} />
                    </>
                )}
        </div>
    );
}

Management.defaultProps = {
    topic: ``,
    intro: ``,
    target: [],
    text: "",
};

export default Management;