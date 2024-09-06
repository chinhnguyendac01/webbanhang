import styles from './index.module.scss'
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IconButton } from '@mui/material';
import ImagePreview from '../../image-preview/ImagePreview';
import IcPlus from 'shared/components/icons/IcPlus';
import CheckIcon from '@mui/icons-material/Check';
import { useTranslation } from 'react-i18next';
import IcEditCircle from 'shared/components/icons/IcEditCircle';
const TagsEdit = ({ data, onSave }) => {
    const [editMode, setEditMode] = useState(false);
    const [cards, setCards] = useState(data.cards || []);
    const { t } = useTranslation();
    const {
        control,
        setValue,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm({
    });
    useEffect(() => {
        if (data) {
            setCards(data)
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
    // const handleAddRow = () => {
    //     setCards((prevData) => [...prevData, { title: '', description: '' }]);
    // };
    const onSubmit = () => {
        const submitData = {
            cards: [...cards],
        };
        onSave(submitData);
        setEditMode(false);
    }
    const handleUpdateCardImage = (index, newImage) => {
        setCards((prevData) => {
            const newData = [...prevData];
            newData[index].image = newImage;
            return newData;
        });
    };
    const handleSubmitImage = (data, index) => {
        handleUpdateCardImage(index, data);
    };
    return (
        <>
            <div className={styles['Frame-btn-submit']} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0", maxHeight: "30px" }}>
                <div style={{ textAlign: "center", width: "25%" }}></div>
                <div className={styles['section-title']} style={{ textAlign: "center", width: "50%" }}>{`Tags`}</div>
                {!editMode && (
                    <div style={{ width: "25%", display: "flex", justifyContent: "flex-end" }}>
                        <IconButton
                            className={styles['btn-edit']}
                            onClick={handleEditClick}>
                            <IcEditCircle />
                        </IconButton>
                    </div>

                )}
                {editMode && (
                    <div style={{ width: "25%", display: "flex", justifyContent: "flex-end" }}>
                        <IconButton
                            className={styles['btn-edit']}
                            onClick={(e) => {
                                e.preventDefault(); onSubmit();
                            }}
                        >
                            <CheckIcon style={{ fill: "white" }} />
                        </IconButton>
                    </div>
                )}
            </div>
            <div className={styles['Frame-input-content']}>

                {Array.isArray(cards) && cards?.map((card, index) => (
                    <div key={index} style={{ display: "flex", flexDirection: "column", marginTop: "24px", padding: "0 80px" }}>
                        <ImagePreview
                            onSaveImage={(data) => { handleSubmitImage(data, index) }}
                            defaultImage={`${process.env.REACT_APP_STORAGE_URL}${card?.image}`}
                            canEdit={editMode}
                        />

                        <div className={styles['input-wrapper']}>
                            <label className={styles['Styles-label']}>{t("common.title")}</label>
                            <input className={styles['Styles-input']}
                                type='text'
                                value={card?.title}
                                onFocus={handleEditClick}
                                onChange={(e) => handleEditChange(index, 'title', e.target.value)}
                                disabled={!editMode}
                            />
                        </div>
                        <div className={styles['input-wrapper']}>
                            <label className={styles['Styles-label']}>{t("common.content")}</label>
                            <input
                                className={styles['Styles-input']}
                                type='text'
                                value={card?.content}
                                onFocus={handleEditClick}
                                onChange={(e) => handleEditChange(index, 'content', e.target.value)}
                                disabled={!editMode}
                            />
                        </div>

                    </div>
                ))}

            </div >
            {/* <div style={{ display: "flex", justifyContent: "center" }}>
                <IconButton onClick={handleAddRow} style={{ backgroundColor: "#FF8B13" }}>
                    <IcPlus />
                </IconButton>
            </div> */}
        </>
    )
}
TagsEdit.defaultProps = {
    data: {},
    onSave: () => { }
}
export default TagsEdit
