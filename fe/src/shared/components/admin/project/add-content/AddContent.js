import React, { useState, useEffect} from 'react';
import { useDispatch } from "react-redux";
import styles from './AddContent.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Input from 'shared/components/admin/common/input/Input';
import Editor from 'shared/components/editor/Editor';
import classnames from 'classnames';
import IcPlus from 'shared/components/icons/IcPlus';
import TabSwitcher from 'shared/components/admin/tab-switcher/TabSwitcher';
import ProjectAction from 'redux/project/action';
import { useTranslation } from 'react-i18next';

function AddContent({handleNext, formData}) {
    
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const history = useHistory();
    const { handleSubmit, control, setValue, formState: { errors } } = useForm({
        criteriaMode: "all",
        defaultValues: {
            name: '',
            description: '',
            category: '',
            device: ''
        },
    });
    const [currentTab, setCurrentTab] = useState(0);
    const [newRows, setNewRows] = useState([]);
    const [localeFormData, setLocaleFormData] = useState({items: []});
    const [disabledTabs, setDisabledTabs] = useState([]);

    const getRowClass = (index) => {
        return classnames({
            [styles['even-row']]: index % 2 === 0,
            [styles['odd-row']]: index % 2 !== 0,
        });
    };

    const localeToTitle = {
        JP: {
            name: '名称',
            category: 'カテゴリー',
            device: '対応端末',
            overview: 'ロジェクト概要'
        },
        VN: {
            name: 'Tên dự án',
            category: 'Loại',
            device: 'Thiết bị tương thích',
            overview: 'Tổng quan dự án'
        },
        EN: {
            name: 'Project name',
            category: 'Category',
            device: 'Compatible device',
            overview: 'Overview'
        },
    };

    const getLocaleFromTab = (tabIndex) => {
        switch (tabIndex) {
            case 0:
                return 'JP';
            case 1:
                return 'VN';
            case 2:
                return 'EN';
            default:
                return 'JP';
        }
    };

    const getOtherTabs = (currentTab) => {
        const allTabs = ['JP', 'VN', 'EN'];
        const otherTabs = allTabs.filter(tab => tab !== getLocaleFromTab(currentTab));
        setDisabledTabs(otherTabs);
    };

    const handleAddRow = () => {
        const newRow = { key: '', value: '' };
        setNewRows((prevRows) => [...prevRows, newRow]);
    };

    const handleCancel = () => {
        history.push('/admin/project')
    }

    const onSubmit = (data) => {
        const currentItem = {
            locale: getLocaleFromTab(currentTab),
            name: data.name,
            category: data.category,
            device: data.device,
            description: data.description,
            other: data.other || [],
        };
        setLocaleFormData((prevData) => {
            return {
                items: [...prevData.items, currentItem],
            };
        });
        if (currentTab < 2) {
            setCurrentTab(currentTab + 1);
        } else {
            handleNext();
        }
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        
        if (localeFormData.items.length === 3) {
            formData.append('json', JSON.stringify(localeFormData))
            dispatch({
                type: ProjectAction.CREATE_PROJECTS_START,
                payload: formData,
            });
        }
    }, [localeFormData]);

    useEffect(() => {
        getOtherTabs(currentTab);
    }, [currentTab]);

    return (  
        <div className={styles['add-content']}>
            <div className={styles['tab-locale']}>
                <TabSwitcher onSelectTab={setCurrentTab} activeTab={currentTab} disabledTabs={disabledTabs}/>
            </div>
            <form className={styles['form-wrapper']} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles['section-content']}>
                    <div className={styles['item-name']}>{t('admin.project.title')}</div>
                    <div className={styles['project-name']}>
                        <Input
                            props={{
                                control: control,
                                name: "name",
                                label: "",
                                setValue: setValue,
                                errors: errors,
                            }}
                        />
                    </div>
                    <div className={styles['item-content-1']}>{t('admin.project.content')}</div>
                    <div className={styles['project-desc']}>
                        <Controller
                            name="description"  
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <div className={styles['frame-message']}>
                                    <Editor 
                                        setEditorHtml={onChange} 
                                        editorHtml={value}
                                    />
                                </div>
                            )}
                        />
                    </div>
                    <div className={styles['item-content-2']}>{t('admin.project.info')}</div>
                    <table>
                        <tbody>
                            <tr className={getRowClass(1)}>
                                <th className={styles['title-column']}>{localeToTitle[getLocaleFromTab(currentTab)].name}</th>
                                <td className={styles['content-column']}>
                                    <Controller
                                        name='name'
                                        control={control}
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                type="text"
                                                required
                                            />
                                        )}
                                    />
                                </td>
                            </tr>
                            <tr className={getRowClass(2)}>
                                <th className={styles['title-column']}>{localeToTitle[getLocaleFromTab(currentTab)].category}</th>
                                <td className={styles['content-column']}>
                                    <Controller
                                        name='category'
                                        control={control}
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                type="text"
                                                required
                                            />
                                        )}
                                    />
                                </td>
                            </tr>
                            <tr className={getRowClass(3)}>
                                <th className={styles['title-column']}>{localeToTitle[getLocaleFromTab(currentTab)].device}</th>
                                <td className={styles['content-column']}>
                                    <Controller
                                        name='device'
                                        control={control}
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                type="text"
                                                required
                                            />
                                        )}
                                    />
                                </td>
                            </tr>
                            <tr className={getRowClass(4)}>
                                <th className={styles['overview']}>{localeToTitle[getLocaleFromTab(currentTab)].overview}</th>
                                <td className={styles['content-column']}></td>
                            </tr>
                            {newRows.map((row, index) => (
                                <tr key={`newRow_${index + 1}`} className={getRowClass(index + 5)}>
                                    <th className={styles['title-column']}>
                                        <input
                                            name={`other[${index}].key`}  // Use dynamic name
                                            type="text"
                                            onChange={(e) => {
                                                setValue(`other[${index}].key`, e.target.value);
                                            }}
                                        />
                                    </th>
                                    <td className={styles['content-column']}>
                                        <input
                                            name={`other[${index}].value`}  // Use dynamic name
                                            type="text"
                                            onChange={(e) => {
                                                setValue(`other[${index}].value`, e.target.value);
                                            }}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                        <div className={styles['btn-add-more']} onClick={handleAddRow}>
                            <IcPlus />
                        </div>
                    </div>
                </div>
                <div className={styles['action']}>
                    {currentTab === 2 ? (
                        <>
                            <button className={styles['btn-cancel']} onClick={handleCancel}>
                                {t('admin.project.cancel')}
                            </button>
                            <button type="submit" className={styles['btn-submit']}>
                                {t('admin.project.create')}
                            </button>
                        </>
                    ) : (
                        <>
                            <button type="submit" className={styles['btn-submit']}>
                                {t('admin.project.next')}
                            </button>
                        </>
                    )}
                </div>
            </form>
        </div>
    );
}

export default AddContent;