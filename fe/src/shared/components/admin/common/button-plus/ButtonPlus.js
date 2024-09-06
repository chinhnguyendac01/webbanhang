import React from 'react'
import IcPlus from 'shared/components/icons/IcPlus'
import { IconButton } from '@mui/material'
import styles from './index.module.scss'
const ButtonPlus = ({ onClick = () => { }, className, type = "button", isOrage = false }) => {
    return (
        <IconButton
            type={type}
            onClick={onClick}
            className={`${className} ${styles['button']} ${isOrage ? styles['button-orange'] : ""}`}
        >
            <IcPlus />
        </IconButton>
    )
}

export default ButtonPlus
