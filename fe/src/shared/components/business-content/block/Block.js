import React from 'react'
import styles from './Block.module.scss'
const Block = ({ text, isOrange = false, canClick = false, className, onClick = () => { }, style = {} }) => {
    return (
        <div className={styles['block-wrap']}>
            <div
                style={{ ...style }}
                onClick={onClick}
                className=
                {`${styles['block']} ${isOrange ? styles['block-orange'] : ""} ${className} ${canClick ? styles['block-click'] : ""}`}
            >
                {!canClick ? (
                    <span>{text}</span>) :
                    (
                        <button onClick={(e) => { e.preventDefault(); onClick() }}
                            style={{ border: "none", backgroundColor: "inherit", color: "inherit" }}>
                            {text}
                        </button>)}
            </div>
        </div>
    )
}

export default Block
