import React from 'react';
import styles from './Greeting.module.scss';
import defaultImage from 'assets/images/default_image.png'
function Greeting(props) {
    let formattedText = null;

    if (props?.content) {
        const textSegments = props?.content?.split('\n');
        formattedText = textSegments?.map((segment, index) => (
            <React.Fragment key={index}>
                {segment}
                {index < textSegments?.length - 1 && <br />}
            </React.Fragment>
        ));
    }

    return (
        <div className={styles['greeting']}>
            <div className={styles['title']}>
                {props.title}
            </div>
            <div className={styles['content']}>
                <div className={styles['text']}>
                    {/* {formattedText} */}
                    <div style={{ padding: "0px", overflow: "unset" }} className="view ql-editor" dangerouslySetInnerHTML={{ __html: props?.content }} />
                </div>
                <div className={styles['blank']}></div>
                <div className={styles['image']}>
                    <img src={props?.image || defaultImage}></img>
                </div>
            </div>
        </div>
    );
}

Greeting.defaultProps = {
    title: ``,
    content: ``,
}

export default Greeting;