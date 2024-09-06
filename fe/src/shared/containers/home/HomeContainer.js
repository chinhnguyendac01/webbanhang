import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import HomePageAction from 'redux/home-page/action';
import styles from './HomeContainer.module.scss';
import DialogLoadingcustom from 'shared/components/dialog-loading/DialogLoading';
import TopBanner from 'shared/components/home-page-second/banner/TopBanner';
import System from 'shared/components/home-page-second/system/System';
import PageAction from 'redux/page/action';
import Pages from 'utils/Page';
import Sections from 'utils/Sections';

function HomeContainer() {
    const { locale } = useSelector((state) => state.App);
    const { selectedSections, loading } = useSelector((state) => state.Page);
    const [onboarding, setOnboarding] = useState(null);
    const [onboardingVN, setOnboardingVN] = useState(null);
    // const [onboardingEN, setOnboardingEN] = useState(null);
    const [implement, setImplement] = useState(null);
    const [implementVN, setImplementVN] = useState(null);
    // const [implementEN, setImplementEN] = useState(null);
    const [aiSolution, setAiSolution] = useState(null);
    const [aiSolutionVN, setAiSolutionVN] = useState(null);
    // const [aiSolutionEN, setAiSolutionEN] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (locale?.selected) {
            dispatch({
                type: HomePageAction.GET_SECTION_DATA_START,
                locale: locale?.selected,
            });
            dispatch({
                type: PageAction.GET_SECTION_IN_PAGE_START,
                page: Pages.top,
                locale: locale?.selected,
            });
        }
    }, [locale]);

    useEffect(() => {
        if (selectedSections) {
            const rawOnboardingData = selectedSections?.items?.find(
                (item) => item.name === Sections.top.onboarding,
            );
            const onboardingData = {
                ...rawOnboardingData,
                path: rawOnboardingData?.path
                    ? `${process.env.REACT_APP_STORAGE_URL}${rawOnboardingData.path}`
                    : null,
            };
            setOnboarding(onboardingData);

            const rawOnboardingDataVN = selectedSections?.items?.find(
                (item) => item.name === Sections.top.onboardingVN,
            );
            const onboardingDataVN = {
                ...rawOnboardingDataVN,
                path: rawOnboardingDataVN?.path
                    ? `${process.env.REACT_APP_STORAGE_URL}${rawOnboardingDataVN.path}`
                    : null,
            };
            setOnboardingVN(onboardingDataVN);

            const rawImplementData = selectedSections?.items?.find(
                (item) => item.name === Sections.top.implement,
            );
            const implementData = {
                ...rawImplementData,
                path: rawImplementData?.path
                    ? `${process.env.REACT_APP_STORAGE_URL}${rawImplementData.path}`
                    : null,
            };
            setImplement(implementData);

            const rawImplementDataVN = selectedSections?.items?.find(
                (item) => item.name === Sections.top.implementVN,
            );
            const implementDataVN = {
                ...rawImplementDataVN,
                path: rawImplementDataVN?.path
                    ? `${process.env.REACT_APP_STORAGE_URL}${rawImplementDataVN.path}`
                    : null,
            };
            setImplementVN(implementDataVN);

            const rawAiSolutionData = selectedSections?.items?.find(
                (item) => item.name === Sections.top.aiSolution,
            );
            const aiSolutionData = {
                ...rawAiSolutionData,
                path: rawAiSolutionData?.path
                    ? `${process.env.REACT_APP_STORAGE_URL}${rawAiSolutionData.path}`
                    : null,
            };
            setAiSolution(aiSolutionData);

            const rawAiSolutionDataVN = selectedSections?.items?.find(
                (item) => item.name === Sections.top.aiSolutionVN,
            );
            const aiSolutionDataVN = {
                ...rawAiSolutionDataVN,
                path: rawAiSolutionDataVN?.path
                    ? `${process.env.REACT_APP_STORAGE_URL}${rawAiSolutionDataVN.path}`
                    : null,
            };
            setAiSolutionVN(aiSolutionDataVN);
        }
    }, [selectedSections]);

    return (
        <div className={styles['HomeContainer']}>
            {loading && <DialogLoadingcustom openDialog={loading} />}
            <div className={styles['top-banner']}>
                <TopBanner />
            </div>
            <div className={styles['system']}>
                <System
                    imageOnboarding={onboarding?.path || onboardingVN?.path}
                    imageImplement={implement?.path || implementVN?.path}
                    imageAiSolution={aiSolution?.path || aiSolutionVN?.path}
                    aiSolutionTitle={aiSolution?.title || aiSolutionVN?.title}
                />
            </div>
        </div>
    );
}
export default HomeContainer;
