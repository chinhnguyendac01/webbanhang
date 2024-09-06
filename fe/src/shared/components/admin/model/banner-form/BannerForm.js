import { useState, useEffect } from 'react';
import Input from '../../common/input/Input'
import { useForm, Controller } from 'react-hook-form';
import IcEditCircle from 'shared/components/icons/IcEditCircle';
import { IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { useTranslation } from 'react-i18next';
import styles from './BannerForm.module.scss'
const BannerForm = ({ data, onSave = () => { }, sectionName }) => {
    const [editMode, setEditMode] = useState(false);
    const { t } = useTranslation();
    const handleEditClick = () => {
        setEditMode(true);
    };

    const { setValue, getValues, control, formState: { errors } } = useForm({
        criteriaMode: "all",
        defaultValues: {
            title: '',
            subTitle: "",
            text: "",
            content: '',
            id: '',
            section_id: '',
            locale_id: '',
        }
    });
    useEffect(() => {
        if (data?.id) {
            setValue('content', data?.text || '');
            setValue('title', data?.title);
            setValue('id', data?.id);
            setValue('section_id', data?.section_id);
            setValue('locale_id', data?.locale_id);
            setValue('subTitle', data?.content?.subTitle || "")
            // setValue('text', data?.content?.text || "")
            setEditMode(false); // Reset edit mode when updating props
        }
    }, [data, setValue]);
    const submitData = () => {
        const submitData = {
            title: getValues("title"),
            id: getValues("id"),
            section_id: getValues("section_id"),
            locale_id: getValues("locale_id"),
            content: {
                subTitle: getValues("subTitle"),
            }
        }
        onSave(submitData);
        setEditMode(false);
    }
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
                        onClick={(e) => { e.preventDefault(); submitData(); }}
                    >
                        <CheckIcon style={{ fill: "white" }} />
                    </IconButton>
                )}
            </div>
            <div style={{ padding: "0 80px" }}>
                <div style={{ marginBottom: "24px" }}>
                    <Input props={{ control: control, name: "title", setValue: setValue, errors: errors, canEdit: editMode }} />
                </div>
                <div style={{ marginBottom: "24px" }}>
                    <Input props={{ control: control, name: "subTitle", label: "", setValue: setValue, errors: errors, canEdit: editMode }} />
                </div>
            </div>


            {/* <div>
                <Input props={{ control: control, name: "text", label: t("admin.company.top-content"), setValue: setValue, errors: errors, canEdit: editMode }} />
            </div> */}
        </>
    )
}

export default BannerForm
