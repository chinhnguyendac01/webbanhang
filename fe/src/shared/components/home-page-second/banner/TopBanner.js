import React, { useState, useEffect } from 'react';
import styles from './TopBanner.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useRouter from 'hooks/use-router';
import BtnPlay from 'shared/components/icons/home-page/BtnPlay';
import Modal from 'shared/components/home-page/modal/Modal';
import Constants from 'utils/Constants';
import Square from 'shared/components/common/square/Square';
import IcArrowBlue from 'shared/components/icons/home-page/IcArrowBlue';
import RouterPath from 'router/RouterPath';
import Sections from 'utils/Sections';

function TopBanner() {
    const { t } = useTranslation();
    const router = useRouter();
    const history = useHistory();
    const { sectionData } = useSelector((state) => state.HomePage);
    const [bannerAi, setBannerAi] = useState(null);

    const handleClickReason = () => {
        history.push('/ai-solution#section1');
    };

    const handleCLickDetail = () => {
        history.push('/ai-solution#diagram0');
    };

    useEffect(() => {
        if (sectionData?.data) {
            const rawData = sectionData?.data?.items?.find(
                (item) => item.name === Sections.top.aiBanner,
            );
            const data = {
                ...rawData,
                path: rawData?.path
                    ? `${process.env.REACT_APP_STORAGE_URL}${rawData.path}`
                    : '',
            };
            setBannerAi(data);
        }
    }, [sectionData]);
    // card
    const listCard = [
        {
            text: (
                <div className={styles['card-text']}>
                    <div>{t('home.banner.card_left')}</div>
                    <div>{t('home.banner.card_left_2')}</div>
                </div>
            ),
            width: '256px',
            height: '300px',
            cirles: [
                {
                    size: '80px',
                    top: '-35px',
                    left: '-35px',
                    color: '#5FC7FF',
                    zIndex: Constants.Position.BELOW,
                },
                {
                    size: '20px',
                    top: '-37px',
                    left: '70px',
                    color: '#ff8906',
                    zIndex: Constants.Position.ON,
                },
                {
                    size: '16px',
                    top: '40px',
                    right: '-8px',
                    left: 'auto',
                    color: '#34E7A5',
                    zIndex: Constants.Position.ON,
                },
                {
                    size: '15px',
                    top: 'auto',
                    right: 'auto',
                    left: '30px',
                    bottom: '-30px',
                    color: '#F3538C',
                    zIndex: Constants.Position.ON,
                },
            ],
        },
        {
            text: (
                <div className={styles['card-center-text']}>
                    {t('home.banner.card_center')}
                </div>
            ),
            width: '350px',
            height: '300px',
        },
        {
            text: (
                <div className={styles['card-text']}>
                    {t('home.banner.card_right')}
                </div>
            ),
            width: '256px',
            height: '300px',
            cirles: [
                {
                    size: '18px',
                    top: 'auto',
                    left: '-10px',
                    right: 'auto',
                    bottom: '60px',
                    color: '#34E7A5',
                    zIndex: Constants.Position.ON,
                },
                {
                    size: '20px',
                    top: '-25px',
                    left: 'auto',
                    right: '-10px',
                    bottom: 'auto',
                    color: '#5FC7FF',
                    zIndex: Constants.Position.ON,
                },
                {
                    size: '14px',
                    top: '-5px',
                    left: 'auto',
                    right: '10px',
                    bottom: 'auto',
                    color: '#5FC7FF',
                    zIndex: Constants.Position.ON,
                },
                {
                    size: '60px',
                    top: 'auto',
                    left: 'auto',
                    right: '-30px',
                    bottom: '-25px',
                    color: '#FF8906',
                    zIndex: Constants.Position.BELOW,
                },
            ],
        },
    ];
    // card mobile
    const cardTop = {
        text: (
            <div className={styles['card-top-text']}>
                {t('home.banner.card_center')}
            </div>
        ),
        width: '100%',
        height: '120px',
    };

    const cardBottom = [
        {
            text: (
                <div className={styles['card-bot-text']}>
                    <div>{t('home.banner.card_left')}</div>
                    <div>{t('home.banner.card_left_2')}</div>
                </div>
            ),
            width: '50%',
            height: '120px',
        },
        {
            text: (
                <div className={styles['card-bot-text']}>
                    {t('home.banner.card_right')}
                </div>
            ),
            width: '50%',
            height: '120px',
        },
    ];

    // modal
    const [isShowing, setIsShowing] = useState(false);
    const openModalHandler = () => {
        setIsShowing(true);
    };
    const closeModalHandler = () => {
        setIsShowing(false);
    };

    return (
        <div className={`${styles['top-banner-wrapper']}`}>
            <div className={'w-100 container'}>
                <div className={styles['intro']}>
                    <div className={styles['title']}>{bannerAi?.title}</div>
                    <div className={styles['sub_title']}>
                        {t('home.banner.sub_title')}
                    </div>
                    <div
                        onClick={handleClickReason}
                        className={styles['top-page-button']}
                    >
                        {t('home.banner.clickReason')}
                    </div>
                </div>
                <div className={styles['card-circle']}>
                    <div className={styles['card']}>
                        {listCard?.map((item, index) => (
                            <>
                                <Square
                                    key={index}
                                    width={item.width}
                                    height={item.height}
                                    cirles={item?.cirles}
                                >
                                    {item.text}
                                </Square>
                            </>
                        ))}
                    </div>
                    <div className={styles['arrow-area']}>
                        <div style={{ width: '256px', textAlign: 'center' }}>
                            <IcArrowBlue />
                        </div>
                        <div
                            style={{
                                width: '350px',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <div
                                onClick={handleCLickDetail}
                                className={styles['top-page-button']}
                                style={{ width: '140px' }}
                            >
                                {t('home.clickDetail')}
                            </div>
                        </div>
                        <div style={{ width: '256px', textAlign: 'center' }}>
                            <IcArrowBlue />
                        </div>
                    </div>
                </div>
                <div className={styles['card-circle-mobile']}>
                    <div className={styles['card-mobile-top']}>
                        {
                            <Square
                                width={cardTop.width}
                                height={cardTop.height}
                            >
                                {cardTop.text}
                            </Square>
                        }
                    </div>
                    <div className={styles['card-mobile-bottom']}>
                        {cardBottom?.map((item, index) => (
                            <>
                                <Square
                                    key={index}
                                    width={item.width}
                                    height={item.height}
                                >
                                    {item.text}
                                </Square>
                            </>
                        ))}
                    </div>
                    <div className={styles['arrow-area-mobile']}>
                        <div style={{ width: '50%', textAlign: 'center' }}>
                            <IcArrowBlue width={25} height={25} />
                        </div>
                        <div style={{ width: '50%', textAlign: 'center' }}>
                            <IcArrowBlue width={25} height={25} />
                        </div>
                    </div>
                    <div className={styles['button-mobile']}>
                        <div
                            onClick={handleCLickDetail}
                            className={styles['top-page-button']}
                            style={{ width: '140px' }}
                        >
                            {t('home.clickDetail')}
                        </div>
                    </div>
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
                                banner={bannerAi?.content}
                            ></Modal>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default TopBanner;
