
import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Editor from 'shared/components/editor/Editor';
import styles from './index.module.scss';
import { useState } from 'react';
import IcEdit from 'shared/components/icons/IcEdit';
import { IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const VisionMissionEdit = ({ data, onSave }) => {
    const [editedData, setEditedData] = useState([]);
    const [editMode, setEditMode] = useState(false); // Track edit mode

    const handleEditClick = () => {
        setEditMode(true); // Set edit mode when "Edit" button is clicked
    };

    useEffect(() => {
        if (props?.id) {
            setEditMode(false);
        }
    }, [props]);

    const onSubmit = (e) => {
        e.preventDefault();
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

    return (
        <div className={styles['InformationTable']}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
            <div>
                <input />
            </div>
        </div>
    );
}

export default VisionMissionEdit
