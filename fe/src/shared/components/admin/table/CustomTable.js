import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    TablePagination,
} from '@mui/material';
import styles from './CustomTable.module.scss';
import { useTranslation } from 'react-i18next';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import IcEdit from 'shared/components/icons/IcEdit';
import IcDelete from 'shared/components/icons/IcDelete';
import DialogDeleteConfirm from 'shared/components/dialog-delete-confirm/DialogDeleteConfirm';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import IcDownload from 'shared/components/icons/IcDownload';
import IcEye from 'shared/components/icons/IcEye';
import Tooltip from '@mui/material/Tooltip';
import './CustomTable.scss';
const CustomTable = ({
    columns,
    data,
    transPrefix,
    handleEdit,
    handleDelete,
    toggleRowSelection,
    handleSelectAll,
    selectedRows,
    page,
    perPage,
    canEdit = true,
    handleOpenInfo,
    canDelete = true,
    ceilHeight = "160px",
    transformTooltips = "70px",
    canSelect = true,
    styleImage = {},
}) => {
    const { t, i18n } = useTranslation();
    const [openDialog, setOpenDiaLog] = React.useState(false);
    const [selectedId, setSelectedId] = React.useState(null);
    // useEffect(() => {
    //     i18n.changeLanguage('VN');
    // }, []);
    const handleClickOpen = (id) => {
        setOpenDiaLog(true);
        setSelectedId(id);
    };

    const handleClose = () => {
        setOpenDiaLog(false);
    };
    return (
        <>
            <DialogDeleteConfirm
                openDialog={openDialog}
                handleClose={handleClose}
                onHandleClick={(e) => {
                    e.preventDefault();
                    handleDelete(selectedId);
                    setOpenDiaLog(false);
                }}
            />
            <TableContainer
                component={Paper}
                sx={{ maxHeight: 1040 }}
                className={styles['custom-table']}
            >
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow className={styles['table-head']}>
                            {canSelect &&
                                <TableCell className={styles['table-head-cell']}>
                                    <Checkbox
                                        checked={
                                            selectedRows?.length === data.length
                                        }
                                        onChange={handleSelectAll}
                                        sx={{
                                            color: "#0E0F3B",
                                            '&.Mui-checked': {
                                                color: '#FF8B13',
                                            },
                                        }}
                                    />
                                </TableCell>}
                            <TableCell className={styles['table-head-cell']}>
                                {t("admin.table.index")}
                            </TableCell>
                            {columns?.map(
                                (column, idx) =>
                                    column !== 'id' && (
                                        <TableCell
                                            className={
                                                styles['table-head-cell']
                                            }
                                            key={idx}
                                        >
                                            {t(`${transPrefix}.${column}`)}
                                        </TableCell>
                                    ),
                            )}
                            <TableCell className={styles['table-head-cell']}>
                                {t("admin.table.actions")}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row, idx) => (
                            <TableRow key={idx}>
                                {canSelect &&
                                    <TableCell style={{ height: ceilHeight ? ceilHeight : "" }}>
                                        <Checkbox
                                            checked={selectedRows?.includes(row?.id)}
                                            onChange={() =>
                                                toggleRowSelection(row?.id)
                                            }
                                            sx={{
                                                color: "#0E0F3B",
                                                '&.Mui-checked': {
                                                    color: '#FF8B13',
                                                },
                                            }}
                                        />
                                    </TableCell>
                                }
                                <TableCell style={{ height: ceilHeight ? ceilHeight : "" }}>
                                    {(page - 1) * perPage + (idx + 1)}
                                </TableCell>
                                {columns?.map((column, idx) => {
                                    if (column !== 'id') {

                                        return (
                                            <Tooltip
                                                key={idx}
                                                arrowoffsettop={100}
                                                componentsProps={{
                                                    tooltip: {
                                                        sx: {
                                                            bgcolor: 'common.black',
                                                            '& .MuiTooltip-arrow': {
                                                                color: 'common.black',
                                                            },
                                                            transform: `translateY(${transformTooltips}) !important`
                                                        },
                                                    },
                                                }}
                                                title={row[column]}
                                                arrow
                                                placement="top"
                                            >
                                                <TableCell style={{ height: ceilHeight ? ceilHeight : "" }} key={column}>
                                                    {column === 'path' ? (
                                                        <img
                                                            className={`${styles[`image_col`]} ${styleImage}`}
                                                            src={`${process.env.REACT_APP_STORAGE_URL}${row[column]}`}
                                                            alt="Ảnh"
                                                        />
                                                    ) : column === 'cv_path' ? (
                                                        <a
                                                            href={`${process.env.REACT_APP_STORAGE_URL}${row[column]}`}
                                                            download
                                                        >
                                                            <IcDownload color="#FF8B13" />
                                                        </a>
                                                    ) : column === 'attachment_path' ? (
                                                        <a
                                                            href={`${process.env.REACT_APP_STORAGE_URL}${row[column]}`}
                                                            download
                                                        >
                                                            <IcDownload color="#FF8B13" />
                                                        </a>
                                                    ) : column === 'project_path' ? (
                                                        <img
                                                            className={`${styles[`project_img_col`]}`}
                                                            src={`${process.env.REACT_APP_STORAGE_URL}${row[column]}`}
                                                            alt="Project Image"
                                                        />
                                                    ) : (
                                                        // Thêm xử lý cho các trường khác nếu cần
                                                        typeof row[column] == 'string' ? row[column] : ""
                                                    )}
                                                </TableCell>
                                            </Tooltip>

                                        );
                                    }
                                    return null; // Bỏ qua cột 'id'
                                })}

                                <TableCell style={{ height: ceilHeight ? ceilHeight : "" }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {canEdit ? <IconButton
                                            aria-label="toggle visibility"
                                            onMouseDown={(event) => {
                                                event.preventDefault();
                                                handleEdit(row?.id);
                                            }}
                                        >
                                            <IcEdit />
                                        </IconButton> :
                                            <IconButton
                                                aria-label="toggle visibility"
                                                onMouseDown={(event) => {
                                                    event.preventDefault();
                                                    handleOpenInfo(row?.id)
                                                }}
                                            >
                                                <IcEye color="#07407B" />

                                            </IconButton>
                                        }

                                        {canDelete &&
                                            <IconButton
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleClickOpen(row?.id);
                                                }}
                                                aria-label="toggle visibility"
                                                // onMouseDown={(event) => {
                                                //     event.preventDefault();
                                                //     handleDelete(row?.id);
                                                // }}
                                                edge="end"
                                            >
                                                <IcDelete />
                                            </IconButton>
                                        }
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

CustomTable.defaultProps = {
    columns: [],
    data: [],
    handleDelete: () => { },
    handleEdit: () => { },
};

export default CustomTable;
