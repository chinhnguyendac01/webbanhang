import React, { useRef } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from '../product-card/ProductCard';
import styles from './index.module.scss'
import IcChervonLeft from "./IcChervonLeft";
import IcChervonRight from "./IcChervonRight";
import { useTranslation } from 'react-i18next';
import { IconButton } from "@mui/material";
const ProductSlider = ({ data }) => {

    const { t } = useTranslation();
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: false,
        arrows: true,
        infinite: true,
        swipeToSlide: true,
    }
    const slider = useRef(null);

    const next = () => {
        slider.current.slickNext();
    };

    const previous = () => {
        slider.current.slickPrev();
    };

    const handleOnClick = () => {
        window.scrollTo(0, 0);
    }
    return (
        <div className="w-full">
            <div className={styles['product-slider']}>
                <div className={styles['title']}>{t('infoProduct.title')}</div>
                <div>
                    <Slider {...settings} ref={slider}>
                        {data?.map((product, index) =>
                            <div key={index} className={styles['item']}>
                                <ProductCard props={product} handleOnClick={handleOnClick} />
                            </div>)}
                    </Slider>
                </div>
                <div className={`${styles['btn-container']}`}>
                    <IconButton onClick={previous} className={styles['btn-arrow']}>
                        <IcChervonLeft />
                    </IconButton>
                    <IconButton onClick={next} className={styles['btn-arrow']}>
                        <IcChervonRight />
                    </IconButton>
                </div>
            </div>
        </div>

    )
}
ProductSlider.defaultProps = {
    data: []
}
export default ProductSlider
