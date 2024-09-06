import React from 'react';
import styles from './DialogDeleteConfirm.module.scss';
import Dialog from '@mui/material/Dialog';
import IcDelete from '../icons/IcDelete';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
export default function DialogDeleteConfirm(props) {
    const { openDialog, handleClose, onHandleClick } = props;
    const { t } = useTranslation()
    return (
        <>
            <Dialog
                className={styles['Dialog']}
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className={styles['Dialog-content']}>
                    <div className={styles['Content']}>
                        <div className={styles['Icon-delete']}>
                            <IcDelete width="50px" height="50px" color="#fff" />
                        </div>
                        <span className={styles['Title']}>
                            {t("common.delete_items")}
                        </span>

                        <div className={styles['Frame-control']}>
                            <button onClick={handleClose} className={styles['Style-btn-cancel']}>
                                {t("common.cancel")}
                            </button>
                            <button onClick={onHandleClick} className={styles['Style-btn-accept']}>
                                {t("common.delete")}
                            </button>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
