import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './BannerAi.module.scss';
import Input from 'shared/components/admin/common/input/Input';
import CheckIcon from '@mui/icons-material/Check';
import IcEditCircle from 'shared/components/icons/IcEditCircle';
import { useTranslation } from 'react-i18next';
import IcLink from 'shared/components/icons/IcLink';
import { IconButton } from '@mui/material';

function BannerAi({ props, onSave, sectionName, showEditTitle = true }) {
    const [editMode, setEditMode] = useState(false);
    const { t } = useTranslation();

    const { control, setValue, getValues } = useForm({
        defaultValues: {
            title: '',
            video_url: '',
        },
    });

    useEffect(() => {
        if (props?.id) {
            setValue('id', props?.id);
            setValue('section_id', props?.section_id);
            setValue('locale_id', props?.locale_id);
            setValue('title', props?.title);
            setValue('video_url', props?.content);
            setEditMode(false);
        }
    }, [props, setValue]);

    const submitSection = (data) => {
        const submitData = {
            title: getValues('title'),
            id: getValues('id'),
            section_id: getValues('section_id'),
            locale_id: getValues('locale_id'),
            content: getValues('video_url'),
        };
        onSave(submitData);
        setEditMode(false);
    };
    const handleEditClick = () => {
        setEditMode(true);
    };
    return (
        <div className={styles['banner-section']}>
            <div className={styles['section-action']}>
                <div className={styles['section-name']}>{sectionName}</div>
                {!editMode && (
                    <IconButton
                        className={styles['btn-edit']}
                        onClick={handleEditClick}
                    >
                        <IcEditCircle />
                    </IconButton>
                )}
                {editMode && (
                    <IconButton
                        className={styles['btn-edit']}
                        // type='submit'
                        onClick={(e) => {
                            e.preventDefault();
                            submitSection();
                        }}
                    >
                        <CheckIcon style={{ fill: 'white' }} />
                    </IconButton>
                )}
            </div>
            <div className={styles['section-item']}>
                <span className={styles['item-title']}>
                    {t('admin.top.title')}
                </span>
                <div>
                    {showEditTitle && (
                        <Input
                            props={{
                                control: control,
                                name: 'title',
                                label: '',
                                setValue: setValue,
                                canEdit: editMode,
                            }}
                        />
                    )}
                </div>
            </div>
            <div className={styles['video-url']}>
                <span className={styles['item-title']}>
                    <IcLink />
                    {t('admin.top.video')}
                </span>
                <div>
                    {showEditTitle && (
                        <Input
                            props={{
                                control: control,
                                name: 'video_url',
                                label: '',
                                setValue: setValue,
                                canEdit: editMode,
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default BannerAi;
