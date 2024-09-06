// HolonPopup1.js

import React, { useState } from 'react';
import styles from './index.module.scss';
import image_1 from 'assets/images/business-content/holon/pop-up/main-popup/image_1.png';
import image_2 from 'assets/images/business-content/holon/pop-up/main-popup/image_2.png';
import image_3_1 from 'assets/images/business-content/holon/pop-up/main-popup/image_3_1.png';
import image_3_2 from 'assets/images/business-content/holon/pop-up/main-popup/image_3_2.png';
import image_3_3 from 'assets/images/business-content/holon/pop-up/main-popup/image_3_3.png';
import image_4 from 'assets/images/business-content/holon/pop-up/main-popup/image_4.png';
import image_5_1 from 'assets/images/business-content/holon/pop-up/main-popup/image_5_1.png';
import image_5_2 from 'assets/images/business-content/holon/pop-up/main-popup/image_5_2.png';


import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useTranslation } from 'react-i18next';

const HolonMainDialog = () => {
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowPopup(true);
    };
    const handleClose = () => {
        setSelectedImage(null);
        setShowPopup(false);
    };

    return (
        <>
            <Dialog
                className={styles['Dialog']}
                open={showPopup}
                onClose={handleClose}
                scroll={'paper'}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                sx={{
                    '.MuiPaper-root.MuiDialog-paper': {
                        maxWidth: 'initial',
                        width: '80%',
                        border: 'none',
                        '@media (max-width:600px)': {
                            width: '100%',
                        },
                    },
                    '.MuiDialogContent-root': {
                        padding: '0',
                        border: 'none',
                        backgroundColor: '#F6F6F6',
                    },
                }}
            >
                <div className={styles['image-wrapper']}>
                    {selectedImage && <img src={selectedImage} alt="Selected" />}
                </div>
            </Dialog>
            {/* ... */}

            <div className={styles['popup-content']}>
                <div className={styles['title']}>{t('holon_popup.title')}</div>
                <div className={styles['images-wrapper']}>
                    <div className={styles['wrapper']}>
                        <div
                            onClick={() => handleImageClick(image_1)}
                        >
                            <img
                                src={image_1} alt="Image 1" />
                        </div>
                    </div>
                    <div className={styles['wrapper']}>
                        <div
                            onClick={() => handleImageClick(image_2)}
                        >
                            <img
                                src={image_2} alt="Image 2" />
                        </div>
                    </div>
                    <div className={styles['wrapper']}>
                        <div className={styles['grid-container--3']}>
                            <div className={styles['gird-column']}
                                onClick={() => handleImageClick(image_3_1)}
                            >
                                <img src={image_3_1} />
                            </div>
                            <div className={styles['gird-column']}
                                onClick={() => handleImageClick(image_3_2)}
                            >
                                <img src={image_3_2} />
                            </div>
                            <div className={styles['gird-column']}
                                onClick={() => handleImageClick(image_3_3)}
                            >
                                <img src={image_3_3} />
                            </div>
                        </div>
                    </div>
                    <div className={styles['wrapper']}>
                        <div
                            className={styles['image-container']}
                            onClick={() => handleImageClick(image_4)}
                        >
                            <img
                                src={image_4} alt="Image 4" />
                        </div>
                    </div>
                    <div className={styles['wrapper']}>
                        <div className={styles['grid-container--2']}>
                            <div
                                onClick={() => handleImageClick(image_5_1)}
                            >
                                <img
                                    src={image_5_1} />
                            </div>
                            <div
                                onClick={() => handleImageClick(image_5_2)}
                            >
                                <img
                                    src={image_5_2} />
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </>
    );
};

export default HolonMainDialog;
