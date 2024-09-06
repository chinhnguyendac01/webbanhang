import React from 'react';
import styles from './PwSetting.module.scss';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import AuthAction from 'redux/auth/action';

function PwSetting({handleNext}) {

    const { t } = useTranslation();
    const dispatch = useDispatch();

    const request = [
        t('forgetPw.setting-rq1'),
        t('forgetPw.setting-rq2'),
        t('forgetPw.setting-rq3'),
    ]

    const { handleSubmit, register, formState: { errors }, watch } = useForm({
        criteriaMode: "all"
    });
    const passwordValue = watch("password");
    const validateConfirmPassword = (value) => {
        if (value !== passwordValue) {
            return t('loginPage.newPwValidate');
        }
        return true;
    };

    const onSubmit = (data) => {
        const currentInfoUser = JSON.parse(localStorage.getItem('infoUser')) || {};
        Object.keys(data).forEach((key) => {
            currentInfoUser[key] = data[key];
        });
        localStorage.setItem('infoUser', JSON.stringify(currentInfoUser));
        const result = JSON.parse(localStorage.getItem('infoUser')) || {};
        dispatch({
            type: AuthAction.RESET_PW_REQUEST,
            payload: result
        })
        handleNext();
        localStorage.removeItem('infoUser');
    };


    return (  
        <div className={styles['pw-setting']}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles['title']}>
                    {t('forgetPw.setting-title')}
                </div>
                <div className={styles['form-item']}>
                    <input 
                        name="password"
                        type="password"
                        {...register("password", {
                            required: t('loginPage.require'),
                            minLength:{
                                value: 8,
                                message: t('loginPage.minLengthPw')
                            },
                            pattern: {
                                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
                                message: t('loginPage.passwordValidate')
                            }
                        })}
                        placeholder={t('forgetPw.setting-plhd1')}
                    />
                    <p className={styles['error-message']}>{errors.password?.message}</p>
                </div>
                <div className={styles['form-item']}>
                    <input 
                        name="confirmPassword"
                        type="password"
                        {...register("confirmPassword", {
                            required: t('loginPage.require'),
                            validate: validateConfirmPassword
                        })}

                        placeholder={t('forgetPw.setting-plhd2')}
                    />
                    <p className={styles['error-message']}>{errors.confirmPassword?.message}</p>
                </div>
                <div className={styles['request-pw']}>
                    <span className={styles['request-title']}>{t('forgetPw.setting-request')}</span>
                    <span className={styles['request-item']}>{t('forgetPw.setting-rqsmall')}</span>
                    {request.map((text, index) => (
                        <span key={index} className={styles['request-item']}>{text}</span>
                    ))}
                </div>
                <div className={styles['action']}>
                    <button type="submit" className={styles['btn-action']}>
                        {t('forgetPw.btn-save')}
                    </button>
                </div>
                
            </form>
        </div>
    );
}

export default PwSetting;