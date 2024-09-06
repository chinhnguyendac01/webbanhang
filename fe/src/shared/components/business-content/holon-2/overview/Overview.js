import React from 'react'
import styles from './index.module.scss'
import IcChervonRight from 'shared/components/business-content/business-content-1/section/IcChervonRight';
import ImageFrame from 'shared/containers/business-content/image-frame/ImageFrame'
import imageframe1 from 'assets/images/business-content/holon/image_frame_1.png'
import imageframe2 from 'assets/images/business-content/holon/image_frame_2.png'
import { useTranslation } from 'react-i18next';
// import imgMiddle from 'assets/images/business-content/holon/pop-up/holon_popup_banner.png'

const Overview = ({ overview, setOpenDialog = () => { } }) => {
    const { t } = useTranslation();
    return (
        <>
            {/* <div className={styles['background_middle']}>
                <img src={imgMiddle} />
            </div> */}
            <div className={`${styles['section-introduce']}`}>
                <div className='container w-full'>
                    <div className={styles['section-title']}>{overview?.title}</div>
                    <div className={`${styles['flex-between']}`}>
                        <div className={styles['section-text']}>
                            <div style={{ padding: "0px", overflow: "unset" }} className="view ql-editor" dangerouslySetInnerHTML={{ __html: overview?.content }} >

                            </div>
                            <div className={styles['btn-link']}
                                onClick={() => {
                                    setOpenDialog(true)
                                }}>
                                <span className={styles['chervon-icon']}>
                                    <IcChervonRight props={{ width: 20, height: 20 }} />
                                </span>
                                <span className={styles['text']}>
                                    {t("holon.link_popup")}
                                </span>
                            </div>
                        </div>

                        <div className={styles['section-images']}>
                            <div className={styles['image-wrapper']}>
                                <ImageFrame image={imageframe1} framePosition={'left'} />
                            </div>
                            <div className={styles['image-wrapper']}>
                                <ImageFrame image={imageframe2} framePosition={'right'} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Overview
