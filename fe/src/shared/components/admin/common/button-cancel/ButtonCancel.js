import React from 'react'
import styles from './index.module.scss'
import { useTranslation } from 'react-i18next';
const ButtonCancel = ({ onClick = () => { }, label = "", type = "buton", className = "" }) => {
    const { t } = useTranslation();
    return (
        <button
            type={type}
            className={`${styles['btn-cancel']} ${className}`}
            onClick={(e) => { e.preventDefault(); onClick() }}
        >
            {label || t("common.cancel")}
        </button>
    )
}

export default ButtonCancel
