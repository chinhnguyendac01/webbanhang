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
const ModelForm1 = ({ data, loadData = () => { } }) => {
    const { t } = useTranslation();
    const [banner, setBanner] = useState(null);
    const [model, setModel] = useState(null);
    const [overview, setOverView] = useState(null);
    const [overviewVN, setOverViewVN] = useState(null);
    const [overviewEN, setOverViewEN] = useState(null);
    const [dataSubmit, setDataSubmit] = useState([])
    const [showSubmmit, setShowSubmit] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        if (data) {
            setBanner(Array.isArray(data?.items) ? data?.items?.find(item => item.name == Sections.contract.banner || item.name == Sections.lab.banner) : {});
            setModel(Array.isArray(data?.items) ? data?.items?.find(item => item.name == Sections.contract.model || item.name == Sections.lab.model) : {});
            setOverView(Array.isArray(data?.items) ? data?.items?.find(item => item.name == Sections.contract.overview || item.name == Sections.lab.overview) : {});
            setOverViewVN(Array.isArray(data?.items) ? data?.items?.find(item => item.name == Sections.contract?.overviewVN || item.name == Sections.lab?.overviewVN || item.name == "overviewVN") : {});
            setOverViewEN(Array.isArray(data?.items) ? data?.items?.find(item => item.name == Sections.contract?.overviewEN || item.name == Sections.lab?.overviewEN || item.name == "overviewEN") : {});
            // const rawOverviewDataVN = data?.items?.find(item => item.name === Sections.contract?.overviewVN)
            // const overviewDataVN = {
            //     ...rawOverviewDataVN,
            //     path: rawOverviewDataVN?.path ? `${process.env.REACT_APP_STORAGE_URL}${rawOverviewDataVN.path}` : null
            // }
            // setOverViewVN(overviewDataVN)
            // const rawOverviewDataEN = data?.items?.find(item => item.name === Sections.contract?.overviewEN)
            // const overviewDataEN = {
            //     ...rawOverviewDataEN,
            //     path: rawOverviewDataEN?.path ? `${process.env.REACT_APP_STORAGE_URL}${rawOverviewDataEN.path}` : null
            // }
            // setOverViewEN(overviewDataEN)
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
    //     if (dataSubmit.length) {
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
            <BannerForm
                data={banner} onSave={onSaveEdit}
                sectionName={t("admin.company.top-content")}
            />
            <SectionForm onSave={onSaveEdit}
                props={
                    {
                        id: overview?.id || overviewVN?.id || overviewEN?.id,
                        title: overview?.title || overviewVN?.title || overviewEN?.title,
                        text: overview?.content?.text || overview?.content || overviewVN?.content?.text || overviewVN?.content || overviewEN?.content?.text || overviewEN?.content,
                        locale_id: overview?.locale_id || overviewVN?.locale_id || overviewEN?.locale_id,
                        section_id: overview?.section_id || overviewVN?.section_id || overviewEN?.section_id
                    }
                }
                sectionName={t("admin.company.introduce")}
                showEditTitle={false}
            />
            <div style={{ marginTop: "36px" }}>
                <ModelInfoTable
                    sectionName={t("admin.edit_page.model_content")}
                    data={model}
                    onSave={onSaveEdit}
                />
            </div>
            {/* {
                showSubmmit && <ButtonSubmit onClick={() => { handleSubmit(); }} />
            } */}

        </div>
    )
}

export default ModelForm1
