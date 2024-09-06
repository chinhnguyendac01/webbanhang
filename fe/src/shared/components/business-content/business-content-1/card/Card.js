import React from 'react'
import styles from './index.module.scss'
import CardMedia from '@mui/material/CardMedia';
import defaultImage from 'assets/images/default_image.png'
const Card = ({ props }) => {
    return (
        <div className={styles['card']}>
            <div className={styles['card-img']}>
                <CardMedia
                    component="img"
                    image={props?.image ? `${process.env.REACT_APP_STORAGE_URL}${props.image}` : defaultImage}
                    alt="image"
                />
            </div>
            <div className={styles['card-content']}>
                <div className={styles['card-title']}>
                    {props?.title}
                </div>
                <div className={styles['card-description']}>
                    {props?.description || props?.content}
                </div>
            </div>

        </div>
    )
}

export default Card
