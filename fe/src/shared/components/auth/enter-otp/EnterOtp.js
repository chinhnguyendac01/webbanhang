import React, { useState } from 'react';
import styles from './EnterOtp.module.scss';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import AuthAction from 'redux/auth/action';

function EnterOtp({handleNext}) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [otp, setOtp] = useState(['', '', '', '', '']);
    const [inputValid, setInputValid] = useState(Array(5).fill(false));
    const { handleSubmit, register } = useForm({
        criteriaMode: "all"
    });

    const handleInputChange = (index, event) => {
        const value = event.target.value;
        if (/^\d*$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            const newInputValid = [...inputValid];
            newInputValid[index] = value !== '';
            setInputValid(newInputValid);

            if (value !== '' && index < otp.length - 1) {
                const nextInput = document.querySelector(`input[name=otp_${index + 2}]`);
                if (nextInput) {
                    nextInput.focus();
                }
            }
        }
    };

    const handleResend = () => {
        const email = JSON.parse(localStorage.getItem('infoUser')) || {};
        dispatch({
            type: AuthAction.GET_OTP_REQUEST,
            payload: email
        })
    }

    const onSubmit = (data) => {
        const currentInfoUser = JSON.parse(localStorage.getItem('infoUser')) || {};
        currentInfoUser.otp = parseInt(Object.values(data).join(''), 10);
        localStorage.setItem('infoUser', JSON.stringify(currentInfoUser));
        handleNext();
    };

    return (
        <div className={styles['enter-otp']}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles['title']}>
                    {t('forgetPw.otp-title')}
                </div>
                <div className={styles['desc']}>
                    {t('forgetPw.otp-desc')}
                </div>
                <div className={styles['otp-input']}>
                    {otp.map((value, index) => (
                        <div className={`${styles['item']} ${inputValid[index] ? styles.valid : ''}`} key={index}>
                            <input
                                name={`otp_${index + 1}`}
                                type="text"
                                value={value}
                                {...register(`otp_${index + 1}`, { required: true })}
                                onChange={(event) => handleInputChange(index, event)}
                            />
                        </div>
                    ))}
                </div>
                <div className={styles['verify-text']}>
                    <span className={styles['ques-mail']}>{t('forgetPw.otp-question')}</span>
                    <span className={styles['send-mail']} onClick={handleResend}> 
                        {t('forgetPw.otp-send')}
                    </span>
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

export default EnterOtp;