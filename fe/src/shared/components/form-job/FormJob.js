import React, { useState, useRef, useEffect } from 'react';
import styles from './FormJob.module.scss';
import IcUpload from '../icons/IcUpload';
import IcCheck from '../icons/IcCheck';
import IcUnCheck from '../icons/IcUnCheck';
import ReCAPTCHA from 'react-google-recaptcha';
import KeyCapcha from '../../../';
import { useForm, Controller } from 'react-hook-form';
import Validator from '../../../utils/Validator';
import FectSample from '../../../redux/candidate/action';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '../dialog/Dialogcustom';
import DialogLoadingcustom from 'shared/components/dialog-loading/DialogLoading';
import { useTranslation } from 'react-i18next';
export default function FormJob(props) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [openDialog, setOpenDiaLog] = React.useState(false);
    const handleClose = () => {
        setOpenDiaLog(false);
    };
    const { positionId } = props;
    const loading = useSelector(
        (state) => state?.Candidate?.sampleData?.loading,
    );
    const {
        control,
        setValue,
        getValues,
        register,
        reset,
        handleSubmit,
        watch,

        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            content: '',
            file: '',
            rules: '',
        },
    });
    const [listrules, setListrules] = useState(false);
    const fileInputRef = useRef(null);
    const [file, setFile] = useState();
    const [token, setToken] = useState('');

    function handleChange(event) {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    }
    const handleChooseFile = () => {
        fileInputRef.current.click();
    };

    const onSubmit = async (data) => {

        if (token === '') {
            alert('Verify You Are Not a Robot!');
            return;
        }
        var formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('phone_number', data.phone);
        formData.append('position_id', positionId);
        formData.append('content', data.content);
        if (file) {
            formData.append('cv_path', file);
        }

        formData.append('token', token);

        try {
            dispatch({
                type: FectSample.SEND_CANDIDATE_START,
                data: formData,
                onSuccess: (data) => {
                    reset();
                    setOpenDiaLog(!openDialog);
                },
            });
        } catch (error) { }
    };
    useEffect(() => {
        if (openDialog) {
            setTimeout(() => {
                setOpenDiaLog(false);
            }, 1000);
        }
    }, [openDialog]);
    function onChange(value) {
        setToken(value);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles['Form_job']}>
            <DialogLoadingcustom openDialog={loading} />
            <Dialog openDialog={openDialog} handleClose={handleClose} />
            <div className={styles['Form_job-frame']}>
                <h1 className={styles['Title_form-job']}>{t("formcandidate.title")}</h1>
                <div className={styles['Input_frame']}>
                    <label className={styles['Label_frame']}>
                        <span className={styles['Name_input']}>{t("formcandidate.name")}</span>
                        <span className={styles['Require']}>*</span>
                    </label>
                    <Controller
                        name="name"
                        control={control}
                        rules={{
                            validate: {
                                required: Validator.required(t('validator.require')),

                            },
                        }}
                        render={({ field: { ref, ...rest } }) => (
                            <div className="require-messange-position">
                                <input
                                    type="text"
                                    {...rest}
                                    className={styles['Input_styles']}
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
                <div className={styles['Input_frame']}>
                    <label className={styles['Label_frame']}>
                        <span className={styles['Name_input']}>{t("formcandidate.email")}</span>
                        <span className={styles['Require']}>*</span>
                    </label>
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            validate: {
                                required: Validator.required(t('validator.require')),
                                email: Validator.email(t('validator.email')),
                            },
                        }}
                        render={({ field: { ref, ...rest } }) => (
                            <div className="require-messange-position">
                                <input
                                    {...rest}
                                    className={styles['Input_styles']}
                                />
                                {errors.email && (
                                    <span className="require-messange">
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>
                        )}
                    />
                </div>
                <div className={styles['Input_frame']}>
                    <label className={styles['Label_frame']}>
                        <span className={styles['Name_input']}>{t("formcandidate.phone")}</span>
                        <span className={styles['Require']}>*</span>
                    </label>
                    <Controller
                        name="phone"
                        control={control}
                        rules={{
                            validate: {
                                required: Validator.required(t('validator.require')),
                                phone: Validator.phone(t('validator.phone')),
                            },
                        }}
                        render={({ field: { ref, ...rest } }) => (
                            <div className="require-messange-position">
                                <input
                                    {...rest}
                                    className={styles['Input_styles']}
                                />
                                {errors.phone && (
                                    <span className="require-messange">
                                        {errors.phone.message}
                                    </span>
                                )}
                            </div>
                        )}
                    />
                </div>
                <div className={styles['Input_frame']}>
                    <label className={styles['Label_frame']}>
                        <span className={styles['Name_input']}>{t("formcandidate.content")}</span>
                        <span className={styles['Require']}>*</span>
                    </label>
                    <Controller
                        name="content"
                        control={control}
                        rules={{
                            validate: {
                                required: Validator.required(t('validator.require')),
                            },
                        }}
                        render={({ field: { ref, ...rest } }) => (
                            <div className="require-messange-position">
                                <input
                                    {...rest}
                                    className={styles['Input_styles']}
                                />
                                {errors.content && (
                                    <span className="require-messange">
                                        {errors.content.message}
                                    </span>
                                )}
                            </div>
                        )}
                    />
                </div>
                <div className={styles['Input_frame']}>
                    <label className={styles['Label_cv-frame']}>
                        <span className={styles['Icon_upload']}>
                            <IcUpload />
                        </span>
                        <span className={styles['Cv_upload-name']}>
                            {t("formcandidate.file")}
                        </span>
                        <span className={styles['Cv_upload-files']}>
                            (.pdf, .docx)
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
                                {t("formcandidate.message-file")}
                            </span>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles['captcha']}>
                <ReCAPTCHA
                    badge="inline"
                    sitekey={process.env.REACT_APP_KEY_RECAPTCHA}
                    onChange={onChange}
                    hl="ja"
                />
            </div>
            {/* <div className={styles['Rules']}>
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
                            />
                        )}
                    />
                    <label htmlFor="rules" className={styles['Label_rules']}>
                        <span className={styles['Icon_check']}>
                            <IcCheck />
                        </span>
                        <span className={styles['Icon_uncheck']}>
                            <IcUnCheck />
                        </span>
                    </label>
                </div>

                <span className={styles['Text_rules']}>
                    会社の{' '}
                    <span
                        onClick={() => setListrules(!listrules)}
                        className={styles['Text_open-rules']}
                    >
                        プライバシーポリシー
                    </span>
                    に同意します
                </span>
            </div> */}

            {/* {listrules ? (
                <div className={styles['Frame_rules']}>
                    <ul className={styles['List_rules']}>
                        <li>
                            Lorem ipsum dolor sit amet consectetur. Eget nisi ac
                            at lacus viverra ornare eu orci ac. Lobortis proin
                            fringilla volutpat vel in enim urna est erat.
                        </li>
                        <li>
                            Pharetra justo nulla dictum pretium nisl vestibulum
                            in velit aenean. Vitae felis sit montes orci gravida
                            vitae accumsan.
                        </li>
                        <li>
                            Est in lacus ac pellentesque rutrum. Sem odio erat
                            venenatis metus vestibulum feugiat nec semper.
                        </li>
                        <li>
                            Malesuada auctor sit id etiam laoreet tempus eget
                            ante. Faucibus in metus vivamus a arcu.
                        </li>
                        <li>
                            Congue diam morbi nunc amet adipiscing. Ultricies
                            placerat elit in id cursus bibendum id fames
                            eleifend. Eu sed nec odio augue lacus. Sollicitudin
                            ullamcorper elit sapien libero.
                        </li>
                        <li>
                            Sit turpis sed ut pellentesque. Integer aenean non
                            justo nulla scelerisque volutpat neque et donec.
                        </li>
                    </ul>
                </div>
            ) : (
                <></>
            )} */}

            <div className={styles['Frame_btn-job']}>
                <button type="submit" className={styles['Btn_job']}>
                    {t("formcandidate.submit")}
                </button>
            </div>
        </form>
    );
}
