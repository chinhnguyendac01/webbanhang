import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';
import { IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import IcPlus from 'shared/components/icons/IcPlus';
import IcEditCircle from 'shared/components/icons/IcEditCircle';
import ButtonPlus from '../../common/button-plus/ButtonPlus';
function CompanyInfoEditTable({ props, onSave, sectionName }) {
    const [editedData, setEditedData] = useState([]);
    const [editMode, setEditMode] = useState(false); // Track edit mode

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleEditChange = (index, field, value) => {
        setEditedData((prevData) => {
            const newData = [...prevData];
            newData[index][field] = value;
            return newData;
        });
    };

    const getRowClass = (index) => {
        return classnames({
            [styles['even-row']]: index % 2 === 0,
            [styles['odd-row']]: index % 2 !== 0,
        });
    };

    // const autoExpand = (e) => {
    //     try {
    //         const textarea = e.target;
    //         textarea.style.height = '20px';
    //         textarea.style.height = (textarea.scrollHeight) + 'px';
    //     } catch (error) {

    //     }
    // };
    const autoExpand = (element) => {
        try {
            const textarea = element.target;
            textarea.style.height = '20px';
            textarea.style.height = (textarea.scrollHeight) + 'px';
        } catch (error) {

        }

    };

    useEffect(() => {
        // Auto-expand textarea on initial render
        const textareas = document.querySelectorAll(`.${styles['content-column']} textarea`);
        textareas.forEach(autoExpand);
    }, [props?.content]);


    useEffect(() => {
        if (props?.id) {
            setEditedData(props?.content);
            setEditMode(false);
        }
    }, [props]);

    const onSubmit = (e) => {
        e.preventDefault();
        // Filter out items with null labels
        const filteredData = editedData.filter((item) => (item.label !== null && item.label !== "") || (item.value !== null && item.value !== ""));
        const data = {
            id: props?.id,
            title: props?.title,
            section_id: props?.section_id,
            locale_id: props?.locale_id,
            content: filteredData,
        };
        onSave(data);
        setEditMode(false);
    };

    const handleAddRow = () => {
        setEditedData((prevData) => {
            if (Array.isArray(prevData)) {
                return [...prevData, { label: '', value: '' }];
            } else {
                // If prevData is not an array, initialize it as a new array
                return [{ label: '', value: '' }];
            }
        });
    };

    return (
        <div className={styles['InformationTable']}>
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
                        onClick={(e) => { onSubmit(e); }}
                    >
                        <CheckIcon style={{ fill: "white" }} />
                    </IconButton>
                )}
            </div>
            <div style={{ padding: "0 80px" }}>
                <table className={styles['custom-table']} >
                    <tbody>
                        {Array.isArray(editedData) && editedData?.map((item, idx) => (
                            <tr key={idx} className={getRowClass(idx + 1)} >
                                <th className={styles['title-column']}>
                                    <input
                                        type="text"
                                        value={item?.label || ""}
                                        // onFocus={handleEditClick}
                                        onChange={(e) => handleEditChange(idx, 'label', e.target.value)}
                                        readOnly={!editMode}
                                    />
                                </th>
                                <td className={styles['content-column']}>
                                    <textarea
                                        wrap='none'
                                        type="text"
                                        value={item?.value || ""}
                                        onChange={(e) => handleEditChange(idx, 'value', e.target.value)}
                                        readOnly={!editMode}
                                        onInput={autoExpand}
                                        style={{
                                            overflowY: 'hidden',
                                        }}
                                    />

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", width: "100%" }}>
                    <div className={styles['btn-add-more']} style={{ display: "flex" }} onClick={(e) => handleAddRow()}>
                        <IcPlus />
                    </div>
                </div>
            </div>
        </div >
    );
}

CompanyInfoEditTable.defaultProps = {
    onSave: () => { },
}

export default CompanyInfoEditTable;
