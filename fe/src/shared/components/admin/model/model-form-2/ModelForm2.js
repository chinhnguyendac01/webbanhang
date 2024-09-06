import React from 'react'

import ButtonSubmit from '../../common/button-submit/ButtonSubmit';
import BannerForm from '../banner-form/BannerForm';
import { useState } from 'react';
import { useEffect } from 'react';
import Sections from 'utils/Sections';
import ModelInfoTable from '../model-info-table/ModelInfoTable';
import { useDispatch } from 'react-redux';
import PageAction from 'redux/page/action';
import Utils from 'utils/Utils';
import SectionForm from '../../section-form/SectionForm';
import { useTranslation } from 'react-i18next';
const ModelForm2 = ({ data, loadData = () => { } }) => {
    const { t } = useTranslation();
    const [banner, setBanner] = useState(null);
    const [dataSubmit, setDataSubmit] = useState([])
    const [showSubmmit, setShowSubmit] = useState(false)
    const [introduce, setIntroduce] = useState(null);
    const [overview, setOverview] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        if (data) {
            setBanner(Array.isArray(data?.items) ? data?.items?.find(item => item.name == Sections.holon.banner) : {});
            setIntroduce(Array.isArray(data?.items) ? data?.items?.find(item => item.name == Sections.holon.introduce) : {});
            setOverview(Array.isArray(data?.items) ? data?.items?.find(item => item.name == Sections.holon.overview) : {});
        }
    }, [data])
    const onSaveEdit = (dataSubmit) => {
        // const existingIndex = dataSubmit.findIndex((item) => item.id === data?.id);
        // if (existingIndex !== -1) {
        //     dataSubmit[existingIndex] = data;
        // } else {
        //     dataSubmit.push(data);
        // }
        // setShowSubmit(true)
        dispatch({
            type: PageAction.EDIT_SECTION_START,
            data: dataSubmit,
            id: dataSubmit?.id,
            onSuccess: (message) => {
                Utils.showSuccessToast({ message: (<span>{t("common.success")}</span>) })
                loadData()
            },
            onError: (message) => {
                Utils.showErrorToast({ message: (<span>{message}</span>) })
            }
        })
    };
    // const handleSubmit = () => {
    //     if (dataSubmit?.length) {
    //         dispatch({
    //             type: PageAction.EDIT_SECTIONS_IN_PAGE_START,
    //             data: dataSubmit,
    //             onSuccess: (message) => {
    //                 Utils.showSuccessToast({ message: (<span>{message}</span>) })
    //                 window.location.reload();
    //             },
    //             onError: (message) => {
    //                 Utils.showErrorToast({ message: (<span>{message}</span>) })
    //             }
    //         })
    //     }
    // }
    return (
        <div>
            <BannerForm data={banner} onSave={onSaveEdit}
                sectionName={t("admin.company.top-content")}
            />
            <div style={{ marginTop: "36px" }}>
                <SectionForm
                    props={
                        {
                            id: introduce?.id,
                            title: introduce?.title,
                            text: introduce?.content?.text || introduce?.content,
                            locale_id: introduce?.locale_id,
                            section_id: introduce?.section_id
                        }
                    }
                    onSave={(data) => { onSaveEdit(data) }}
                    sectionName={t("admin.company.introduce")}
                    showEditTitle={false}
                />
                <SectionForm
                    props={
                        {
                            id: overview?.id,
                            title: overview?.title,
                            text: overview?.content?.text || overview?.content,
                            locale_id: overview?.locale_id,
                            section_id: overview?.section_id
                        }
                    }
                    onSave={(data) => { onSaveEdit(data) }}
                    sectionName={t("admin.edit_page.holon_advantage")}
                />
            </div>
            {/* {
                showSubmmit && <ButtonSubmit onClick={() => { handleSubmit(); }} />
            } */}

        </div>
    )
}

export default ModelForm2
