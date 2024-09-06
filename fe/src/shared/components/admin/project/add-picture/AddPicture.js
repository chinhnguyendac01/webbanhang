import React, { useState } from 'react';
import styles from './AddPicture.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
import IcUpload from 'shared/components/icons/IcUpload';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function AddPicture({handleNext}) {

    const { t } = useTranslation();
    const history = useHistory();
    const { handleSubmit, control, formState: { errors } } = useForm({
        criteriaMode: "all"
    });
    const [bannerPreviewImg, setBannerPreviewImg] = useState(null);
    const [detailPreviewImg, setDetailPreviewImg] = useState(null);
    const [bannerImg, setBannerImg] = useState();
    const [detailImg, setDetailImg] = useState();

    const handleBannerImgChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setBannerPreviewImg(e.target.result);
        };
        reader.readAsDataURL(file);
        setBannerImg(file);
    };

    const handleDetailImgChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setDetailPreviewImg(e.target.result);
        };
        reader.readAsDataURL(file);
        setDetailImg(file);
    }

    const handleCancel = () => {
        history.push('/admin/project')
    }

    const onSubmit = () => {
        var formData = new FormData();
        if(bannerImg){
            formData.append('banner_img', bannerImg);
        }
        if(detailImg){
            formData.append('detail_img', detailImg);
        }
        handleNext(formData);
    };

    return (  
        <div className={styles['add-picture']}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles['banner-img']}>
                    <div className={styles['title']}>
                        {t('admin.project.banner-img')}
                    </div>
                    <div className={styles['content']}>
                        {bannerPreviewImg ? (<>
                            <div className={styles['image-preview']}>
                                <img src={bannerPreviewImg} alt="Banner Preview" />
                            </div>
                        </>) : (<><div style={{ marginTop: '24px' }}>{t('admin.project.pls-add')}</div></>)}
                        <Controller
                            name="banner_img"
                            control={control}
                            render={() => (
                                <div className={styles['upload-file']}>
                                    <h6><IcUpload />{t('admin.project.attached-files')}</h6>
                                    <input
                                        type="file"
                                        placeholder={"No file selected"}
                                        onChange={handleBannerImgChange}
                                        accept="image/*"
                                        className={styles['upload-button']}
                                        required  
                                    />
                                    <ErrorMessage
                                        errors={errors}
                                        name="banner_img"
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
                </div>
                <div className={styles['detail-img']}>
                    <div className={styles['title']}>
                        {t('admin.project.detail-img')}
                    </div>
                    <div className={styles['content']}>
                        {detailPreviewImg ? (<>
                            <div className={styles['image-preview']}>
                                <img src={detailPreviewImg} alt="Detail Preview" />
                            </div>
                        </>) : (<><div style={{ marginTop: '24px' }}>{t('admin.project.pls-add')}</div></>)}
                        <Controller
                            name="detail_img"
                            control={control}
                            render={() => (
                                <div className={styles['upload-file']}>
                                    <h6><IcUpload />{t('admin.project.attached-files')}</h6>
                                    <input
                                        type="file"
                                        onChange={handleDetailImgChange}
                                        accept="image/*"
                                        className={styles['upload-button']}
                                        required
                                    />
                                    <ErrorMessage
                                        errors={errors}
                                        name="banner_img"
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
                </div>
                <div className={styles['action']}>
                    <button className={styles['btn-cancel']} onClick={handleCancel}>
                        {t('admin.project.cancel')}
                    </button>
                    <button type="submit" className={styles['btn-submit']}>
                        {t('admin.project.create')}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddPicture;