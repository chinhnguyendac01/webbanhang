import React from 'react';
import { useState } from 'react';
import BtnPlay from 'shared/components/icons/home-page/BtnPlay';
import styles from './HomePageBanner.module.scss';
import { useTranslation } from 'react-i18next';
// import Bg from 'assets/images/homepage-bg.png';

import Modal from 'shared/components/home-page/modal/Modal';
import BannerSlider from './banner-slider/BannerSlider';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Sections from 'utils/Sections';
function HomePageBanner() {
    const { t } = useTranslation();
    const { sectionData } = useSelector((state) => state.HomePage);
    const [banner, setBanner] = useState(null);
    const topText = 'TEAMWORK OF PROFESSIONALS';
    const loopText = 'LOOP IT TOGETHER';
    useEffect(() => {
        if (sectionData?.data) {
            const rawData = sectionData?.data?.items?.find(
                (item) => item.name === Sections.top.banner,
            );
            const data = {
                ...rawData,
                path: rawData?.path
                    ? `${process.env.REACT_APP_STORAGE_URL}${rawData.path}`
                    : '',
            };
            setBanner(data);
        }
    }, [sectionData]);

    const topTextArray = topText.split(' ');
    const loopWords = loopText.split(' ');
    const firstWord = loopWords[0];

    // modal
    const [isShowing, setIsShowing] = useState(false);
    const openModalHandler = () => {
        setIsShowing(true);
    };
    const closeModalHandler = () => {
        setIsShowing(false);
    };

    return (
        <div className={styles['home-page-banner']}>
            <div
                className={styles['banner']}
                // style={{backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
            >
                <div className={'w-100 container'}>
                    <div className={styles['content']}>
                        <div className={styles['question']}>
                            <div
                                style={{ padding: '0px', overflowY: 'unset' }}
                                className="view ql-editor"
                                dangerouslySetInnerHTML={{
                                    __html: banner?.content?.question,
                                }}
                            />
                        </div>
                        <div className={styles['important-text']}>
                            <div className={styles['top-text']}>
                                {topTextArray.map((line, index) => (
                                    <div key={index}>
                                        <div>
                                            <span>{line[0]}</span>
                                            {line.slice(1)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={styles['loop-text']}>
                                <span>{firstWord}</span>{' '}
                                {loopWords.slice(1).join(' ')}
                            </div>
                        </div>
                        <div className={styles['intro']}>
                            <div
                                style={{ padding: '0px' }}
                                className="view ql-editor"
                                dangerouslySetInnerHTML={{
                                    __html: banner?.content?.intro,
                                }}
                            />
                        </div>
                        <div className={styles['btn-learnmore']}>
                            <span className={styles['btn-text']}>
                                {t('home.learnMore')}
                            </span>
                            <span
                                className={styles['btn-play']}
                                onClick={openModalHandler}
                            >
                                <BtnPlay />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['banner-slider']}>
                <BannerSlider />
            </div>
            <div className={styles['system-introduce']}>
                <div className={'w-100 container'}>
                    <div className={styles['system-introduce-text']}>
                        <div className={styles['format-text']}>
                            <div
                                style={{ padding: '0px' }}
                                className="view ql-editor"
                                dangerouslySetInnerHTML={{
                                    __html: banner?.content?.sysIntro,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['new-video']}>
                {isShowing ? (
                    <div
                        onClick={closeModalHandler}
                        className={styles['back-shed']}
                    >
                        <Modal
                            className={styles['modal']}
                            show={isShowing}
                            close={closeModalHandler}
                            banner={banner}
                        ></Modal>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default HomePageBanner;
