import React from 'react';
import styles from './CareerBanner.module.scss';
import IcBack from 'shared/components/icons/IcBack';
import { useHistory } from 'react-router-dom';
export default function CareerBanner({ img }) {
    const history = useHistory();
    return (
        <div className={styles['Style_section_banner']}>
            <div className={styles['Style_img']}>
                <img className={styles['Banner_img']} src={img} />
                <div className={`container ${styles['Frame_back']}`}>
                    <div
                        onClick={() => history.goBack()}
                        className={styles['Btn_back']}
                    >
                        <IcBack width="15px" height="15px" color="#0E0F3B" />
                        <span className={styles['Styles_text-back']}>Back</span>
                    </div>
                </div>
            </div>
            <div className={styles['Styles_banner']}></div>
        </div>
    );
}
