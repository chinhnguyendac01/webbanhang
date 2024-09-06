import React from 'react';
import Dialog from '@mui/material/Dialog';
import styles from './DialogChangePasswordSuccess.module.scss';
import IcSuccessDialog from '../icons/IcSuccessDialog';
export default function DialogChangePasswordSuccess(props) {
    const { openDialog, handleClose } = props;
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
                            <IcSuccessDialog />
                        </div>
                        <span className={styles['Title_Dialog-success']}>
                            Đổi mật khẩu thành công!
                        </span>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
