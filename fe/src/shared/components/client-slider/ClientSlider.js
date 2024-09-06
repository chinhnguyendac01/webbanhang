import React, { useEffect, useState } from 'react'
import styles from './ClientSlider.module.scss'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderCustom.scss";
import clientslider1 from 'assets/images/client-slider/client-slider-1.png'
import clientslider2 from 'assets/images/client-slider/client-slider-2.png'
import clientslider3 from 'assets/images/client-slider/client-slider-3.png'
import clientslider4 from 'assets/images/client-slider/client-slider-4.png'
import clientslider5 from 'assets/images/client-slider/client-slider-5.png'
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import Sections from 'utils/Sections';
import { IconButton } from '@mui/material';
import { UseTranslationOptions, useTranslation } from 'react-i18next';
const clientData = [
    {
        name: 'actable.ai',
        image: clientslider1,
        url: "https://www.actable.ai/"
    },
    {
        name: 'c2d',
        image: clientslider2,
        url: "https://c-2-d.com/"
    },
    {
        name: 'simplemaker',
        image: clientslider3,
        url: "https://www.simplemaker.com/"
    },
    {
        name: 'good-relations',
        image: clientslider4,
        url: "https://good-relations.jp/"
    },
    {
        name: 'actable.ai',
        image: clientslider1,
        url: "https://www.actable.ai/"
    },
    {
        name: 'c2d',
        image: clientslider2,
        url: "https://c-2-d.com/"
    },
    {
        name: 'simplemaker',
        image: clientslider3,
        url: "https://www.simplemaker.com/"
    },
    {
        name: 'good-relations',
        image: clientslider4,
        url: "https://good-relations.jp/"
    },
]
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <IconButton onClick={onClick} className={`${className} ${styles['btn-arrow']}`} style={{ ...style }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={props?.width || 30}
                height={props?.height || 30}
                viewBox="0 0 40 40"
                fill="none"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.5858 6.58579C15.3668 5.80474 16.6332 5.80474 17.4142 6.58579L29.4142 18.5858C30.1953 19.3668 30.1953 20.6332 29.4142 21.4142L17.4142 33.4142C16.6332 34.1953 15.3668 34.1953 14.5858 33.4142C13.8047 32.6332 13.8047 31.3668 14.5858 30.5858L25.1716 20L14.5858 9.41421C13.8047 8.63317 13.8047 7.36683 14.5858 6.58579Z"
                    fill="white"
                />
            </svg>
        </IconButton>

    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <IconButton onClick={onClick} className={`${className} ${styles['btn-arrow']}`} style={{ ...style }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={props?.width || 30}
                height={props?.height || 30}
                viewBox="0 0 40 40"
                fill="none"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.4142 33.4142C24.6332 34.1953 23.3668 34.1953 22.5858 33.4142L10.5858 21.4142C9.80474 20.6332 9.80474 19.3668 10.5858 18.5858L22.5858 6.58579C23.3668 5.80474 24.6332 5.80474 25.4142 6.58579C26.1953 7.36683 26.1953 8.63317 25.4142 9.41421L14.8284 20L25.4142 30.5858C26.1953 31.3668 26.1953 32.6332 25.4142 33.4142Z"
                    fill="white"
                />
            </svg>
        </IconButton>
    );
}
const ClientSlider = () => {
    const slider = useRef(null);
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        arrows: true,
        infinite: true,
        swipeToSlide: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    nextArrow: <NextArrow props={{ width: 20, height: 20 }} />,
                    prevArrow: <PrevArrow props={{ width: 20, height: 20 }} />,
                    arrows: false,
                },

            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    // initialSlide: 2,
                    arrows: false,
                    autoplay: true,
                },
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    className: "center",
                    arrows: false,
                    autoplay: true,
                },
            },
        ],
    }
    const { sectionData } = useSelector(state => state.HomePage)
    const [clientSlider, setClientSlider] = useState(null);
    const { t } = useTranslation();
    useEffect(() => {
        if (sectionData?.data) {
            setClientSlider(sectionData?.data?.items?.find(item => item.name === Sections.top.client_slider));
        }
    }, [sectionData])
    return (
        <div className={`${styles['client-slider']} container px-0 w-100 client-slider`}>
            <div style={{ display: "flex", justifyContent: "center" }} className={styles['title']}>
                {t("home.client_slider")}
            </div>
            <div className={`${styles['slider']}`}>
                <Slider {...settings} ref={slider}>
                    {Array.isArray(clientData) && clientData.map((client, index) => (
                        <div className={styles['slider-item']} key={index}>
                            {/* <a href={client.url} target='_blank'>
                                <img src={client.image} alt={`${client?.name}`} />
                            </a> */}
                            <img src={client.image} alt={`${client?.name}`} />
                        </div>
                    ))}
                </Slider>

            </div>
        </div>
    )
}

export default ClientSlider
