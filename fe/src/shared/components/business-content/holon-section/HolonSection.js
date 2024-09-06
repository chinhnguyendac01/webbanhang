import React from 'react'
import styles from './index.module.scss'
import IcOutlineLeftBottom from 'shared/components/icons/holon/IcOutlineLeftBottom';
import IcOutlineRightBottom from 'shared/components/icons/holon/IcOutlineRightBottom';
import IcOutlineRightTop from 'shared/components/icons/holon/IcOutlineRightTop';
import { useTranslation } from 'react-i18next';
import "react-quill/dist/quill.core.css";
import defaultImage from 'assets/images/default_image.png'


const HolonSection = ({ props }) => {
    const { t } = useTranslation();
    return (
        <div className={styles['section-wrapper']}>
            <div className={styles['section-image']}>
                <img src={props?.image || defaultImage}></img>
                <span className={styles['outline-left-bottom']}><IcOutlineLeftBottom /></span>
                <span className={styles['outline-right-top']}><IcOutlineRightTop /></span>
                <span className={styles['outline-right-bottom']}><IcOutlineRightBottom /></span>

            </div>
            <div className={styles['section-text']}>
                <div style={{ padding: "0px", overflow: "unset" }} className="view ql-editor" dangerouslySetInnerHTML={{ __html: props?.content }} />
            </div>
        </div>
    )
}

export default HolonSection
