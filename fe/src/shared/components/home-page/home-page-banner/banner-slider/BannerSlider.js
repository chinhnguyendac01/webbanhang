import React from 'react'
import styles from './BannerSlider.module.scss'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderCustom.scss";
import img1 from 'assets/images/hp-banner-slider/banner1.png';
import img2 from 'assets/images/hp-banner-slider/banner2.png';
import img3 from 'assets/images/hp-banner-slider/banner3.png';
import img4 from 'assets/images/hp-banner-slider/banner4.png';
import { useTranslation } from 'react-i18next';

function BannerSlider() {

    const settings = {
        dot: false,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true
    };

    const sets = {
        dot: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1.68,
        slidesToScroll: 1,
        autoplay: true
    };

    const { t } = useTranslation();

    return (
        <div>
            <div className={`${styles['Banner-Slider']} container w-100`}>
                <div className={`${styles['slider-wrapper']} slider-wrapper`}>
                    <Slider {...settings}>
                        <div className={styles['item']}>
                            <img src={img1}></img>
                            <div className={styles['text']}>{t('home.contract')}</div>
                        </div>
                        <div className={styles['item']}>
                            <img src={img2}></img>
                            <div className={styles['text']}>{t('home.staff')}</div>
                        </div>
                        <div className={styles['item']}>
                            <img src={img3}></img>
                            <div className={styles['text']}>{t('home.SES')}</div>
                        </div>
                        <div className={styles['item']}>
                            <img src={img4}></img>
                            <div className={styles['text']}>{t('home.recruitment')}</div>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className={styles['mobile-slider']}>
                <Slider {...sets}>
                    <div className={styles['mobile-item']}>
                        <img src={img1}></img>
                        <div className={styles['mobile-text']}>{t('home.contract')}</div>
                    </div>
                    <div className={styles['mobile-item']}>
                        <img src={img2}></img>
                        <div className={styles['mobile-text']}>{t('home.staff')}</div>
                    </div>
                    <div className={styles['mobile-item']}>
                        <img src={img3}></img>
                        <div className={styles['mobile-text']}>{t('home.SES')}</div>
                    </div>
                    <div className={styles['mobile-item']}>
                        <img src={img4}></img>
                        <div className={styles['mobile-text']}>{t('home.recruitment')}</div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default BannerSlider;