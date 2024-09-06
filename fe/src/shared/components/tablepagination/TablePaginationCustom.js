import React from 'react';
import './TablePagination.scss';
import TablePagination from '@mui/material/TablePagination';
import IcDropdown from '../icons/IcDropdown';
import IcDown from '../icons/IcDown';
import IcUp from '../icons/IcUp';
import { useTranslation } from 'react-i18next';
export default function TablePaginationCustom(props) {
    const {
        handleChangeRowsPerPage,
        handleChangePage,
        rowsPerPage,
        page,
        rows,
        openRowsPerPage,
        total,
        canBoder = false
    } = props;
    const { t } = useTranslation();
    const stylesTable ={ 
        border: canBoder ? "1px solid var(--0E0F3B, #0e0f3b)" : 'none',
        borderRadius:"4px",
        cursor:'pointer'
    }
    return (
        <TablePagination
            style={stylesTable}
            labelRowsPerPage={t("tablepagination.showing")}
            rowsPerPageOptions={[5, 10, 25]}
            labelDisplayedRows={({ from, to, count }) => `${t("tablepagination.of")} ${count}`}
            SelectProps={{
                IconComponent: () =>
                    openRowsPerPage ? (
                        <IcDown width="20" height="20" />
                    ) : (
                        <IcUp width="20" height="20" />
                    ),
                open: openRowsPerPage,
                MenuProps: {
                    sx: {
                        '.MuiPaper-root': {
                            
                        },
                        '.MuiList-root': {
                            padding: '0px',
                        },
                        '.MuiTablePagination-menuItem': {
                            ':hover': {
                                color: '#FF8B13',
                            },
                            color: '#0E0F3B',
                            borderBottom: '1px solid #E1E6EF',
                            justifyContent:'center'
                        },
                        '.MuiTablePagination-menuItem.Mui-selected': {
                            // ':hover': {
                            //     backgroundColor: 'blue',
                            // },
                            color: '#FF8B13',
                           
                        },
                    },
                },
            }}
            sx={{
                '.MuiButtonBase-root.Mui-selected': {
                    backgroundColor: '#a9aeb3',
                    color: '#red',
                },
            }}
            component="div"
            count={total} 
            rowsPerPage={rowsPerPage || 0}
            page={Number(page - 1)}
            onRowsPerPageChange={handleChangeRowsPerPage}
            onPageChange={handleChangePage}
        />
    );
}
