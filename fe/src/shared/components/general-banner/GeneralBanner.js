import React from 'react';

import styles from './GeneralBanner.module.scss';
import IconInfo from '../icons/ai-solution/IconInfo';
import { useHistory } from 'react-router-dom';
function GeneralBanner(props) {
    const history = useHistory();
    const { title, text, imgURL, infoPage, isIconInfo = false, loading } = props;
    // let formattedText = null;

    // if (text) {
    //     const textSegments = text.split('\n');
    //     formattedText = textSegments.map((segment, index) => (
    //         <React.Fragment key={index}>
    //             {segment}
    //             {index < textSegments.length - 1 && <br />}
    //         </React.Fragment>
    //     ));
    // }

    return (
        <div className={styles['Banner']}>
            <div
                className={`${styles['GeneralBanner']} ${text ? styles['text-GeneralBanner'] : ''}`}
                style={{ backgroundImage: `url(${imgURL})`, backgroundSize: 'cover' }}
            >
                <div className={`w-100 container ${styles['banner-content']}`}>
                    <div className={styles['title']}>
                        {title}

                        {!loading && isIconInfo && (
                            <div className={styles['icon-info']} onClick={() => {
                                 history.push('/question-answer#ai');
                            }}  >              
                                    <IconInfo />                              
                            </div>  
                        )}

                    </div>
                    <div className={styles['text']}>
                        {/* {formattedText} */}
                        <div style={{ padding: "0px", overflow: "unset" }} className="view ql-editor" dangerouslySetInnerHTML={{ __html: text }} />
                    </div>
                </div>
                <div className={styles['Styles_banner']}></div>
            </div>
            {text ? (
                <div className={styles['text-banner-mobile']}>
                    <div className={'w-100 container'}>
                        <div className={styles['text-banner-title']}>
                            {title}
                        </div>
                        <div className={infoPage ? styles['text-banner-infoPage'] : styles['text-banner-text']}>
                            {/* {formattedText} */}
                            <div style={{ padding: "0px", overflow: "unset" }} className="view ql-editor" dangerouslySetInnerHTML={{ __html: text }} />
                        </div>
                    </div>
                    <div className={styles['text-banner-image']}>
                        <img src={imgURL} />
                    </div>
                </div>
            ) : null}

        </div>
    );
}

export default GeneralBanner;