import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import styles from './BannerSection.module.scss'
import Editor from 'shared/components/editor/Editor';
import Input from 'shared/components/admin/common/input/Input';
import { IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import IcEditCircle from 'shared/components/icons/IcEditCircle';
import { useTranslation } from 'react-i18next';
import IcLink from 'shared/components/icons/IcLink';

function BannerSection({ props, onSave, sectionName, showEditTitle = true }) {

    const ariaLabel = { 'aria-label': 'description' };
    const [editMode, setEditMode] = useState(false);
    const { t } = useTranslation(); 

    const {
        control,
        setValue,
        handleSubmit,
        getValues
    } = useForm({
        defaultValues: {
            title: '',
            question: '',
            intro: '',
            sysIntro: '',
            id: '',
            section_id: '',
            locale_id: '',
        },
    });

    useEffect(() => {
        if (props?.id) {
            setValue('question', props?.content?.question || '');
            setValue('intro', props?.content?.intro || '');
            setValue('sysIntro', props?.content?.sysIntro || '');
            setValue('video_url', props?.content?.video_url || '');
            setValue('title', props?.title);
            setValue('id', props?.id);
            setValue('section_id', props?.section_id);
            setValue('locale_id', props?.locale_id);
            setEditMode(false);
        }
        
    }, [props, setValue])

    const submitSection = (data) => {
        const contentData = {
            question: getValues("question"),
            intro: getValues("intro"),
            sysIntro: getValues("sysIntro"),
            video_url: getValues("video_url"),
        };

        const submitData = {
            id: getValues("id"),
            section_id: getValues("section_id"),
            locale_id: getValues("locale_id"),
            content: contentData
        }

        onSave(submitData);
        setEditMode(false);
    }

    const handleEditClick = () => {
        setEditMode(true);
    };

    return (  
        <div className={styles['banner-section']}>
            <div className={styles['section-action']}>
                <div className={styles['section-name']}>{sectionName}</div>
                {!editMode && (
                    <IconButton className={styles['btn-edit']} onClick={handleEditClick}>
                        <IcEditCircle />
                    </IconButton>
                )}
                {editMode && (
                    <IconButton
                        className={styles['btn-edit']}
                        // type='submit'
                        onClick={(e) => { e.preventDefault(); submitSection(); }}
                    >
                        <CheckIcon style={{ fill: "white" }} />
                    </IconButton>
                )}
            </div>
            <div className={styles['section-item']}>
                <div className={styles['item-title']}>{t('admin.top.content-1')}</div>
                <div className={styles['banner-question']}>
                    <Controller
                        name="question"  
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <div className={styles['frame-message']}>
                                <Editor 
                                    setEditorHtml={onChange} 
                                    editorHtml={value} 
                                    canEdit={editMode}/>
                            </div>
                        )}
                    />
                </div>
            </div>
            <div className={styles['section-item']}>
                <div className={styles['item-title']}>{t('admin.top.content-2')}</div>
                <div className={styles['banner-intro']}>
                    <Controller
                        name="intro"  
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <div className={styles['frame-message']}>
                                <Editor 
                                    setEditorHtml={onChange} 
                                    editorHtml={value}
                                    canEdit={editMode} 
                                />
                            </div>
                        )}
                    />
                </div>
            </div>
            <div className={styles['video-url']}>
                <span className={styles['item-title']}><IcLink />{t('admin.top.video')}</span>
                <div>
                    {showEditTitle &&
                        <Input
                            props={{
                                control: control,
                                name: "video_url",
                                label: "",
                                setValue: setValue,
                                canEdit: editMode
                            }}
                        />
                    }
                </div>
            </div>
            <div className={styles['section-item']}>
                <div className={styles['item-title']}>{t('admin.top.system-introduce')}</div>
                <div className={styles['banner-sys-intro']}>
                    <Controller
                        name="sysIntro"  
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <div className={styles['frame-message']}>
                                <Editor 
                                    setEditorHtml={onChange} 
                                    editorHtml={value}
                                    canEdit={editMode} 
                                />
                            </div>
                        )}
                    />
                </div>
            </div>
        </div>
    );
}

export default BannerSection;