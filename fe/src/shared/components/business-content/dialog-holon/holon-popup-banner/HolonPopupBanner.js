import React from 'react'
import styles from './index.module.scss'
import HolonPopupBannerImage from 'assets/images/business-content/holon/pop-up/holon_popup_banner.png'
const HolonPopupBanner = () => {
    return (
        <div className={styles['banner']}>
            <img src={HolonPopupBannerImage} />
        </div>
    )
}

export default HolonPopupBanner
