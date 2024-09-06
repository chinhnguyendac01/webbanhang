import React, { useState, useEffect } from 'react';
import Input from '../../common/input/Input';
import { useForm, Controller } from 'react-hook-form';
import IcEditCircle from 'shared/components/icons/IcEditCircle';
import { IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import styles from './ModelInfoTable.module.scss';
import IcPlus from 'shared/components/icons/IcPlus';

const ModelInfoTable = ({ data, onSave = () => { }, sectionName }) => {
    const [editMode, setEditMode] = useState(false);
    const [dataArr, setDataArr] = useState([]);
    const handleEditClick = () => {
        setEditMode(true);
    };
    const { setValue, getValues, control, formState: { errors }, handleSubmit } = useForm({
        criteriaMode: 'all',
        defaultValues: {
            title: '',
            id: '',
            section_id: '',
            locale_id: '',
        },
    });

    useEffect(() => {
        if (data?.id) {
            setValue('title', data?.title);
            setValue('id', data?.id);
            setValue('section_id', data?.section_id);
            setValue('locale_id', data?.locale_id);
            setDataArr(data?.content?.data);
            setEditMode(false);
        }
    }, [data, setValue]);

    const handleAddRow = () => {
        const newDataArr = [...dataArr, ''];
        setDataArr(newDataArr);
    };
    const handleEditChange = (index, value) => {
        setDataArr((prevData) => {
            const newData = [...prevData];
            newData[index] = value;
            return newData;
        });
    };
    const onSubmit = () => {
        const filteredData = dataArr.filter((item) => item !== null && item !== "");
        const data = {
            title: getValues("title"),
            id: getValues("id"),
            section_id: getValues("section_id"),
            locale_id: getValues("locale_id"),
            content: {
                data: filteredData
            },
        };

        onSave(data);
        setEditMode(false);
    };

    return (
        <>
            <div className={styles['Frame-btn-submit']} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", maxHeight: "30px" }}>
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
                        onClick={(e) => {
                            e.preventDefault();
                            onSubmit();
                        }}
                    >
                        <CheckIcon style={{ fill: 'white' }} />
                    </IconButton>
                )}
            </div>
            <div style={{ padding: "0 80px" }}>
                <table className={styles['table-data']} >
                    <tbody>
                        {Array.isArray(dataArr) &&
                            dataArr?.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <input
                                            className={styles['table-input']}
                                            type="text"
                                            value={item || ""}
                                            onChange={(e) => handleEditChange(index, e.target.value)}
                                            readOnly={!editMode}
                                        />
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '20px', width: "100%" }}>
                    <div className={styles['btn-add-more']} style={{ display: "flex" }} onClick={handleAddRow}>
                        <IcPlus />
                    </div>
                </div>
            </div>


        </>
    );
};

export default ModelInfoTable;
