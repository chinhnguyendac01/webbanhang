import React from 'react'
import styles from './DialogInfoContact.module.scss'
import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import IcClose from '../icons/IcClose';
import { useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';
import IcRadioCheck from '../icons/IcRadioCheck';
import IcRadioUnCheck from '../icons/IcRadioUnCheck';
import FectSample from '../../../redux/contact/action';
import IcUpload from '../icons/IcUpload';
import { useTranslation } from 'react-i18next';
export default function DialogInfoContact(props) {
     const { t } = useTranslation();
     const { openDialog, handleClose, data } = props;
     const dispatch = useDispatch();
     const {
          control,
          setValue,
          register,
          handleSubmit,
          getValues,
          watch,
          reset,
          formState: { errors },
     } = useForm({
          defaultValues: {
               name: '',
               email: '',
               phone: '',
               company: '',
               position: '',
               website: '',
               content: '',
               attachment_path: '',
               Systemtype: '',
               Subjectofwork: '',
               Notices: '',
               idSystemType: "",
               idSubjectOfWork: "",
               idDevelopmentType: "",
          },
     });

     useEffect(() => {
          if (data) {
               setValue('name', data?.name || '');
               setValue('email', data?.email || '');
               setValue('phone', data?.phone_number || '');
               setValue('company', data?.company_name || '');
               setValue('position', data?.position || '');
               setValue('website', data?.website || '');
               setValue('content', data?.content || '');
               setValue('attachment_path', data?.attachment_path || '');
               setValue('Systemtype', data?.contentinquiry?.Systemtype);
               setValue('Subjectofwork', data?.contentinquiry?.Subjectofworks);
               setValue('Notices', data?.contentinquiry?.Notices);
               setValue('idSystemType', data?.inquiry_id?.Systemtype);
               setValue('idSubjectOfWork', data?.inquiry_id?.Subjectofwork);
               setValue('idDevelopmentType', data?.inquiry_id?.DevelopmentType);
          }
     }, [data])

     //get Inquiry
     const getInquiry = () => {
          try {
               dispatch({
                    type: FectSample?.GET_INQUIRY_START,
               });
          } catch (error) { }
     };
     useEffect(() => {
          getInquiry();
     }, []);
     const datainquiry = useSelector(
          (state) => state?.Contact?.sampleData?.datainquiry,
     ) || [];

     //reset
     const resetForm = () => {
          reset();
     };
     return (
          <>
               <Dialog
                    className={styles['Dialog']}
                    open={openDialog}
                    onClose={() => {
                         handleClose();
                         resetForm();
                    }}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    sx={{
                         '.MuiPaper-root.MuiDialog-paper': {
                              maxHeight: 'initial',
                              maxWidth: 'initial',
                              overflow: 'initial',
                              borderRadius: '8px'
                         }
                    }}
               >

                    <form className={styles['contactInfo']}>
                         <div className={styles['header-contact']}>
                              <span className={styles['title-contact']}>{t("contact.contact")}</span>
                              <span className={styles['icon-close']} onClick={() => handleClose()} >
                                   <IcClose width='14' height='14' color='#fff' />
                              </span>
                         </div>
                         <div className={styles['body-contact']}>
                              <div className={styles['frame-list-input']}>
                                   <div className={styles['Frame-input-left']}>
                                        <div className={styles['Frame-input']}>
                                             <label className={styles['Label-input']} >{t("contact.name")}</label>
                                             <Controller
                                                  name="name"
                                                  control={control}

                                                  render={({ field: { ref, ...rest } }) => (
                                                       <input className={styles['Style-input']} {...rest} disabled />

                                                  )}
                                             />

                                        </div>
                                        <div className={styles['Frame-input']}>
                                             <label className={styles['Label-input']}>{t("contact.email")}</label>
                                             <Controller
                                                  name="email"
                                                  control={control}

                                                  render={({ field: { ref, ...rest } }) => (
                                                       <input className={styles['Style-input']} {...rest} disabled />

                                                  )}
                                             />
                                        </div>
                                        <div className={styles['Frame-input']}>
                                             <label className={styles['Label-input']}>{t("contact.phoneNumber")}</label>
                                             <Controller
                                                  name="phone"
                                                  control={control}

                                                  render={({ field: { ref, ...rest } }) => (
                                                       <input className={styles['Style-input']} {...rest} disabled />

                                                  )}
                                             />
                                        </div>
                                   </div>
                                   <div className={styles['Frame-input-right']}>
                                        <div className={styles['Frame-input']}>
                                             <label className={styles['Label-input']}>{t("contact.companyName")}</label>
                                             <Controller
                                                  name="company"
                                                  control={control}

                                                  render={({ field: { ref, ...rest } }) => (
                                                       <input className={styles['Style-input']} {...rest} disabled />

                                                  )}
                                             />
                                        </div>
                                        <div className={styles['Frame-input']}>
                                             <label className={styles['Label-input']}>{t("contact.position")}</label>
                                             <Controller
                                                  name="position"
                                                  control={control}

                                                  render={({ field: { ref, ...rest } }) => (
                                                       <input className={styles['Style-input']} {...rest} disabled />

                                                  )}
                                             />
                                        </div>
                                        <div className={styles['Frame-input']}>
                                             <label className={styles['Label-input']}>{t("contact.website")}</label>
                                             <Controller
                                                  name="website"
                                                  control={control}

                                                  render={({ field: { ref, ...rest } }) => (
                                                       <input className={styles['Style-input']} {...rest} disabled />

                                                  )}
                                             />
                                        </div>
                                   </div>


                              </div>
                              <div className={styles['Frame_list-checkbox']}>
                                   <div className={styles["Frame-checkbox"]}>
                                        <label className={styles['Frame_label']}>
                                             <span className={styles['Label-input']}>
                                                  {t("contact.inquiry")}
                                             </span>

                                        </label>
                                        <div className={styles['List_checkbox']}>
                                             <div className={styles['Frame-checkbox-child']}>
                                                  <label className={styles['Label-inquiry']}>・{t('contact.systemtype')}</label>
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
                                                                           onChange={(e) =>
                                                                                setValue(
                                                                                     'idSystemType',
                                                                                     e.target.id,
                                                                                )
                                                                           }
                                                                           disabled
                                                                      />
                                                                 )}
                                                            />
                                                            <label
                                                                 htmlFor={option.id}
                                                                 className={styles['Label_checkbox']}
                                                            >
                                                                 <span className={styles['Icon_check']}>
                                                                      <IcRadioCheck />
                                                                 </span>
                                                                 <span
                                                                      className={styles['Icon_uncheck']}
                                                                 >
                                                                      <IcRadioUnCheck />
                                                                 </span>
                                                            </label>
                                                            <span className={styles['Text_checkbox']}>
                                                                 {option.library_name}
                                                            </span>

                                                       </div>
                                                  ))}
                                             </div>
                                             <Controller
                                                  name="Systemtype"
                                                  control={control}
                                                  render={({ field }) => (

                                                       <input
                                                            type="text"
                                                            {...field}
                                                            className={styles['input-other']}
                                                            placeholder={t('contact.other')}
                                                            disabled
                                                       />

                                                  )}
                                             />
                                        </div>
                                        <div className={styles['List_checkbox']}>
                                             <div className={styles['Frame-checkbox-child']}>
                                                  <label className={styles['Label-inquiry']}>・{t('contact.subjectofwork')}</label>
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
                                                                                     'idSubjectOfWork',
                                                                                ) === option.id
                                                                           }
                                                                           onChange={(e) =>
                                                                                setValue(
                                                                                     'idSubjectOfWork',
                                                                                     e.target.id,
                                                                                )
                                                                           }
                                                                           disabled
                                                                      />
                                                                 )}
                                                            />
                                                            <label
                                                                 htmlFor={option.id}
                                                                 className={styles['Label_checkbox']}
                                                            >
                                                                 <span className={styles['Icon_check']}>
                                                                      <IcRadioCheck />
                                                                 </span>
                                                                 <span
                                                                      className={styles['Icon_uncheck']}
                                                                 >
                                                                      <IcRadioUnCheck />
                                                                 </span>
                                                            </label>
                                                            <span className={styles['Text_checkbox']}>
                                                                 {option.library_name}
                                                            </span>
                                                       </div>
                                                  ))}
                                             </div>
                                             <Controller
                                                  name="Subjectofwork"
                                                  control={control}
                                                  render={({ field }) => (

                                                       <input
                                                            type="text"
                                                            {...field}
                                                            className={styles['input-other']}
                                                            placeholder={t('contact.other')}
                                                            disabled
                                                       />

                                                  )}
                                             />
                                        </div>
                                        <div className={styles['List_checkbox']}>
                                             <div className={styles['Frame-checkbox-child']}>
                                                  <label className={styles['Label-inquiry']}>・{t('contact.developmenttype')}</label>
                                             </div>
                                             <div className={styles['List_checkbox-child']}>
                                                  {datainquiry?.item18?.map((option) => (
                                                       <div
                                                            key={option.id}
                                                            className={styles['Checkbox']}
                                                       >
                                                            <Controller
                                                                 name="idDevelopmentType"
                                                                 control={control}

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
                                                                                     'idDevelopmentType',
                                                                                ) === option.id
                                                                           }
                                                                           onChange={(e) =>
                                                                                setValue(
                                                                                     'idDevelopmentType',
                                                                                     e.target.id,
                                                                                )
                                                                           }
                                                                           disabled
                                                                      />
                                                                 )}
                                                            />
                                                            <label
                                                                 htmlFor={option.id}
                                                                 className={styles['Label_checkbox']}
                                                            >
                                                                 <span className={styles['Icon_check']}>
                                                                      <IcRadioCheck />
                                                                 </span>
                                                                 <span
                                                                      className={styles['Icon_uncheck']}
                                                                 >
                                                                      <IcRadioUnCheck />
                                                                 </span>
                                                            </label>
                                                            <span className={styles['Text_checkbox']}>
                                                                 {option.library_name}
                                                            </span>
                                                       </div>
                                                  ))}
                                             </div>

                                        </div>
                                        <div className={styles['List_checkbox']}>
                                             <div className={styles['Frame-checkbox-child']}>
                                                  <label className={styles['Label-inquiry']}>・{t('contact.notices')}</label>
                                             </div>
                                             <Controller
                                                  name="Notices"
                                                  control={control}
                                                  render={({ field }) => (

                                                       <input
                                                            type="text"
                                                            {...field}
                                                            className={styles['input-other-notices']}
                                                            placeholder={t('contact.other')}
                                                            disabled
                                                       />

                                                  )}
                                             />

                                        </div>

                                   </div>


                              </div>
                              <div className={styles['Frame-input-big']}>
                                   <label className={styles['Label-input']}>
                                        {t('contact.question')}
                                   </label>
                                   <Controller
                                        name="content"
                                        control={control}
                                        render={({ field: { ref, ...rest } }) => (
                                             <textarea className={styles['Input_styles-big']} {...rest} disabled />

                                        )}
                                   />
                              </div>
                              <div className={styles['Frame-input-cv']}>
                                   <label className={styles['Label-input']}>
                                        <IcUpload />
                                        <span className={styles['Title-upload']}> {t('contact.attachment')}</span>
                                   </label>
                                   <Controller
                                        name="attachment_path"
                                        control={control}
                                        render={({ field: { ref, ...rest } }) => (
                                             <>
                                                  <a className={styles['Input_styles-nolmal']} href={`${process.env.REACT_APP_STORAGE_URL}${rest.value}`} download>{rest?.value}</a>
                                             </>
                                        )}
                                   />
                              </div>
                         </div>
                    </form>
               </Dialog>
          </>
     )
}
