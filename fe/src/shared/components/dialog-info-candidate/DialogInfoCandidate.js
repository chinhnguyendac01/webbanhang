import React from 'react'
import styles from './DialogInfoCandidate.module.scss';
import Dialog from '@mui/material/Dialog';
import { useSelector, useDispatch } from 'react-redux';
import IcClose from '../icons/IcClose';
import { useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';
import FectSample from '../../../redux/candidate/action';
import IcUpload from '../icons/IcUpload';
import { useTranslation } from 'react-i18next';
export default function DialogInfoCandidate(props) {
   const { openDialog, handleClose, data } = props;
   const dispatch = useDispatch();
   const { t } = useTranslation();
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
         position: '',
         email: '',
         phone: '',
         content: '',
         cv_path: ''
      },
   });
   
   useEffect(() => {
      if (data) {
         setValue('name', data?.name),
            setValue('position', data?.position_name),
            setValue('email', data?.email),
            setValue('phone', data?.phone_number),
            setValue('content', data?.content)
         setValue('cv_path', data?.cv_path)
      }
   }, [data]);
  
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

            <div className={styles['candidateInfo']}>
               <div className={styles['header-candidate']}>
                  <span className={styles['title-candidate']}>{t('candidate.candidate')}</span>
                  <span className={styles['icon-close']} onClick={() => handleClose()} >
                     <IcClose width='14' height='14' color='#fff' />
                  </span>
               </div>
               <div className={styles['body-candidate']}>
                  <div className={styles['Frame-input']}>
                     <label className={styles['Label-input']} >{t('candidate.name')}</label>
                     <Controller
                        name="name"
                        control={control}

                        render={({ field: { ref, ...rest } }) => (
                           <input className={styles['Style-input']} {...rest} disabled />

                        )}
                     />

                  </div>
                  <div className={styles['Frame-input']}>
                     <label className={styles['Label-input']} >{t('candidate.position_name')}</label>
                     <Controller
                        name="position"
                        control={control}

                        render={({ field: { ref, ...rest } }) => (
                           <input className={styles['Style-input']} {...rest} disabled />

                        )}
                     />

                  </div>
                  <div className={styles['Frame-input']}>
                     <label className={styles['Label-input']} >{t('candidate.email')}</label>
                     <Controller
                        name="email"
                        control={control}

                        render={({ field: { ref, ...rest } }) => (
                           <input className={styles['Style-input']} {...rest} disabled />

                        )}
                     />

                  </div>
                  <div className={styles['Frame-input']}>
                     <label className={styles['Label-input']} >{t('candidate.phone_number')}</label>
                     <Controller
                        name="phone"
                        control={control}

                        render={({ field: { ref, ...rest } }) => (
                           <input className={styles['Style-input']} {...rest} disabled />

                        )}
                     />

                  </div>
                  <div className={styles['Frame-input']}>
                     <label className={styles['Label-input']} >{t('candidate.content')}</label>
                     <Controller
                        name="content"
                        control={control}

                        render={({ field: { ref, ...rest } }) => (
                           <input className={styles['Style-input']} {...rest} disabled />

                        )}
                     />

                  </div>
                  <div className={styles['Frame-input-cv']}>
                     <label className={styles['Label-input']}>
                        <IcUpload />
                        <span className={styles['Title-upload']}>{t('candidate.cv_path')}</span>
                     </label>
                     <Controller
                        name="cv_path"
                        control={control}
                        render={({ field: { ref, ...rest } }) => (
                           <>
                              <a className={styles['Input_styles-nolmal']} href={`${process.env.REACT_APP_STORAGE_URL}${rest.value}`} download>{rest?.value}</a>
                           </>
                        )}
                     />
                  </div>
               </div>
            </div>
         </Dialog>
      </>
   )
}
