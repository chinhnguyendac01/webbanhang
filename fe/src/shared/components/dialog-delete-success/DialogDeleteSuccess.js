import React, { useEffect } from 'react';
import styles from './DialogDeleteSuccess.module.scss';
import Dialog from '@mui/material/Dialog';
import IcDeleteSuccess from '../icons/IcDeleteSuccess';
import { useTranslation } from 'react-i18next';
export default function DialogDeleteSuccess(props) {
    const { openDialog, handleClose } = props;
    const { t } = useTranslation();
    useEffect(() => {
        if (openDialog) {
            const timer = setTimeout(() => {
                handleClose();
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [openDialog, handleClose]);
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
                        <div className={styles['Icon_Dialog']}>
                            <IcDeleteSuccess />
                        </div>
                        <span className={styles['Title_Dialog-success']}>
                            {t("common.delete_success")}
                        </span>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
