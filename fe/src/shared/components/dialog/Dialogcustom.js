import React from 'react';
import styles from './Dialog.module.scss';
import Dialog from '@mui/material/Dialog';
import IcSuccess from '../icons/IcSuccess';
export default function Dialogcustom(props) {
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
                    <div className={styles['Icon_Dialog']}>
                        <IcSuccess/>
                    </div>
                    <span className={styles['Title_Dialog-success']}>送信完了!</span>
                </div>

            </Dialog>
        </>
    );
}
