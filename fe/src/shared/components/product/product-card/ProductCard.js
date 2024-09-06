import React from 'react'
// import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import { useHistory } from "react-router-dom";

const ProductCard = ({ props }) => {

    const history = useHistory();

    const handleOnClick = () => {
        history.push(`/product/${props.id}`)
    }

    return (
        // <Link 
        //     to={{pathname: `/product/${props.id}`}}
        //     style={{ textDecoration: 'none' }}
        // >
        <div className={styles['card']} style={{ backgroundImage: `url(${process.env.REACT_APP_STORAGE_URL}${props?.detail_img})` }} onClick={handleOnClick}>
            <div className={styles['card-content']}>
                <div className={styles['card-title']}>
                    {props?.name}
                </div>
                <div className={styles['card-subtitle']}>
                    {props?.category}
                </div>
            </div>
        </div>
        // </Link>
    )
}
ProductCard.defaultProps = {
    props: {
        id: null,
        title: "",
        detail_overlay: "",
        imgPath: ""
    },
    handleOnClick: () => { }
}
export default ProductCard
