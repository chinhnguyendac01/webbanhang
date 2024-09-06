import styles from './index.module.scss'
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Validator from '../../../../../utils/Validator';
import { ErrorMessage } from "@hookform/error-message";
import { useTranslation } from 'react-i18next';
const Input = ({ props, rules = {} }) => {
    const { control,
        label,
        name,
        errors = {},
        setValue = () => { },
        onFocus,
        onBlur,
        canEdit = true,
        onChange = () => { },
    } = props;
    return (
        <div className={styles['input-container']}>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field: { ref, ...rest } }) => (
                    <div className={styles["input_custom"]}>
                        <label>
                            {label}
                        </label>
                        <input
                            type="text"
                            onChange={(e) => { setValue(name, e.target.value); onChange(); }}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            readOnly={!canEdit}
                            {...rest}
                        />
                        {/* {errors && errors[name] && (
                            <span className="require-messange">{errors[name].message}
                            </span>
                        )} */}
                        <span className={styles['error_message']}>
                            <ErrorMessage errors={errors} name={name}>
                                {({ messages }) =>
                                    messages &&
                                    Object.entries(messages)?.map(([type, message]) => (
                                        <span key={type} >
                                            {message}
                                        </span>
                                    ))
                                }
                            </ErrorMessage>
                        </span>

                    </div>
                )}
            />
        </div>
    );
};

export default Input;