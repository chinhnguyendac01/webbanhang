import React, { useEffect, useState } from 'react'
import styles from './Link.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import FooterAction from 'redux/footer/action';
import CheckIcon from '@mui/icons-material/Check';
import IcEditCircle from 'shared/components/icons/IcEditCircle';
import IconButton from '@mui/material/IconButton';
import Utils from 'utils/Utils';
import { useTranslation } from 'react-i18next';
import InputController from 'shared/components/input-controller/InputController';
export default function Footer({ props, onSave, formRef }) {
     const [editMode, setEditMode] = useState(false);
     const dispatch = useDispatch();
     const { t } = useTranslation();
     const {
          control,
          setValue,
          getValues,
          register,
          reset,
          handleSubmit,
          watch,

          formState: { errors },
     } = useForm({
          defaultValues: {

          },
     });
     //
     const handleEditClick = () => {
          setEditMode(true);
     };
     //img 
     const [imageStates, setImageStates] = useState({});
     const handleImgChange = (event, inputName) => {
          const file = event.target.files[0];

          if (file) {
               try {
                    const reader = new FileReader();

                    reader.onload = (e) => {
                         setImageStates((prevStates) => ({
                              ...prevStates,
                              [inputName]: {
                                   ...prevStates[inputName],
                                   previewImg: e.target.result,
                              },
                         }));
                    };

                    reader.readAsDataURL(file);
               } catch (error) {
                    alert('Filer error', error);
               }

               // Cập nhật trạng thái itemImg
               setImageStates((prevStates) => ({
                    ...prevStates,
                    [inputName]: {
                         ...prevStates[inputName],
                         itemImg: file,
                    },
               }));
          }
     };

     //get link 
     useEffect(() => {
          if (!Array.isArray(links) || links.length === 0) {
               dispatch({ type: FooterAction.GET_LINK_START });
          }
     }, []);
     var links = useSelector((state) => state.Footer.linksData.data) || [];

     //start 
     useEffect(() => {

          links?.forEach((item) => {
               const inputName = `image_${item.id}`;
               setValue(`id_${item.id}`, item.id);
               setValue(`libraryName_${item.id}`, item.library_name);
               setValue(`libraryType_${item.id}`, item.library_type);
               setImageStates((prevStates) => ({
                    ...prevStates,
                    [inputName]: {
                         ...prevStates[inputName],
                         previewImg: `${process.env.REACT_APP_STORAGE_URL}${item?.image}`
                    },
               }));

          });

     }, [links, setValue])
     const onSubmit = (data) => {
          // console.log(data);
          const formattedData = Object.keys(data).reduce((result, key) => {
               const [prefix, id] = key.split('_');

               if (!result.find(item => item.id === id)) {
                    result.push({
                         id,
                         library_type: data[`libraryType_${id}`],
                         library_name: data[`libraryName_${id}`],
                         image: imageStates[`image_${id}`]?.itemImg,
                    });
               }

               return result;
          }, []);

          const formData = new FormData();
          formattedData.forEach((item, index) => {
               formData.append(`data[${index}][id]`, item.id);
               formData.append(`data[${index}][library_type]`, item.library_type);
               formData.append(`data[${index}][library_name]`, item.library_name);
               formData.append(`data[${index}][image]`, item.image);

          });
          try {
               dispatch({
                    type: FooterAction.EDIT_LINK_START,
                    data: formData,
                    onSuccess: (data) => {

                         Utils.showSuccessToast({
                              message: <span>{t('message.updatesuccess')}</span>,
                         });
                         dispatch({ type: FooterAction.GET_LINK_START });
                    },
                    onError: (data) => {

                         Utils.showErrorToast({
                              message: <span>{t('message.updatefailed')}</span>,
                         });
                         dispatch({ type: FooterAction.GET_LINK_START });
                    },
               });
          } catch (error) { }
          setEditMode(false);

     };

     return (
          <>

               <form className={styles['Footer']} onSubmit={handleSubmit(onSubmit)}>

                    <div className={styles['Frame-btn-submit']} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", maxHeight: "30px", paddingRight: "80px" }}>
                         <div className={styles['section-title']}>{t("admin.company.link")}</div>
                         {!editMode && (
                              <IconButton className={styles['btn-edit']} onClick={handleEditClick}>
                                   <IcEditCircle />
                              </IconButton>
                         )}
                         {editMode && (
                              <IconButton
                                   className={styles['btn-edit']}
                                   style={{ backgroundColor: "#0E0F3B" }}
                                   type='submit'
                              // onClick={(e) => {onSubmit() }}
                              >

                                   <CheckIcon style={{ fill: "white" }} />
                              </IconButton>
                         )}
                    </div>
                    <div className={styles['Location-frame']}>
                         {
                              links?.map((item, idx) => {

                                   const inputName = `image_${item.id}`;

                                   if (!imageStates.hasOwnProperty(inputName)) {
                                        setImageStates((prevStates) => ({
                                             ...prevStates,
                                             [inputName]: {
                                                  itemImg: null,
                                                  previewImg: null,
                                             },
                                        }));
                                   }

                                   return (
                                        <div key={idx}>
                                             <label className={styles['label']}>{item?.note}</label>
                                             <InputController label={item?.note} name={`id_${item.id}`} control={control} errors={errors} canHidden={true}  editMode={editMode}/>
                                             <InputController label={item?.note} name={`libraryType_${item.id}`} control={control} errors={errors} canHidden={true}  editMode={editMode} />
                                             <InputController label={item?.note} name={`libraryName_${item.id}`} control={control} errors={errors} canHidden={false}  editMode={editMode}/>
                                             <InputController
                                                  label={item?.note}
                                                  name={inputName}
                                                  control={control}
                                                  errors={errors}
                                                  canHidden={false}
                                                  typeUpload={true}
                                                  previewImg={imageStates[inputName]?.previewImg}
                                                  itemImg={imageStates[inputName]?.itemImg}
                                                  handleImgChange={(event) => handleImgChange(event, inputName)}
                                                  editMode={editMode}
                                             />
                                        </div>
                                   );
                              })
                         }


                    </div>
               </form>
          </>

     )
}
