import React from 'react';
import styles from './DialogLoading.module.scss';
import Dialog from '@mui/material/Dialog';
import CircularProgress from '@mui/material/CircularProgress';
export default function DialogLoadingcustom(props) {
    const { openDialog, handleClose } = props;
    return (
        <>
            <Dialog
                className={styles['Dialog']}
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{
                    '.MuiPaper-root.MuiDialog-paper':{
                         backgroundColor:'initial',
                         overflowY:'unset',
                         boxShadow:'initial'
                    }
                }}
            >
               <div>
                     <CircularProgress style={{ width:'70px',height:'70px', color: '#FF8B13' }} />
               </div>
               
            </Dialog>
        </>
    );
}
