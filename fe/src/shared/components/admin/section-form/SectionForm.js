import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Editor from 'shared/components/editor/Editor';
import styles from './SectionForm.module.scss';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import IcEditCircle from 'shared/components/icons/IcEditCircle';
import Input from '../common/input/Input';
const SectionForm = ({ props, onSave, formTitle = "", showEditTitle = true, sectionName = "" }) => {
    const [editMode, setEditMode] = useState(false); // Track edit mode
    const {
        control,
        setValue,
        handleSubmit,
        formState: { errors },
        getValues,
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
        if (props) {
            setValue('content', props?.text || '');
            setValue('title', props?.title);
            setValue('id', props?.id);
            setValue('section_id', props?.section_id);
            setValue('locale_id', props?.locale_id);
            setEditMode(false); // Reset edit mode when updating props
        }
    }, [props, setValue]);
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
    };

    const handleEditClick = () => {
        setEditMode(true);
    };
    return (
        <>
            <div className={styles['Frame-btn-submit']} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", maxHeight: "30px", paddingRight: "80px" }}>
                <div className={styles['section-title']}>{sectionName}</div>
                {!editMode && (
                    <IconButton
                        className={styles['btn-edit']}
                        onClick={handleEditClick}>
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
            <div className={styles['Frame-input-content']}>
                <div className={styles['Styles-label']}>
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
                <div className={styles['Editor-style']}>
                    <Controller
                        name="content"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <div className={styles['frame-message']}>
                                <Editor
                                    setEditorHtml={onChange}
                                    editorHtml={value}
                                    canEdit={editMode}
                                // onFocus={(e) => { setEditMode(true); }}
                                />
                            </div>
                        )}
                    />
                </div>
            </div>
            {/* </form > */}
        </>

    );
};

export default SectionForm;
