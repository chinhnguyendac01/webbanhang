import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './AccountForm.module.scss';
import { useTranslation } from 'react-i18next';
import { ErrorMessage } from "@hookform/error-message";
import Validator from 'utils/Validator';
import DropDown from 'shared/components/dropdown/DropDown';
import roles from 'utils/UserRole';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const AccountForm = ({ defaultValue, onClick }) => {
    const { t, i18n } = useTranslation();

    const { handleSubmit, setValue, control, formState: { errors } } = useForm({
        criteriaMode: "all",
        defaultValues: {
            name: "",
            email: "",
            phone_number: "",
            address: "",
            role: ""
        }
    });
    useEffect(() => {
        if (defaultValue?.name) {
            setValue('name', defaultValue?.name || '');
            setValue('email', defaultValue?.email || '');
            setValue('phone_number', defaultValue?.phone_number || '');
            setValue('address', defaultValue?.address || '');
            setValue('role', defaultValue?.role);
        }
    }, [defaultValue])
    const handleOnSubmit = (data) => {
        onClick(data)
    };

    return (
        <div style={{ padding: "0 80px" }}>
            <form onSubmit={handleSubmit(handleOnSubmit)} className={styles['form-container']}>
                <div className={`${styles['input-container']} `}>
                    <Controller
                        name="name"
                        control={control}
                        rules={{
                            required: t("accountForm.required")
                        }}
                        render={({ field: { ref, ...rest } }) => (
                            <div className={`require-messange-position`}>
                                <label className='required_input'>
                                    {t("accountForm.name")}
                                </label>
                                <input

                                    type="text"
                                    {...rest}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="name"
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

                <div className={styles['input-container']}>
                    <Controller
                        name="role"
                        control={control}
                        rules={{
                            required: t("accountForm.required"),
                        }}
                        render={({ field: { ref, ...rest } }) => (
                            <div className={`require-messange-position ${styles['account-roles']}`}>
                                <label className='required_input'>
                                    {t("accountForm.role")}
                                </label>
                                <DropDown
                                    defaultValue={t("accountForm.rolePlaceholder")}
                                    options={roles}
                                    selectedOption={rest.value}
                                    onOptionSelect={rest.onChange}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="role"
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

                <div className={styles['input-container']}>
                    <Controller
                        name="address"
                        control={control}
                        rules={{
                            required: t("accountForm.required"),
                        }}
                        render={({ field: { ref, ...rest } }) => (
                            <div className={`require-messange-position`}>
                                <label className='required_input'>
                                    {t("accountForm.address")}
                                </label>
                                <input
                                    type="text"
                                    {...rest}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="address"
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
                <div className={styles['input-container']}>
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: t("accountForm.required"),
                            validate: {
                                email: Validator.email
                            }
                        }}
                        render={({ field: { ref, ...rest } }) => (
                            <div className={`require-messange-position`}>
                                <label className='required_input'>
                                    {t("accountForm.email")}
                                </label>
                                <input
                                    type="email"
                                    {...rest}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="email"
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
                <div className={styles['input-container']}>
                    <Controller
                        name="phone_number"
                        control={control}
                        rules={{
                            required: t("accountForm.required"),
                            validate: {
                                minlength: Validator.minLength(10),
                                maxlength: Validator.maxLength(12),
                            }
                        }}
                        render={({ field: { ref, ...rest } }) => (
                            <div className={`require-messange-position`}>
                                <label className='required_input'>
                                    {t("accountForm.phoneNumber")}
                                </label>
                                <input
                                    type="text"
                                    {...rest}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="phone_number"
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

                <div className={styles['input-container']} style={{ display: 'flex', justifyContent: "flex-end" }}>
                    <button type='submit' className={styles['btn-submit']}>{t('accountForm.submit')}</button>
                </div>
            </form>
        </div>
    );
}

export default AccountForm;
