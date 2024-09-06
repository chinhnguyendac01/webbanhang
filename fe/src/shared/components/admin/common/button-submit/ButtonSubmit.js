import React from 'react'
import styles from './index.module.scss'
import { useTranslation } from 'react-i18next'
const ButtonSubmit = ({ onClick = () => { }, label = "", type = "submit" }) => {
    const { t } = useTranslation();
    return (
        <button
            type={type == "submit" ? "submit" : "button"}
            className={styles['btn-submit']}
            onClick={(e) => { e.preventDefault(); onClick() }}
        >
            {label || t("common.submit")}
        </button>
    )
}

export default ButtonSubmit
