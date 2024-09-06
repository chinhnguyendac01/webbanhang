import React, { useState, useEffect } from 'react';
import Editor from 'shared/components/editor/Editor';
import styles from './CareerStepUpdatePageEdit.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import Validator from '../../../../utils/Validator';
import TabLocale from 'shared/components/admin/tab-locale/TabLocale';
import CareerAction from '../../../../redux/career/action';
import Utils from 'utils/Utils';
import { useTranslation } from 'react-i18next';
import DialogLoadingcustom from 'shared/components/dialog-loading/DialogLoading';
export default function CareerStepUpdatePageEdit(props) {
     const { idcareer, handleSelectLocale, selectedLocale, data, formRef } = props
     const dispatch = useDispatch();
     const { t, i18n } = useTranslation();
    
     const {
          control,
          setValue,
          register,
          handleSubmit,
          watch,
          formState: { errors },
     } = useForm({
          defaultValues: {
               title: '',
               content: '',

          },
     });
         //get Career by id
    const getSingleCareer = () => {
     try {
         dispatch({
             type: FectchSample.GET_CAREERBYID_START,
             idjob: id,
             locale: selectedLocale
         });
     } catch (error) { }
 };
     //submit data
     const onSubmit = async (data) => {
          
          const careerdata = {
               title: data.title,
               content: data.content,
               locale: selectedLocale
          }

          try {
               dispatch({
                    type: CareerAction?.EDIT_CAREER_START,
                    data: careerdata,
                    id: idcareer,
                    onSuccess: (data) => {

                         Utils.showSuccessToast({
                              message: <span>{t("message.updatesuccess")} {selectedLocale}</span>,
                         });
                         getSingleCareer();
                    },
                    onError: (data) => {

                         Utils.showErrorToast({
                              message: <span>{t("message.updatefailed")}</span>,
                         });
                         getSingleCareer();
                    }
               })
          } catch (error) {

          }

     };

     //check idEmply
     const isIdCareerEmpty = idcareer === "";
     //loading
     const loading = useSelector(
          (state) => state?.Career?.sampleData?.loading,
     );
     //setvalue
     useEffect(() => {
          if (data) {
               setValue('title', data?.title);
               setValue('content', data?.content);
          }
     }, [data, setValue]);
     return (
          <>
               <DialogLoadingcustom openDialog={loading} />
               <div>

                    <form
                         ref={formRef}
                         onSubmit={handleSubmit(onSubmit)}
                         className={styles['CareerAddContainer']}
                    >
                         <div className={styles["Frame-changeLang"]}><TabLocale onClick={(text) => { handleSelectLocale(text) }} defaultTab={"JP"} /></div>

                         <div className={styles['Frame-input']}>
                              <label className={styles['Styles-label']}>{t("career.title")}</label>
                              <Controller
                                   name="title"
                                   control={control}
                                   rules={{
                                        validate: {
                                             required: Validator.required(t('validator.require')),
                                        },
                                   }}
                                   render={({ field: { ref, ...rest } }) => (
                                        <div className={styles['frame-messange']}>
                                             <input
                                                  {...rest}
                                                  className={styles['Styles-input']}
                                                  disabled={isIdCareerEmpty}
                                             />
                                             {errors.title && (
                                                  <span className={styles['messange-error']}>
                                                       {errors.title.message}
                                                  </span>
                                             )}
                                        </div>
                                   )}
                              />
                         </div>

                         <div className={styles['Frame-input-content']}>
                              <label className={styles['Styles-label']}>{t("career.content")}</label>
                              <div className={styles['Editor-style']}>
                                   <Controller
                                        name="content"
                                        control={control}
                                        rules={{
                                             validate: {
                                                  required: Validator.required(t('validator.require')),
                                             },
                                        }}
                                        render={({
                                             field: { onChange, onBlur, value, name, ref },
                                        }) => (
                                             <div className={styles['frame-messange']}>

                                                  <Editor
                                                       setEditorHtml={onChange}
                                                       editorHtml={value}
                                                       canEdit={!isIdCareerEmpty}
                                                  />

                                                  {errors.content && (
                                                       <span
                                                            className={
                                                                 styles['messange-error-content']
                                                            }
                                                       >
                                                            {errors.content.message}
                                                       </span>
                                                  )}
                                             </div>
                                        )}
                                   />
                              </div>
                         </div>

                         <div className={styles['Frame-btn-submit']}>
                              <button  type="submit"  style={{display:"none"}} className={styles['Styles-btn-submit']}>
                                   {t("formcandidate.submit")}
                              </button>
                         </div>
                    </form>
               </div>


          </>

     );
}
