import React from 'react'
import Breadcrumb from 'shared/components/breadcrumb/Breadcrumb'
import styles from './BusinessBanner.module.scss'
import IcBack from './IcBack'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import { useTranslation } from 'react-i18next'
const BusinessBanner = ({ props }) => {
    const history = useHistory();
    const { t } = useTranslation();
    return (
        <>
            <div className={`${styles['banner']} w-100`} style={{ backgroundImage: `url(${props?.imgPath})` }}>
                <div className={` w-100 container h-100 `}>
                    <div className={`${styles['content']}`}>
                        <div className={styles['btn']} onClick={() => history.goBack()}>
                            <span className={styles['btn-icon']}><IcBack props={{
                                color: "#0E0F3B"
                            }} /></span>
                            <span className={styles['btn-text']}>{t("common.back")}</span>
                        </div>
                        <div className={styles['banner-content']}>
                            <div className={styles['title']}>
                                {props?.title}
                            </div>
                            <div className={styles['subTitle']}>
                                {props?.subTitle}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className={`${styles['subcontent-block']} container w-full`}>
                {props?.text}
            </div> */}
        </>

    )
}
BusinessBanner.defaultProps = {
    props: {
        title: "",
        subTitle: "",
        text: ``,
        imgPath: "",
        bannerImgPath: "",
    }
}
export default BusinessBanner
