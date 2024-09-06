import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './PaginationCustom.scss';
export default function PaginationCustom(props) {
    const { data, page, rowsPerPage, handleChangePage ,total} = props;

    return (
        <Stack spacing={2}>
            <Pagination
                onChange={handleChangePage}
                count={Math.ceil(total / rowsPerPage)}
                page={Number(page)}
                sx={{
                    '.MuiButtonBase-root.Mui-selected': {
                        background: '#FF8B13',
                    },
                    '.MuiButtonBase-root': {
                        ':hover': {
                            background: '#FF8B13',
                        },
                    },
                }}
            />
        </Stack>
    );
}
