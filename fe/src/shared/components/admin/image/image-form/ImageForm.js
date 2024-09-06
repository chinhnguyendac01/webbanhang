import React, { useState, useEffect } from 'react'
import DropDown from 'shared/components/dropdown/DropDown'
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
import styles from './index.module.scss'
import TabPagesMenu from '../../tab-menu/TabPagesMenu';
import { useDispatch, useSelector } from 'react-redux';
import ImageAction from 'redux/image/action';
import PageAction from 'redux/page/action';
import IcUpload from 'shared/components/icons/IcUpload';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const ImageForm = ({ onClick, defaultTab = "", defaultValue }) => {
    const history = useHistory();
    const { t, i18n } = useTranslation();
    const { selectedSections } = useSelector(state => state.Page);
    const [selectedPage, setSelectedPage] = useState(null);
    const [mappingSectionsData, setMappingSectionsData] = useState([])
    const [previewImage, setPreviewImage] = useState(null);
    const [defaultPage, setDefaultPage] = useState("")
    const dispatch = useDispatch();
    const handleSelectPage = (page) => {
        setSelectedPage(page)
    }
    useEffect(() => {
        if (defaultValue?.id) {
            setValue('section_id', defaultValue?.section_id);
            setValue('note', defaultValue?.note)
            setValue('image', defaultValue?.path)
            setPreviewImage(`${process.env.REACT_APP_STORAGE_URL}${defaultValue?.path}`)
        }
    }, [defaultValue])
    useEffect(() => {
        dispatch({
            type: PageAction.GET_SECTION_IN_PAGE_START,
            page: selectedPage
        })
    }, [selectedPage])
    useEffect(() => {
        if (selectedSections) {
            const newArray = selectedSections?.items?.map(
                item => (
                    { library_name: t(`admin.sectionsName.${item?.name}`), id: item?.section_id }
                )
            );
            setMappingSectionsData(newArray)
            setDefaultPage(selectedSections)
        }
    }, [selectedSections, i18n.language])
    const { handleSubmit, setValue, control, formState: { errors } } = useForm({
        criteriaMode: "all",
        defaultValues: {
            section_id: "",
            image: null,
            note: "",
        }
    });
    const handleOnSubmit = (data) => {
        onClick(data)
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        // setSelectedFile(file);
        const reader = new FileReader();
        reader.onload = (e) => {
            setPreviewImage(e.target.result);
        };
        reader.readAsDataURL(file);
        setValue('image', file)
    };
    return (
        <div style={{ padding: "0 80px" }}>
            <TabPagesMenu onClick={handleSelectPage} defaultTab={defaultTab} />
            <form onSubmit={handleSubmit(handleOnSubmit)}>

                <Controller
                    name="section_id"
                    control={control}
                    rules={{
                        required: "required",
                    }}
                    render={({ field: { ref, ...rest } }) => (
                        <div className={`require-messange-position ${styles['dropdown']}`}>
                            <DropDown
                                defaultValue={t(`admin.sectionsName.${defaultValue?.section}`) || ""}
                                options={mappingSectionsData}
                                selectedOption={rest.value}
                                onOptionSelect={rest.onChange}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="section_id"
                                render={({ message }) => (
                                    <span className="require-messange">
                                        {message}
                                    </span>
                                )}
                            />
                        </div>
                    )}
                />

                <div className={styles['input-container']}>
                    {previewImage ? (<>
                        <div className={styles['image-preview']}>
                            <img src={previewImage} alt="Preview" />
                        </div>
                    </>) : (<><div>{t('admin.image_form.add-photo')}</div></>)}

                    <Controller
                        name="image"
                        control={control}
                        rules={{
                            // required: t("accountForm.required"),
                        }}
                        render={({ field: { ref, ...rest } }) => (
                            <div className={`require-messange-position ${styles['dropdown']}`}>
                                <div className={styles['attach_label']}><IcUpload />{t('admin.image_form.attached-files')}</div>
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    accept="image/*"
                                    className={styles['upload-button']}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="image"
                                    render={({ message }) => (
                                        <span className="require-messange">
                                            {message}
                                        </span>
                                    )}
                                />
                            </div>
                        )}
                    />
                </div>
                {/* <div className={styles['input-container']}>
                    <Controller
                        name="note"
                        control={control}
                        rules={{
                            // required: t("accountForm.required"),
                            // validate: {
                            //     email: Validator.email
                            // }
                        }}
                        render={({ field: { ref, ...rest } }) => (
                            <div className={`require-messange-position`}>
                                <label>
                                    {"Ghi chú"}
                                </label>
                                <input
                                    type="text"
                                    {...rest}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="note"
                                    render={({ message }) => (
                                        <span className="require-messange">
                                            {message}
                                        </span>
                                    )}
                                />
                            </div>
                        )}
                    />
                </div> */}
                <div className={styles['input-container']} style={{ display: 'flex', justifyContent: "flex-end" }}>
                    <button type='button'
                        onClick={() => {
                            history.goBack();
                        }}
                        className={styles['btn-cancel']}>{t("common.cancel")}</button>
                    <button type='submit' className={styles['btn-submit']}>{t("common.submit")}</button>
                </div>
            </form>

        </div>
    )
}

export default ImageForm