import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material'
import styles from './index.module.scss'
const ButtonMinus = ({ onClick = () => { }, className, type = "button", isOrage = false }) => {
    return (
        <IconButton
            type={type}
            onClick={onClick}
            className={`${className} ${styles['button']} ${isOrage ? styles['button-orange'] : ""}`}
        >
            <RemoveIcon />
        </IconButton>
    )
}

export default ButtonMinus
