import React, { useState, useEffect } from 'react';
import styles from './CareerStepUpdate.module.scss'
import Editor from 'shared/components/editor/Editor';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';

import { useForm, Controller } from 'react-hook-form';
import Validator from '../../../../utils/Validator';
import useRouter from 'hooks/use-router';
import RouterPath from 'router/RouterPath';
import TabLocale from 'shared/components/admin/tab-locale/TabLocale';
import CareerAction from '../../../../redux/career/action';
import Utils from 'utils/Utils';
import { useTranslation } from 'react-i18next';
import DialogLoadingcustom from 'shared/components/dialog-loading/DialogLoading';

export default function CareerStepUpdate(props) {
     const { idcareer } = props
     const dispatch = useDispatch();
     const { t, i18n } = useTranslation();
     //lang
     const [selectedLocale, setSelectedLocale] = useState("JP");
     const languages = ["JP", "EN", "VN"];
     const [disabledTabs, setDisabledTabs] = useState([]);
     const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
     const router = useRouter();
     const {
          control,
          setValue,
          register,
          handleSubmit,
          reset,
          watch,
          formState: { errors },
     } = useForm({
          defaultValues: {
               title: '',
               content: '',

          },
     });
     const handleSelectLocale = (locale) => {
          setSelectedLocale(locale);
          const otherLocales = languages.filter((l) => l !== locale);
          setDisabledTabs(otherLocales);
     }
     //submit data
     const onSubmit = async (data) => {
          if (idcareer === "") {
               alert("Vui Lòng nhập cho mẫu đăng ký dưới cùng")

          } else {
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

                              setCurrentLanguageIndex(currentLanguageIndex + 1);
                              setSelectedLocale(languages[currentLanguageIndex + 1]);

                              Utils.showSuccessToast({
                                   message: <span>{t("message.addsuccess")} {selectedLocale}</span>,
                              });
                         },
                         onError: (data) => {
                              router.push({
                                   pathname:RouterPath.CAREER_ADMIN
                              })
                              // Utils.showErrorToast({
                              //      message: <span>{t("message.addfailed")}</span>,
                              // });
                         }
                    })
               } catch (error) {

               }
          }
     };
     const isIdCareerEmpty = idcareer === "";
     //
     //
     const loading = useSelector(
          (state) => state?.Career?.sampleData?.loading,
     );
     return (
          <>
               <DialogLoadingcustom openDialog={loading} />
               <div>

                    <form

                         onSubmit={handleSubmit(onSubmit)}
                         className={styles['CareerAddContainer']}
                    >
                         <div className={styles["Frame-changeLang"]}><TabLocale onClick={(text) => { handleSelectLocale(text) }} defaultTab={languages[currentLanguageIndex]} disabledTabs={disabledTabs} /></div>

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
                              <button type="submit" disabled={isIdCareerEmpty} className={styles['Styles-btn-submit']}>
                                   {t("formcandidate.submit")}
                              </button>
                         </div>
                    </form>
               </div>


          </>

     );
}
