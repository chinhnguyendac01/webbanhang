import React from 'react'
import styles from './index.module.scss'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import HolonPopupBanner from '../holon-popup-banner/HolonPopupBanner';
import HolonMainDialog from '../holon-main-dialog/HolonMainDialog';
const PopUpContainer = ({ openDialog, handleClose = () => { }, popUpIndex = 1 }) => {

    return (
        <Dialog
            className={styles['Dialog']}
            open={openDialog}
            onClose={() => {
                handleClose();
            }}
            scroll={'paper'}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            sx={{
                '.MuiPaper-root.MuiDialog-paper': {
                    maxWidth: 'initial',
                    width: "80%",
                    border: 'none',
                    '@media (max-width:600px)': {
                        width: '100%',
                    },
                },
                '.MuiDialogContent-root': {
                    padding: "0",
                    border: 'none',
                    backgroundColor: "#F6F6F6",
                }
            }}
        >
            <DialogContent dividers={'paper'}>
                <HolonPopupBanner />
                <HolonMainDialog />
            </DialogContent>
        </Dialog >
    )
}

export default PopUpContainer
