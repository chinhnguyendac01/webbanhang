import styles from './index.module.scss'
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Editor from 'shared/components/editor/Editor';
import IcEdit from 'shared/components/icons/IcEdit';
import { IconButton } from '@mui/material';
import ImagePreview from '../../image-preview/ImagePreview';
import IcPlus from 'shared/components/icons/IcPlus';
import CheckIcon from '@mui/icons-material/Check';

const StaffingSection = ({ data, onSave }) => {
    const [editMode, setEditMode] = useState(false);
    const [cards, setCards] = useState(data.cards || []);
    const {
        control,
        setValue,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: '',
            id: '',
            section_id: '',
            locale_id: '',
            text: "",
        },
    });
    useEffect(() => {
        if (data?.id) {
            setValue('title', data?.title);
            setValue('id', data?.id);
            setValue('section_id', data?.section_id);
            setValue('locale_id', data?.locale_id);
            setValue('text', data?.content?.text || data?.content?.subtitle);
            setCards(data?.content?.cards)
            setEditMode(false);
        }
    }, [data, setValue]);
    const handleEditClick = () => {
        setEditMode(true);
    };
    const handleEditChange = (index, field, value) => {
        setCards((prevData) => {
            const newData = [...prevData];
            newData[index][field] = value;
            return newData;
        });
    };
    const handleAddRow = () => {
        setCards((prevData) => [...prevData, { title: '', description: '' }]);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const submitData = {
            id: getValues("id"),
            title: getValues("title"),
            section_id: getValues("section_id"),
            locale_id: getValues("locale_id"),
            content: {
                text: getValues("text"),
                cards: cards
            }
        }
        onSave(submitData);
        setEditMode(false);
    }
    const handleSubmitImage = (data, title) => {
        // console.log(data, title)
    }
    return (
        <>
            <div className={styles['Frame-btn-submit']}>
                {!editMode && (
                    <IconButton onClick={handleEditClick}>
                        <IcEdit />
                    </IconButton>
                )}
                {editMode && (
                    <IconButton onClick={(e) => { onSubmit(e); }}>
                        <CheckIcon />
                    </IconButton>
                )}
            </div>
            <div className={styles['Frame-input-content']}>

                <div className={styles['Styles-label']}>
                    <Controller
                        name="title"
                        control={control}
                        render={({ field: { ref, ...rest } }) => (
                            <div className={styles['frame-message']}>
                                <input onFocus={handleEditClick} {...rest} className={styles['Styles-input']} />
                            </div>
                        )}
                    />
                </div>
                <div className={styles['Editor-style']}>
                    <Controller
                        name="text"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <div className={styles['frame-message']}>
                                <Editor setEditorHtml={onChange} editorHtml={value} onFocus={(e) => { setEditMode(true); }} />
                                {errors.content && (
                                    <span className={styles['messange-error-content']}>
                                        {errors.content.message}
                                    </span>
                                )}
                            </div>
                        )}
                    />
                </div>
            </div>
            <div className={styles['Frame-input-content']}>
                <div style={{ textAlign: "center", fontSize: "20px", fontWeight: "700" }}>
                    Tag
                </div>
                {cards?.map((card, index) => (
                    <div key={index} style={{ display: "flex", flexDirection: "column", marginBottom: "24px" }}>

                        <div className={styles['input-wrapper']}>
                            <label className={styles['Styles-label']}>Tiêu đề</label>
                            <input className={styles['Styles-input']}
                                type='text'
                                value={card?.title}
                                onFocus={handleEditClick}
                                onChange={(e) => handleEditChange(index, 'title', e.target.value)}
                            />
                        </div>
                        <div className={styles['input-wrapper']}>
                            <label className={styles['Styles-label']}>Nội dung</label>
                            <input
                                className={styles['Styles-input']}
                                type='text'
                                value={card?.description}
                                onFocus={handleEditClick}
                                onChange={(e) => handleEditChange(index, 'description', e.target.value)}
                            />
                        </div>
                        <ImagePreview onSaveImage={(data) => { handleSubmitImage(data, index) }} />
                    </div>
                ))}

            </div >
            <div style={{ display: "flex", justifyContent: "center" }}>
                <IconButton onClick={handleAddRow} style={{ backgroundColor: "#FF8B13" }}>
                    <IcPlus />
                </IconButton>
            </div>
        </>
    )
}
StaffingSection.defaultProps = {
    data: {},
    onSave: () => { }
}
export default StaffingSection
