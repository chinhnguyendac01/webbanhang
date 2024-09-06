import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './FormContact.module.scss';
import IcUpload from '../icons/IcUpload';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm, Controller } from 'react-hook-form';
import IcRadioCheck from '../icons/IcRadioCheck';
import IcRadioUnCheck from '../icons/IcRadioUnCheck';
import Validator from '../../../utils/Validator';
import FectSample from '../../../redux/contact/action';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '../dialog/Dialogcustom';
import DialogLoadingcustom from 'shared/components/dialog-loading/DialogLoading';
import { useTranslation } from 'react-i18next';
import useRouter from 'hooks/use-router';
import IcCheck from '../icons/IcCheck';
import IcUnCheck from '../icons/IcUnCheck';
import 'react-quill/dist/quill.core.css';
import { useHistory } from 'react-router-dom';
export default function FormContact() {
    const { t, i18n } = useTranslation();
    const route = useRouter();
    const dispatch = useDispatch();
    const fileInputRef = useRef(null);
    const [file, setFile] = useState();
    const [token, setToken] = useState('');
    const [openDialog, setOpenDiaLog] = React.useState(false);
    const loading = useSelector((state) => state?.Contact?.sampleData?.loading);
    const inputRef = useRef(null);

    const {
        control,
        setValue,
        getValues,
        reset,
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            companyname: '',
            addressWebsite: '',
            position: '',
            email: '',
            phone: '',
            content: '',
            file: '',
            idSystemType: '',
            idSubjectOfWork: '',
            idDevelopmentType: '',
            contentInquirySystemtype: '',
            contentInquirySubjectofwork: '',
            contentInquiryNotices: '',
            rules: false,
        },
    });
    const { locale } = useSelector((state) => state.App);
    const [recaptchaKey, setRecaptchaKey] = useState(0);
    const [captchaLanguage, setCaptchaLanguage] = useState(i18n.language);

    // const captchaRef = useRef(null);
    // useEffect(() => {
    //     setCaptchaLanguage(i18n.language);
    //     setRecaptchaKey((prevKey) => prevKey + 1);
    //     if (captchaRef.current) {
    //         captchaRef.current.reset();
    //     }
    // }, [i18n.language]);

    //type Inquiry
    // const [typeOfInquiry, setTypeOfInquiry] = useState("notices");
    const [showInputSystemType, setShowInputSystemType] = useState(false);
    const [showInputSubjectOfWork, setShowInputSubjectOfWork] = useState(false);
    const history = useHistory();
    //rules
    const [listrules, setListrules] = useState(false);
    const content = route.get('content');
    useEffect(() => {
        if (content) {
            setValue('content', t('contact.holon-content'));
            setValue('contentInquiryNotices', t('contact.holon-notices'));
            setTimeout(() => {
                inputRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center',
                });
            }, 1);
        } else {
            setValue('contentInquiryNotices', '');
            setValue('content', '');
        }
    }, [content]);
    const handleClose = () => {
        setOpenDiaLog(false);
    };

    const handleChooseFile = () => {
        fileInputRef.current.click();
    };
    function handleChange(event) {
        setFile(event.target.files[0]);
    }
    function onChange(value) {
        setToken(value);
    }
    const systemrequired = watch('idSystemType');
    const subjectofworkrequired = watch('idSubjectOfWork');
    const developmenttyperequired = watch('idDevelopmentType');
    const noticesrequired = watch('contentInquiryNotices');
    const rules = watch('rules');
    //catch rules input
    const rulesinput =
        !getValues('contentInquiryNotices') &&
        !getValues('idDevelopmentType') &&
        !getValues('idSubjectOfWork') &&
        !getValues('idSystemType');

    //submit
    const onSubmit = async (data) => {
        const dataContentInquiry = {
            Systemtype: watch('contentInquirySystemtype'),
            Subjectofwork: watch('contentInquirySubjectofwork'),
            Notices: watch('contentInquiryNotices'),
        };
        const idInquiry = {
            Systemtype:
                watch('idSystemType') === 'Other'
                    ? null
                    : watch('idSystemType'),
            Subjectofwork:
                watch('idSubjectOfWork') === 'Other2'
                    ? null
                    : watch('idSubjectOfWork'),
            DevelopmentType: watch('idDevelopmentType'),
        };
        if (token === '') {
            alert('あなたがロボットではないことを確認してください!');
            return;
        }
        if (!rules) {
            alert('規約をご確認ください!');
            return;
        }
        var formData = new FormData();
        formData.append('name', data.name);
        formData.append('contentinquiry', JSON.stringify(dataContentInquiry));

        formData.append('inquiry_id', JSON.stringify(idInquiry));
        formData.append('company_name', data.companyname);
        formData.append('email', data.email);
        formData.append('phone_number', data.phone);
        formData.append('position', data.position);
        formData.append('website', data.addressWebsite);
        formData.append('content', data.content);
        formData.append('notices', data.contentInquiryNotices);
        formData.append('inquiry', JSON.stringify(idInquiry));
        formData.append('other_1', data.contentInquirySystemtype);
        formData.append('other_2', data.contentInquirySubjectofwork);
        if (file) {
            formData.append('attachment_path', file);
        }

        formData.append('token', token);

        try {
            dispatch({
                type: FectSample.SEND_CONTACT_START,
                data: formData,
                onSuccess: (data) => {
                    reset();
                    setShowInputSystemType(false);
                    setShowInputSubjectOfWork(false);
                    setOpenDiaLog(!openDialog);
                },
            });
        } catch (error) {}
    };
    useEffect(() => {
        if (openDialog) {
            setTimeout(() => {
                setOpenDiaLog(false);
            }, 1000);
        }
    }, [openDialog]);

    //get Inquiry
    const getInquiry = () => {
        try {
            dispatch({
                type: FectSample?.GET_INQUIRY_START,
                locale: locale?.selected,
            });
        } catch (error) {}
    };
    //get Rules
    const getRules = () => {
        try {
            dispatch({
                type: FectSample?.GET_RULES_START,
                locale: locale?.selected,
            });
        } catch (error) {}
    };
    useEffect(() => {
        getInquiry();
        getRules();
    }, [locale]);
    const datainquiry =
        useSelector((state) => state?.Contact?.sampleData?.datainquiry) || [];
    const datarules = useSelector((state) => state?.Contact?.rules?.data);

    useEffect(() => {
        if (!showInputSystemType) {
            setValue('contentInquirySystemtype', '');
        }
        if (!showInputSubjectOfWork) {
            setValue('contentInquirySubjectofwork', '');
        }
    }, [showInputSystemType, showInputSubjectOfWork, setValue]);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles['Form_contact']}
        >
            <DialogLoadingcustom openDialog={loading} />
            <Dialog openDialog={openDialog} handleClose={handleClose} />
            <div className={styles['Flex-input']}>
                <div className={styles['List_input']}>
                    <div className={styles['Frame_input-rows']}>
                        <div className={styles['Frame_input']}>
                            <label className={styles['Frame_label']}>
                                <span className={styles['Name_input']}>
                                    {t('contact.name')}
                                </span>
                                <span className={styles['Require']}>*</span>
                            </label>
                            <Controller
                                name="name"
                                control={control}
                                rules={{
                                    validate: {
                                        required: Validator.required(
                                            t('validator.require'),
                                        ),
                                        maxlength: Validator.maxLengthh(
                                            100,
                                            `100${t('validator.maxlength')}`,
                                        ),
                                    },
                                }}
                                render={({ field: { ref, ...rest } }) => (
                                    <>
                                        <input
                                            type="text"
                                            {...rest}
                                            className={styles['Input_styles']}
                                        />
                                    </>
                                )}
                            />
                            {errors.name && (
                                <span className={styles['require-messange']}>
                                    {errors.name.message}
                                </span>
                            )}
                        </div>
                        <div className={styles['Frame_input']}>
                            <label className={styles['Frame_label']}>
                                <span className={styles['Name_input']}>
                                    {t('contact.companyName')}
                                </span>
                                <span className={styles['Require']}>*</span>
                            </label>
                            <Controller
                                name="companyname"
                                control={control}
                                rules={{
                                    validate: {
                                        required: Validator.required(
                                            t('validator.require'),
                                        ),
                                        maxlength: Validator.maxLengthh(
                                            100,
                                            `100${t('validator.maxlength')}`,
                                        ),
                                    },
                                }}
                                render={({ field: { ref, ...rest } }) => (
                                    <>
                                        <input
                                            type="text"
                                            {...rest}
                                            className={styles['Input_styles']}
                                        />
                                    </>
                                )}
                            />
                            {errors.companyname && (
                                <span className={styles['require-messange']}>
                                    {errors.companyname.message}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className={styles['Frame_input-rows']}>
                        <div className={styles['Frame_input']}>
                            <label className={styles['Frame_label']}>
                                <span className={styles['Name_input']}>
                                    {t('contact.email')}
                                </span>
                                <span className={styles['Require']}>*</span>
                            </label>
                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    validate: {
                                        required: Validator.required(
                                            t('validator.require'),
                                        ),
                                        email: Validator.email(
                                            t('validator.email'),
                                        ),
                                        maxlength: Validator.maxLengthh(
                                            100,
                                            `100${t('validator.maxlength')}`,
                                        ),
                                    },
                                }}
                                render={({ field: { ref, ...rest } }) => (
                                    <>
                                        <input
                                            type="text"
                                            {...rest}
                                            className={styles['Input_styles']}
                                        />
                                    </>
                                )}
                            />
                            {errors.email && (
                                <span className={styles['require-messange']}>
                                    {errors.email.message}
                                </span>
                            )}
                        </div>
                        <div className={styles['Frame_input']}>
                            <label className={styles['Frame_label']}>
                                <span className={styles['Name_input']}>
                                    {t('contact.position')}
                                </span>
                            </label>
                            <Controller
                                name="position"
                                control={control}
                                rules={{
                                    validate: {
                                        maxlength: Validator.maxLengthh(
                                            100,
                                            `100${t('validator.maxlength')}`,
                                        ),
                                    },
                                }}
                                render={({ field: { ref, ...rest } }) => (
                                    <div className="require-messange-position">
                                        <input
                                            type="text"
                                            {...rest}
                                            className={styles['Input_styles']}
                                        />
                                    </div>
                                )}
                            />
                            {errors.position && (
                                <span className={styles['require-messange']}>
                                    {errors.position.message}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className={styles['Frame_input-rows']}>
                        <div className={styles['Frame_input']}>
                            <label className={styles['Frame_label']}>
                                <span className={styles['Name_input']}>
                                    {t('contact.phoneNumber')}
                                </span>
                            </label>
                            <Controller
                                name="phone"
                                control={control}
                                rules={{
                                    validate: {
                                        maxlength: Validator.maxLengthh(
                                            100,
                                            `100${t('validator.maxlength')}`,
                                        ),
                                    },
                                }}
                                render={({ field: { ref, ...rest } }) => (
                                    <div className="require-messange-position">
                                        <input
                                            type="text"
                                            {...rest}
                                            className={styles['Input_styles']}
                                        />
                                    </div>
                                )}
                            />
                            {errors.phone && (
                                <span className={styles['require-messange']}>
                                    {errors.phone.message}
                                </span>
                            )}
                        </div>
                        <div className={styles['Frame_input']}>
                            <label className={styles['Frame_label']}>
                                <span className={styles['Name_input']}>
                                    {t('contact.website')}
                                </span>
                            </label>
                            <Controller
                                name="addressWebsite"
                                control={control}
                                rules={{
                                    validate: {
                                        maxlength: Validator.maxLengthh(
                                            100,
                                            `100${t('validator.maxlength')}`,
                                        ),
                                    },
                                }}
                                render={({ field: { ref, ...rest } }) => (
                                    <div className="require-messange-position">
                                        <input
                                            type="text"
                                            {...rest}
                                            className={styles['Input_styles']}
                                        />
                                    </div>
                                )}
                            />
                            {errors.addressWebsite && (
                                <span className={styles['require-messange']}>
                                    {errors.addressWebsite.message}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles['Frame_list-checkbox']}>
                    <div className={styles['Frame-checkbox']}>
                        <label className={styles['Frame_label']}>
                            <span className={styles['Name_input']}>
                                {t('contact.inquiry')}
                            </span>
                            <span className={styles['Require']}>*</span>
                        </label>
                        {/* Checkbox 1 */}
                        <div className={styles['Frame-list-checkbox']}>
                            <div className={styles['List_checkbox']}>
                                <div className={styles['Frame-checkbox-child']}>
                                    <label className={styles['Label-inquiry']}>
                                        ・ {t('contact.systemtype')}
                                    </label>
                                </div>
                                <div className={styles['List_checkbox-child']}>
                                    {datainquiry?.item16?.map((option) => (
                                        <div
                                            key={option.id}
                                            className={styles['Checkbox']}
                                        >
                                            <Controller
                                                name="idSystemType"
                                                control={control}
                                                rules={{
                                                    validate: {
                                                        required: () => {
                                                            if (rulesinput) {
                                                                return t(
                                                                    'validator.require',
                                                                );
                                                            }
                                                            return undefined;
                                                        },
                                                    },
                                                }}
                                                render={({
                                                    field: { ref, ...rest },
                                                }) => (
                                                    <input
                                                        {...rest}
                                                        type="radio"
                                                        id={option.id}
                                                        value={option.id}
                                                        checked={
                                                            getValues(
                                                                'idSystemType',
                                                            ) === option.id
                                                        }
                                                        onChange={() => {
                                                            setShowInputSystemType(
                                                                false,
                                                            );
                                                            setValue(
                                                                'idSystemType',
                                                                option.id,
                                                            );
                                                        }}
                                                    />
                                                )}
                                            />
                                            <label
                                                htmlFor={option.id}
                                                className={
                                                    styles['Label_checkbox']
                                                }
                                            >
                                                <span
                                                    className={
                                                        styles['Icon_check']
                                                    }
                                                >
                                                    <IcRadioCheck />
                                                </span>
                                                <span
                                                    className={
                                                        styles['Icon_uncheck']
                                                    }
                                                >
                                                    <IcRadioUnCheck />
                                                </span>
                                            </label>
                                            <label
                                                htmlFor={option.id}
                                                className={
                                                    styles['Text_checkbox']
                                                }
                                            >
                                                {option.library_name}
                                            </label>
                                        </div>
                                    ))}
                                    <div
                                        className={styles['Checkbox']}
                                        style={{ alignItems: 'flex-end' }}
                                    >
                                        <Controller
                                            name="idSystemType"
                                            control={control}
                                            render={({
                                                field: { ref, ...rest },
                                            }) => (
                                                <input
                                                    {...rest}
                                                    type="radio"
                                                    id="Other"
                                                    value="Other"
                                                    checked={
                                                        getValues(
                                                            'idSystemType',
                                                        ) === 'Other'
                                                    }
                                                    onChange={() => {
                                                        // setTypeOfInquiry("system type")
                                                        setShowInputSystemType(
                                                            !showInputSystemType,
                                                        );
                                                        // setShowInputSubjectOfWork(false);
                                                        setValue(
                                                            'idSystemType',
                                                            'Other',
                                                        );
                                                    }}
                                                />
                                            )}
                                        />
                                        <label
                                            htmlFor="Other"
                                            className={styles['Label_checkbox']}
                                        >
                                            <span
                                                className={styles['Icon_check']}
                                            >
                                                <IcRadioCheck />
                                            </span>
                                            <span
                                                className={
                                                    styles['Icon_uncheck']
                                                }
                                            >
                                                <IcRadioUnCheck />
                                            </span>
                                        </label>

                                        <label
                                            htmlFor="Other"
                                            className={styles['Text_checkbox']}
                                        >
                                            {t('contact.other')}
                                        </label>

                                        <Controller
                                            name="contentInquirySystemtype"
                                            control={control}
                                            render={({ field }) =>
                                                showInputSystemType ? (
                                                    <input
                                                        type="text"
                                                        {...field}
                                                        className={
                                                            styles[
                                                                'input-other'
                                                            ]
                                                        }
                                                        placeholder={t(
                                                            'contact.other',
                                                        )}
                                                    />
                                                ) : null
                                            }
                                        />
                                    </div>
                                    {/* {errors.contentInquirySystemtype && (
                                        <span className={styles["require-messange-other"]}>
                                            {errors.contentInquirySystemtype.message}
                                        </span>
                                    )} */}
                                </div>
                            </div>

                            {/* Checkbox2 */}

                            <div className={styles['List_checkbox']}>
                                <div className={styles['Frame-checkbox-child']}>
                                    <label className={styles['Label-inquiry']}>
                                        ・{t('contact.subjectofwork')}
                                    </label>
                                </div>
                                <div className={styles['List_checkbox-child']}>
                                    {datainquiry?.item17?.map((option) => (
                                        <div
                                            key={option.id}
                                            className={styles['Checkbox']}
                                        >
                                            <Controller
                                                name="idSubjectOfWork"
                                                control={control}
                                                rules={{
                                                    validate: {
                                                        required: () => {
                                                            if (rulesinput) {
                                                                return t(
                                                                    'validator.require',
                                                                );
                                                            }
                                                            return undefined;
                                                        },
                                                    },
                                                }}
                                                render={({
                                                    field: { ref, ...rest },
                                                }) => (
                                                    <input
                                                        {...rest}
                                                        type="radio"
                                                        id={option.id}
                                                        value={option.id}
                                                        data-inquiry-type="subject of work"
                                                        checked={
                                                            getValues(
                                                                'idSubjectOfWork',
                                                            ) === option.id
                                                        }
                                                        onChange={() => {
                                                            setShowInputSubjectOfWork(
                                                                false,
                                                            );
                                                            setValue(
                                                                'idSubjectOfWork',
                                                                option.id,
                                                            );
                                                        }}
                                                    />
                                                )}
                                            />
                                            <label
                                                htmlFor={option.id}
                                                className={
                                                    styles['Label_checkbox']
                                                }
                                            >
                                                <span
                                                    className={
                                                        styles['Icon_check']
                                                    }
                                                >
                                                    <IcRadioCheck />
                                                </span>
                                                <span
                                                    className={
                                                        styles['Icon_uncheck']
                                                    }
                                                >
                                                    <IcRadioUnCheck />
                                                </span>
                                            </label>
                                            <label
                                                htmlFor={option.id}
                                                className={
                                                    styles['Text_checkbox']
                                                }
                                            >
                                                {option.library_name}
                                            </label>
                                        </div>
                                    ))}
                                    <div
                                        className={styles['Checkbox']}
                                        style={{ alignItems: 'flex-end' }}
                                    >
                                        <Controller
                                            name="idSubjectOfWork"
                                            control={control}
                                            rules={{
                                                validate: {
                                                    required: () => {
                                                        if (rulesinput) {
                                                            return t(
                                                                'validator.require',
                                                            );
                                                        }
                                                        return undefined;
                                                    },
                                                },
                                            }}
                                            render={({
                                                field: { ref, ...rest },
                                            }) => (
                                                <input
                                                    {...rest}
                                                    type="radio"
                                                    id="Other2"
                                                    value="Other2"
                                                    checked={
                                                        getValues(
                                                            'idSubjectOfWork',
                                                        ) === 'Other2'
                                                    }
                                                    onChange={() => {
                                                        setShowInputSubjectOfWork(
                                                            !showInputSubjectOfWork,
                                                        );

                                                        setValue(
                                                            'idSubjectOfWork',
                                                            'Other2',
                                                        );
                                                    }}
                                                />
                                            )}
                                        />
                                        <label
                                            htmlFor="Other2"
                                            className={styles['Label_checkbox']}
                                        >
                                            <span
                                                className={styles['Icon_check']}
                                            >
                                                <IcRadioCheck />
                                            </span>
                                            <span
                                                className={
                                                    styles['Icon_uncheck']
                                                }
                                            >
                                                <IcRadioUnCheck />
                                            </span>
                                        </label>

                                        <label
                                            htmlFor="Other2"
                                            className={styles['Text_checkbox']}
                                        >
                                            {t('contact.other')}
                                        </label>

                                        <Controller
                                            name="contentInquirySubjectofwork"
                                            control={control}
                                            render={({ field }) =>
                                                showInputSubjectOfWork ? (
                                                    <input
                                                        type="text"
                                                        {...field}
                                                        className={
                                                            styles[
                                                                'input-other'
                                                            ]
                                                        }
                                                        placeholder={t(
                                                            'contact.other',
                                                        )}
                                                    />
                                                ) : null
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* checkbox3 */}
                            <div className={styles['List_checkbox']}>
                                <div className={styles['Frame-checkbox-child']}>
                                    <label className={styles['Label-inquiry']}>
                                        ・{t('contact.developmenttype')}
                                    </label>
                                </div>
                                <div
                                    className={
                                        styles['List_checkbox-child-second']
                                    }
                                >
                                    {datainquiry?.item18?.map((option) => (
                                        <div
                                            key={option.id}
                                            className={styles['Checkbox']}
                                        >
                                            <Controller
                                                name="idDevelopmentType"
                                                control={control}
                                                rules={{
                                                    validate: {
                                                        required: () => {
                                                            if (rulesinput) {
                                                                return t(
                                                                    'validator.require',
                                                                );
                                                            }
                                                            return undefined;
                                                        },
                                                    },
                                                }}
                                                render={({
                                                    field: { ref, ...rest },
                                                }) => (
                                                    <input
                                                        {...rest}
                                                        type="radio"
                                                        id={option.id}
                                                        value={option.id}
                                                        data-inquiry-type="development type"
                                                        checked={
                                                            getValues(
                                                                'idDevelopmentType',
                                                            ) === option.id
                                                        }
                                                        onChange={() =>
                                                            setValue(
                                                                'idDevelopmentType',
                                                                option.id,
                                                            )
                                                        }
                                                    />
                                                )}
                                            />
                                            <label
                                                htmlFor={option.id}
                                                className={
                                                    styles['Label_checkbox']
                                                }
                                            >
                                                <span
                                                    className={
                                                        styles['Icon_check']
                                                    }
                                                >
                                                    <IcRadioCheck />
                                                </span>
                                                <span
                                                    className={
                                                        styles['Icon_uncheck']
                                                    }
                                                >
                                                    <IcRadioUnCheck />
                                                </span>
                                            </label>
                                            <label
                                                htmlFor={option.id}
                                                className={
                                                    styles['Text_checkbox']
                                                }
                                            >
                                                {option.library_name}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* checkbox 4 */}
                            <div className={styles['List_checkbox']}>
                                <div className={styles['Frame-checkbox-child']}>
                                    <label className={styles['Label-inquiry']}>
                                        ・{t('contact.notices')}
                                    </label>
                                </div>
                                <div>
                                    <Controller
                                        name="contentInquiryNotices"
                                        control={control}
                                        render={({ field }) => (
                                            <input
                                                type="text"
                                                {...field}
                                                className={
                                                    styles['input-other']
                                                }
                                                placeholder={t('contact.other')}
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {systemrequired ||
                    subjectofworkrequired ||
                    developmenttyperequired ||
                    noticesrequired ? (
                        ''
                    ) : (
                        <span className={styles['require-messange']}>
                            {errors.idDevelopmentType?.message}
                        </span>
                    )}
                </div>

                <div className={styles['Frame_input-big']}>
                    <label className={styles['Frame_label']}>
                        <span className={styles['Name_input']}>
                            {t('contact.question')}
                        </span>
                        <span className={styles['Require']}>*</span>
                    </label>

                    <Controller
                        name="content"
                        rules={{
                            validate: {
                                required: Validator.required(
                                    t('validator.require'),
                                ),
                            },
                        }}
                        control={control}
                        render={({ field: { ref, ...rest } }) => (
                            <div className={styles['Frame-message-textarea']}>
                                <textarea
                                    ref={inputRef}
                                    {...rest}
                                    className={styles['Input_styles-big']}
                                />
                                {errors.content && (
                                    <span
                                        className={styles['require-messange']}
                                    >
                                        {errors.content.message}
                                    </span>
                                )}
                            </div>
                        )}
                    />
                </div>

                <div className={styles['Frame_input-cv']}>
                    <label className={styles['Label_cv-frame']}>
                        <span className={styles['Icon_upload']}>
                            <IcUpload width="20" height="20" />
                        </span>
                        <span className={styles['Cv_upload-name']}>
                            {t('contact.attachment')}
                        </span>
                    </label>
                    <Controller
                        name="file"
                        control={control}
                        render={({ field: { ref, ...rest } }) => (
                            <input
                                accept=".pdf, .docx"
                                {...rest}
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={handleChange}
                            />
                        )}
                    />

                    <div
                        className={styles['Input_styles-div']}
                        onClick={handleChooseFile}
                    >
                        {file ? (
                            <span className={styles['Style_text-file']}>
                                {file?.name}
                            </span>
                        ) : (
                            <span className={styles['Style_text-file']}>
                                {t('contact.noFileChosen')}
                            </span>
                        )}
                    </div>
                </div>
                <div>
                    <ReCAPTCHA
                        // key={recaptchaKey}
                        badge="inline"
                        sitekey={process.env.REACT_APP_KEY_RECAPTCHA}
                        onChange={onChange}
                        // hl={captchaLanguage === "JP" ? "ja" : captchaLanguage === "VN" ? "vi" : "en-US" }
                        hl="ja"
                    />
                </div>
                <div className={styles['Rules']}>
                    <div>
                        <Controller
                            name="rules"
                            control={control}
                            render={({ field: { ref, ...rest } }) => (
                                <input
                                    id="rules"
                                    {...rest}
                                    onChange={(e) =>
                                        setValue('rules', e.target.checked)
                                    }
                                    type="checkbox"
                                    checked={getValues('rules') === true}
                                />
                            )}
                        />
                        <label
                            htmlFor="rules"
                            className={styles['Label_rules']}
                        >
                            <span className={styles['Icon_check']}>
                                <IcCheck />
                            </span>
                            <span className={styles['Icon_uncheck']}>
                                <IcUnCheck />
                            </span>
                        </label>
                    </div>
                    {locale.selected === 'VN' ? (
                        <span className={styles['Text_rules']}>
                            Tôi đồng ý với các {''}
                            <span
                                onClick={() => setListrules(!listrules)}
                                className={styles['Text_open-rules']}
                                style={{ marginRight: '3px' }}
                            >
                                Chính Sách Bảo Mật
                            </span>
                            {''}
                            của công ty
                        </span>
                    ) : (
                        ''
                    )}
                    {locale.selected === 'JP' ? (
                        <span className={styles['Text_rules']}>
                            <span
                                onClick={() => setListrules(!listrules)}
                                className={styles['Text_open-rules']}
                                style={{ marginRight: '3px' }}
                            >
                                個人情報の取り扱い
                            </span>
                            {''}
                            に同意する
                        </span>
                    ) : (
                        ''
                    )}
                </div>

                {listrules ? (
                    <div className={styles['Frame_rules']}>
                        <ul className={styles['List_rules']}>
                            <div
                                className="view ql-editor"
                                dangerouslySetInnerHTML={{
                                    __html: datarules?.data,
                                }}
                            />
                        </ul>
                    </div>
                ) : (
                    <></>
                )}
            </div>
            <div className={styles['Frame_btn-job']}>
                <button type="submit" className={styles['Btn_job']}>
                    {t('contact.submit')}
                </button>
            </div>
        </form>
    );
}
