import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import styles from './BusinessSection.module.scss'
import Editor from 'shared/components/editor/Editor';
import Input from 'shared/components/admin/common/input/Input';
import { IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import IcEditCircle from 'shared/components/icons/IcEditCircle';

function BusinessSection({ props, onSave, itemName, sectionName, showEditTitle = true, itemTitle }) {

    const [editMode, setEditMode] = useState(false);

    const {
        control,
        setValue,
        formState: { errors },
        getValues
    } = useForm({
        defaultValues: {
            title: '',
            content: '',
            id: '',
            section_id: '',
            locale_id: '',
        },
    });

    useEffect(() => {
        if (props?.id) {
            setValue('content', props?.content || '');
            setValue('title', props?.title);
            setValue('id', props?.id);
            setValue('section_id', props?.section_id);
            setValue('locale_id', props?.locale_id);
            setEditMode(false);
        }
    }, [props, setValue])

    const submitSection = (data) => {
        const submitData = {
            title: getValues("title"),
            id: getValues("id"),
            section_id: getValues("section_id"),
            locale_id: getValues("locale_id"),
            content: getValues("content")
        }
        onSave(submitData);
        setEditMode(false);
    }

    const handleEditClick = () => {
        setEditMode(true);
    };

    return (  
        <div className={styles['business-section-wrapper']}>
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
            <div className={styles['section-content']}>
                <div className={styles['item']}>{itemTitle}</div>
                <div className={styles['section-title']}>
                    {showEditTitle &&
                        <Input
                            props={{
                                control: control,
                                name: "title",
                                label: "",
                                setValue: setValue,
                                errors: errors,
                                canEdit: editMode
                            }}
                        />
                    }
                </div>
                <div className={styles['item']}>{itemName}</div>
                <div className={styles['main-section-content']}>
                    <Controller
                        name="content"  
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

export default BusinessSection;