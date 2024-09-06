import React, { useState } from 'react';
import styles from './DialogAddCompany.module.scss';
import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import IcClose from '../../../components/icons/IcClose';
import { useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';
import DropDownImage from '../dropdown-image/DropDownImage';
import Validator from '../../../../utils/Validator';
import { useTranslation } from 'react-i18next';
import FooterAction from 'redux/footer/action';
import Utils from 'utils/Utils';
import TabLocale from '../tab-locale/TabLocale';
import TabSwitcher from 'shared/components/admin/tab-switcher/TabSwitcher';
export default function DialogInfoContact(props) {
    const { t } = useTranslation();
    const { openDialog, handleClose, selectedlocation } = props;
    const dispatch = useDispatch();
    const [selectedLocale, setSelectedLocale] = useState('JP');
    //
    const [currentTab, setCurrentTab] = useState(0);
    const [disabledTabs, setDisabledTabs] = useState([]);
    const [datacompany, setdatacompany] = useState([]);
    const {
        control,
        setValue,
        register,
        handleSubmit,
        getValues,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            icon_id: '',
            name: '',
            value: '',
        },
    });
    //
    const handleCancel = () => {};
    const getLocaleFromTab = (tabIndex) => {
        switch (tabIndex) {
            case 0:
                return 'JP';
            case 1:
                return 'VN';
            case 2:
                return 'EN';
            default:
                return 'JP';
        }
    };
    const getOtherTabs = (currentTab) => {
        const allTabs = ['JP', 'VN', 'EN'];
        const otherTabs = allTabs.filter(
            (tab) => tab !== getLocaleFromTab(currentTab),
        );
        setDisabledTabs(otherTabs);
    };
    const [localeFormData, setLocaleFormData] = useState({ json: [] });
    // const handleSelectLocale = (text) => {
    //      setSelectedLocale(text)
    // }
    //
    const getIcon = () => {
        try {
            dispatch({
                type: HomePageAction.GET_TECHNOLOGY_START,
                payload: '15',
            });
        } catch (error) {}
    };
    const listicon =
        useSelector((state) => state.HomePage.technologyData.data?.items) || [];
    //get Inquiry
    useEffect(() => {
        getIcon();
    }, []);
    const resetForm = () => {
        reset();
        setCurrentTab(0);
    };
    //fetch data
    const getContacts = () => {
        if (
            selectedlocation !== undefined &&
            selectedlocation !== null &&
            selectedlocation !== ''
        ) {
            dispatch({
                type: FooterAction.GET_CONTACT_START,
                payload: selectedlocation,
            });
        }
    };
    //addcontact
    const onSubmit = async (data) => {
        const currentItem = {
            locale: getLocaleFromTab(currentTab),
            name: data.name,
            value: data.value,
        };
        setLocaleFormData((prevData) => {
            return {
                json: [...prevData.json, currentItem],
            };
        });
        if (currentTab < 2) {
            setCurrentTab(currentTab + 1);
        } else {
            handleClose();
        }
        setdatacompany({
            location_id: selectedlocation,
            icon_id: data?.icon_id,
        });
    };
    useEffect(() => {
        const formattedData = { ...datacompany, ...localeFormData };
        if (localeFormData.json.length === 3) {
            try {
                dispatch({
                    type: FooterAction.ADD_COMPANY_START,
                    data: formattedData,
                    onSuccess: (data) => {
                        resetForm();
                        handleClose();
                        getContacts();

                        Utils.showSuccessToast({
                            message: <span>{t('message.updatesuccess')}</span>,
                        });
                    },
                    onError: (data) => {
                        resetForm();
                        handleClose();
                        getContacts();
                        Utils.showErrorToast({
                            message: <span>{t('message.updatefailed')}</span>,
                        });
                    },
                });
            } catch (error) {}
        }
    }, [localeFormData]);

    useEffect(() => {
        getOtherTabs(currentTab);
    }, [currentTab]);
    return (
        <>
            <Dialog
                className={styles['Dialog']}
                open={openDialog}
                onClose={() => {
                    handleClose();
                    resetForm();
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{
                    '.MuiPaper-root.MuiDialog-paper': {
                        maxHeight: 'initial',
                        maxWidth: 'initial',
                        overflow: 'initial',
                        borderRadius: '8px',
                    },
                }}
            >
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles['contactInfo']}
                >
                    <div className={styles['header-contact']}>
                        <span className={styles['title-contact']}>
                            {t('admin.addcompany.title')}
                        </span>
                        <span
                            className={styles['icon-close']}
                            onClick={() => {
                                handleClose();
                                resetForm();
                            }}
                        >
                            <IcClose width="14" height="14" color="#fff" />
                        </span>
                    </div>
                    <div className={styles['body-contact']}>
                        <TabSwitcher
                            onSelectTab={setCurrentTab}
                            activeTab={currentTab}
                            disabledTabs={disabledTabs}
                        />
                        <div className={styles['Frame-input']}>
                            <label className={styles['Label-input']}>
                                {t('admin.addcompany.icon')}
                            </label>
                            <Controller
                                name={`icon_id`}
                                control={control}
                                defaultValue=""
                                rules={{
                                    validate: {
                                        required: Validator.required(
                                            t('validator.require'),
                                        ),
                                    },
                                }}
                                render={({ field: { ref, ...rest } }) => (
                                    <div className="require-messange-position">
                                        <DropDownImage
                                            defaultValue="Image"
                                            options={listicon}
                                            selectedOption={rest.value}
                                            onOptionSelect={rest.onChange}
                                        />
                                        {errors.icon_id && (
                                            <span className="require-messange">
                                                {errors.icon_id.message}
                                            </span>
                                        )}
                                    </div>
                                )}
                            />
                        </div>
                        <div className={styles['Frame-input']}>
                            <label className={styles['Label-input']}>
                                {t('admin.addcompany.name')}
                            </label>
                            <Controller
                                name="name"
                                control={control}
                                rules={{
                                    validate: {
                                        required: Validator.required(
                                            t('validator.require'),
                                        ),
                                    },
                                }}
                                render={({ field: { ref, ...rest } }) => (
                                    <div className="require-messange-position">
                                        <input
                                            type="text"
                                            {...rest}
                                            className={styles['Style-input']}
                                        />
                                        {errors.name && (
                                            <span className="require-messange">
                                                {errors.name.message}
                                            </span>
                                        )}
                                    </div>
                                )}
                            />
                        </div>
                        <div className={styles['Frame-input']}>
                            <label className={styles['Label-input']}>
                                {t('admin.addcompany.value')}
                            </label>
                            <Controller
                                name="value"
                                control={control}
                                rules={{
                                    validate: {
                                        required: Validator.required(
                                            t('validator.require'),
                                        ),
                                    },
                                }}
                                render={({ field: { ref, ...rest } }) => (
                                    <div className="require-messange-position">
                                        <input
                                            type="text"
                                            {...rest}
                                            className={styles['Style-input']}
                                        />
                                        {errors.value && (
                                            <span className="require-messange">
                                                {errors.value.message}
                                            </span>
                                        )}
                                    </div>
                                )}
                            />
                        </div>

                        {/* <div className={styles['Frame-btn-submit']}>
                                   <button type='submit' className={styles['btn-submit']}>{t('admin.addcompany.submit')}</button>
                              </div> */}
                        <div className={styles['action']}>
                            {currentTab === 2 ? (
                                <>
                                    {/* <button className={styles['btn-cancel']} onClick={handleCancel}>
                                                  {t('admin.project.cancel')}
                                             </button> */}
                                    <button
                                        type="submit"
                                        className={styles['btn-submit']}
                                    >
                                        {t('admin.project.create')}
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        type="submit"
                                        className={styles['btn-submit']}
                                    >
                                        {t('admin.project.next')}
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </form>
            </Dialog>
        </>
    );
}
