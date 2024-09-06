import React, { useEffect, useState, useCallback } from 'react'
import styles from './Footer.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import LocationAction from "../../../../redux/career/action";
import { useForm, Controller } from 'react-hook-form';
import FooterAction from 'redux/footer/action';
import classnames from 'classnames';
import CheckIcon from '@mui/icons-material/Check';
import IcPlus from 'shared/components/icons/IcPlus';
import IcEditCircle from 'shared/components/icons/IcEditCircle';
import HomePageAction from 'redux/home-page/action';
import DropDownImage from '../../../components/admin/dropdown-image/DropDownImage';
import IconButton from '@mui/material/IconButton';
import IcDelete from 'shared/components/icons/IcDelete';
import DialogDeleteConfirm from 'shared/components/dialog-delete-confirm/DialogDeleteConfirm';
import DialogDeleteSuccess from 'shared/components/dialog-delete-success/DialogDeleteSuccess';
import Utils from 'utils/Utils';
import { useTranslation } from 'react-i18next';
import DialogAddCompany from '../../../components/admin/dialog-addcompany/DialogAddCompany';
import TabLocale from '../tab-locale/TabLocale';
export default function Footer({ props, onSave, formRef }) {
     const [editMode, setEditMode] = useState(false);
     const dispatch = useDispatch();
     const [selectedlocation, setSelectedlocation] = useState('');
     const [openDialog, setOpenDiaLog] = React.useState(false);
     const [selectedId, setSelectedId] = React.useState(null);
     const contacts = useSelector((state) => state.Footer.contactsData?.data) || [];

     let loading = useSelector((state) => state.Footer.contactsData?.loading);
     const [dialogDeleteSuccess, setDialogDeleteSuccess] = useState(false);
     const [DialogCompany, setOpenDialogCompany] = useState(false);
     const [selectedLocale, setSelectedLocale] = useState("JP");
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
               items: ""
          },
     });
     
    const handleSelectLocale = (text) => {
        setSelectedLocale(text)
    }
     //
     const handleEditClick = () => {
          setEditMode(true);
     };
     //delete
     const handleClickOpen = (id) => {
          setOpenDiaLog(true);
          setSelectedId(id);
     };
     const handleClose = () => {
          setOpenDiaLog(false);
          setDialogDeleteSuccess(false);
     };

     //styles rows 
     const getRowClass = (index) => {
          return classnames({
               [styles['even-row']]: index % 2 === 0,
               [styles['odd-row']]: index % 2 !== 0,
          });
     };
     //
     const getIcon = () => {
          try {
               dispatch({
                    type: HomePageAction.GET_TECHNOLOGY_START, payload: '15'
               })
          } catch (error) { }
     }
     const listicon = useSelector((state) => state.HomePage.technologyData.data?.items) || [];

     const getLocation = () => {
          try {
               dispatch({
                    type: LocationAction.GET_LOCATION_START,
               });
          } catch (error) { }
     };
     useEffect(() => {
          getIcon();
          getLocation();

     }
          , [])
     let datalocation = useSelector(
          (state) => state?.Career?.sampleData?.datalocation,
     );
     //start 
     useEffect(() => {
          if (datalocation && datalocation.length > 0 && !selectedlocation) {
               setSelectedlocation(datalocation[0]?.id);
          }
     }, [datalocation, selectedlocation]);

     //
     const getCompanyByIdLocation = (id) => {
          setSelectedlocation(id);

     }
     const getContacts = () => {
          if (selectedlocation !== undefined && selectedlocation !== null && selectedlocation !== '') {
               dispatch({
                    type: FooterAction.GET_CONTACT_START,
                    payload: selectedlocation,
                    locale: selectedLocale
               });
          }
     }
     useEffect(() => {
          getContacts();
     }, [selectedlocation,selectedLocale]);
     useEffect(() => {
          reset({
               items: contacts[0]?.items || [],
          });
     }, [contacts]);

     
     const onSubmit = (data) => {
        
          const formattedData = {
               items: data?.items.map((item) => ({
                 id: item.id,
                 location_id: item.location_id,
                 icon_id: item.icon_id,
                 json: [
                   {
                     locale: selectedLocale, 
                     name: item.name,
                     value: item.value,
                   },
                 ],
               })),
             };
           
          try {
               dispatch({
                    type: FooterAction.EDIT_COMPANY_START,
                    data: formattedData,
                    onSuccess: (data) => {
                         getContacts();
                         Utils.showSuccessToast({
                              message: <span>{t('message.updatesuccess')}</span>,
                         });
                    },
                    onError: (data) => {
                         Utils.showErrorToast({
                              message: <span>{t('message.updatefailed')}</span>,
                         });
                    },
               });
          } catch (error) { }
          setEditMode(false);

     };
     const handleDelete = (id) => {
          try {
               dispatch({
                    type: FooterAction.DELETE_COMPANY_START,
                    id: id,
                    onSuccess: () => {
                         getContacts()
                         setDialogDeleteSuccess(true);
                    },
                    onError: (data) => {
                         Utils.showErrorToast({
                              message: <span>{t("common.delete_error")}</span>,
                         });
                    },
               });
          } catch (error) { }
     };
     const handleCloseCompany = () => {
          setOpenDialogCompany(false)
     };
     //tablocale
     return (
          <>
               <DialogDeleteConfirm
                    openDialog={openDialog}
                    handleClose={handleClose}
                    onHandleClick={(e) => {
                         e.preventDefault();
                         handleDelete(selectedId);
                         setOpenDiaLog(false);
                    }}
               />
               <DialogDeleteSuccess
                    openDialog={dialogDeleteSuccess}
                    handleClose={handleClose}
               />
               <DialogAddCompany
                    selectedlocation={selectedlocation}
                    openDialog={DialogCompany}
                    handleClose={handleCloseCompany}
               />
               <form className={styles['Footer']} onSubmit={handleSubmit(onSubmit)}>

                    <div className={styles['Frame-btn-submit']} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", maxHeight: "30px", paddingRight: "80px" }}>
                         <div className={styles['section-title']}>{t("admin.company.footer")}</div>
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
                    <div style={{ padding: '0 80px' }}>
                         <TabLocale onClick={(text) => { handleSelectLocale(text) }} defaultTab={"JP"}/>
                         <div className={styles['Location-frame']}>
                              {datalocation?.map((item, index) => (
                                   <div
                                        key={index}
                                        className={` ${styles['button-none']
                                             } ${selectedlocation === item?.id ? styles['button-active']
                                                  : ''}
                                   
                                       
                                   }`}
                                        onClick={() => getCompanyByIdLocation(item?.id)}
                                   >Toploop {item?.library_name} </div>
                              ))}

                         </div>

                         <table>
                              <tbody>
                                   {Array.isArray(contacts[0]?.items) && contacts[0].items?.map((item, idx) => (
                                        <tr key={idx} className={getRowClass(idx + 1)}>
                                             <td className={styles['icon-column']}>
                                                  {loading ? ("") : (
                                                       <Controller
                                                            name={`items[${idx}].icon_id`}
                                                            control={control}
                                                            defaultValue=""
                                                            render={({ field }) => (
                                                                 <>
                                                                      <DropDownImage
                                                                           defaultValue="Image"
                                                                           options={listicon}
                                                                           selectedOption={field.value}
                                                                           onOptionSelect={field.onChange}
                                                                           editMode={editMode}
                                                                      />
                                                                 </>

                                                            )}
                                                       />
                                                  )}

                                             </td>

                                             <td className={styles['title-column']}>
                                                  <Controller
                                                       name={`items[${idx}].name`}
                                                       control={control}
                                                       defaultValue={item?.name || ''}
                                                       render={({ field }) => (
                                                            <input
                                                                 type="text"
                                                                 value={field.value}
                                                                 onChange={(e) => field.onChange(e.target.value)}
                                                                 readOnly={!editMode}
                                                            />
                                                       )}
                                                  />
                                             </td>
                                             <td className={styles['content-column']}>
                                                  <Controller
                                                       name={`items[${idx}].value`}
                                                       control={control}
                                                       defaultValue={item?.value || ''}
                                                       render={({ field }) => (
                                                            <input
                                                                 type="text"
                                                                 value={field.value}
                                                                 onChange={(e) => field.onChange(e.target.value)}
                                                                 readOnly={!editMode}
                                                            />
                                                       )}
                                                  />
                                             </td>
                                             <td className={styles['content-column']}>
                                                  <IconButton
                                                       onClick={(e) => {
                                                            e.preventDefault();
                                                            if (editMode) {
                                                                 handleClickOpen(item?.id);
                                                            }

                                                       }}
                                                       aria-label="toggle visibility"
                                                       // onMouseDown={(event) => {
                                                       //     event.preventDefault();
                                                       //     handleDelete(row?.id);
                                                       // }}
                                                       edge="end"
                                                  >
                                                       <IcDelete />
                                                  </IconButton>
                                             </td>
                                        </tr>
                                   ))}

                              </tbody>


                         </table>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", width: "100%" }}>
                         <div className={styles['btn-add-more']} style={{ display: "flex" }} onClick={(e) => setOpenDialogCompany(true)}>
                              <IcPlus />
                         </div>
                    </div>

               </form>
          </>

     )
}
