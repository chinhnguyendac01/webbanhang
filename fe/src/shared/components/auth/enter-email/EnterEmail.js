import React from 'react';
import styles from './EnterEmail.module.scss';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import AuthAction from 'redux/auth/action';

function EnterEmail({handleNext}) {

    const { t } = useTranslation();
    const dispatch = useDispatch();

    const { handleSubmit, register, formState: { errors } } = useForm({
        criteriaMode: "all"
    });

    const onSubmit = (data) => {
        localStorage.setItem('infoUser', JSON.stringify(data));
        dispatch({
            type: AuthAction.GET_OTP_REQUEST,
            payload: data
        })
        handleNext();
    };

    return (  
        <div className={styles['enter-email']}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles['title']}>
                    {t('forgetPw.email-title')}
                </div>
                <div className={styles['desc']}>
                    {t('forgetPw.email-desc')}
                </div>
                <div className={styles['form-item']}>
                    <input 
                        name="email"
                        type="text"
                        placeholder={t('forgetPw.email-input')}
                        {...register("email", { 
                            required: t('loginPage.require'),
                            maxLength: {
                                value: 100,
                                message: t('loginPage.maxLength')
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: t('loginPage.emailValidate')
                            }
                        })}
                    />
                    <p className={styles['error-message']}>{errors.email?.message}</p>
                </div>
                <div className={styles['action']}>
                    <button type="submit" className={styles['btn-action']}>
                        {t('forgetPw.btn-next')}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EnterEmail;