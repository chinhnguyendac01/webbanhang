import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './SuggestionBanner.module.scss';
import defaultImage from 'assets/images/default_image.png'
import Sections from 'utils/Sections';

function SuggestionBanner() {
    const { sectionData } = useSelector(state => state.HomePage)
    const [banner, setBanner] = useState(null);
    useEffect(() => {
        if (sectionData?.data) {
            const rawData = sectionData?.data?.items?.find(item => item.name === Sections.top.suggestion_banner)
            const data = {
                ...rawData,
                path: rawData?.path ? `${process.env.REACT_APP_STORAGE_URL}${rawData.path}` : ""
            }
            setBanner(data);
        }
    }, [sectionData])
    return (
        <>
            <div
                className={styles['SuggestionBanner']}
                style={{ backgroundImage: `url(${banner?.path || defaultImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
            >
                <div className={'w-100 container'}>
                    <div className={styles['title']}>
                        {banner?.title}
                    </div>
                    <div className={styles['text']}>
                        <div style={{ padding: "0px", overflow: "unset" }} className="view ql-editor" dangerouslySetInnerHTML={{ __html: banner?.content }} />
                    </div>
                </div>
            </div>
            <div className={styles['mobile-banner']}>
                <div className={styles['mobile-image']}>
                    <img src={banner?.path}></img>
                </div>
                <div className={'w-100 container'}>
                    <div className={styles['mobile-title']}>
                        {banner?.title}
                    </div>
                    <div className={styles['mobile-text']}>
                        <div style={{ padding: "0px", overflow: "unset" }} className="view ql-editor" dangerouslySetInnerHTML={{ __html: banner?.content }} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SuggestionBanner;