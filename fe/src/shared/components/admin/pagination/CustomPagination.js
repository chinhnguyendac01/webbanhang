import React from 'react'
import { Pagination } from '@mui/material'
import styles from './index.module.scss'
import "./CustomPagination.scss"
const CustomPagination = ({ totalPages, page, onChange }) => {
   
    return (
        <div className={`${styles['pagination-wrapper']} pagination-wrapper`}>
            <Pagination
                count={totalPages || 0}
                size='small'
                page={page}
                onChange={onChange} />
        </div>
    )
}
CustomPagination.defaultProps = {
    totalPages: 1,
    page: 1,
    onChange: () => { }
}
export default CustomPagination
