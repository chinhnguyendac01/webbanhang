import React, { useState, useRef } from 'react'
import styles from './InputController.module.scss';
import Validator from 'utils/Validator';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';

export default function InputController(props) {

     const { label, name, control, errors, canHidden = false, typeUpload = false, previewImg, handleImgChange, itemImg ,editMode} = props;
     const { t, i18n } = useTranslation();
     const fileInputRef = useRef(null);
     const handleChooseFile = () => {
          if(editMode) {
               fileInputRef.current.click();
          }
          
     };
     
     return (
          <div style={{ display: canHidden ? "none" : "" }} className={styles['frame-input']}>
               {/* <label className={styles['label']}>{label}</label> */}

               <Controller
                    name={name}
                    control={control}
                    // rules={{
                    //      validate: {
                    //           required: Validator.required(t('validator.require')),
                    //      },
                    // }}
                    render={({ field: { ref, ...rest } }) => (
                         <div className={styles['frame-messange']}>
                              {typeUpload ? (<>

                                   <input
                                        
                                        type="file"
                                        onChange={handleImgChange}
                                        ref={fileInputRef}
                                        accept="image/*"
                                        className={styles['styles-input']}
                                        style={{ display: 'none' }}
                                        readOnly={!editMode}
                                   />
                                   <div
                                        className={styles['Input_styles-div']}
                                        onClick={handleChooseFile}
                                   >
                                        {itemImg ? (
                                             <span className={styles['Style_text-file']}>
                                                  {itemImg?.name}
                                             </span>
                                        ) : (
                                             <span className={styles['Style_text-file']}>
                                                  {t("formcandidate.message-file")}
                                             </span>
                                        )}
                                   </div>
                              </>) : (
                                   <input
                                        defaultValue=''
                                        {...rest}
                                        className={styles['styles-input']}
                                        readOnly={!editMode}
                                   />
                              )}

                              {errors[name] && (
                                   <span className={styles['messange-error']}>
                                        {errors[name].message}
                                   </span>
                              )}
                         </div>
                    )}
               />
               {typeUpload ? <>
                    {previewImg ? (<>
                         <div className={styles['image-preview']}>
                              <img className={styles['img']} src={previewImg} alt="Preview Image" />
                         </div>
                    </>) : (<><div>......</div></>)}
               </> : null}
          </div>
     )
}
