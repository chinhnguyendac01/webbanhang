import React from 'react';
import styles from './Modal.module.scss';

const Modal = (props) => {
    let videoUrl = props?.banner?.content?.video_url || props?.banner;
    if (videoUrl && !videoUrl.includes('youtube.com/embed')) {
        videoUrl = videoUrl.replace('youtube.com', 'youtube.com/embed');
    }
    let url = props.show ? videoUrl : '';

    return (
        <div>
            <div
                className={styles['modal-wrapper']}
                style={{
                    display: props.show ? 'block' : 'none',
                    opacity: props.show ? '1' : '0',
                }}
            >
                <div className={styles['modal-close']}>
                    <button className={styles['btn']} onClick={props.close}>
                        ×
                    </button>
                </div>
                <div className={styles['modal-body']}>
                    <iframe
                        className={styles['video-src']}
                        src={url}
                        allow="autoplay: encrypted-media"
                        title="video"
                        style={{
                            display: props.show ? 'block' : 'none',
                            opacity: props.show ? '1' : '0',
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Modal;
