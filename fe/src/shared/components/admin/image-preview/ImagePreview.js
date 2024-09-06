import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
import styles from './index.module.scss'
import IcUpload from 'shared/components/icons/IcUpload';
import { IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { useTranslation } from 'react-i18next';

const ImagePreview = ({ onSaveImage, defaultImage = null, canEdit = true }) => {
    const [previewImage, setPreviewImage] = useState(defaultImage);
    const { t } = useTranslation();
    const { handleSubmit, setValue, control, formState: { errors } } = useForm({
        criteriaMode: "all",
        defaultValues: {
            image: null,
        }
    });

    const handleOnSubmit = (data) => {
        onSaveImage(data.image); // Gọi hàm callback để cập nhật ảnh của card
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setPreviewImage(e.target.result);
        };
        reader.readAsDataURL(file);
        setValue('image', file);
        onSaveImage(file)
    };

    return (
        <div>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <div className={styles['input-container']}>
                    {previewImage ? (
                        <div className={styles['image-preview']}>
                            <img src={previewImage} alt="Preview" />
                        </div>
                    ) : (
                        <div>{t("common.add_image_msg")}</div>
                    )}

                    <Controller
                        name="image"
                        control={control}
                        rules={{
                            // required: t("accountForm.required"),
                        }}
                        render={({ field: { ref, ...rest } }) => (
                            <div className={`require-messange-position ${styles['dropdown']}`}>
                                <div className={styles['title']}>
                                    <IcUpload />
                                    {t('common.file_attachment')}
                                </div>
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    accept="image/*"
                                    className={styles['upload-button']}
                                    disabled={!canEdit}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="image"
                                    render={({ message }) => (
                                        <span className="require-messange">
                                            {message}
                                        </span>
                                    )}
                                />
                            </div>
                        )}
                    />
                </div>

                {/* <div className={styles['input-container']} style={{ display: 'flex', justifyContent: "flex-end" }}>
                    <IconButton type='submit'><CheckIcon /></IconButton>
                </div> */}
            </form>
        </div>
    );
};

export default ImagePreview;
