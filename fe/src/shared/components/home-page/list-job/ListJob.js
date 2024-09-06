import React, { useEffect, useState, useMemo } from 'react';
import styles from './ListJob.module.scss';
import DropDown from 'shared/components/dropdown/DropDown';
import useRouter from 'hooks/use-router';
import IcArrow from 'shared/components/icons/IcArrow';
import FectchSample from '../../../../redux/career/action';
import { useDispatch, useSelector } from 'react-redux';
import CareerJob from 'shared/components/career/title-job/CareerJob';
import { useForm, Controller } from 'react-hook-form';
import RouterPath from 'router/RouterPath';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function ListJob() {
    const router = useRouter();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { locale } = useSelector((state) => state.App);
    const {
        control,
        setValue,
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const location_id = watch('address');
    const typejob_id = watch('developer');
    const getCareer = () => {
        try {
            dispatch({
                type: FectchSample.GET_CAREER_START,
                location_id: location_id,
                job_id: typejob_id,
                locale: locale?.selected,
                locale_id: locale?.selected === "VN" ? "EN" : locale?.selected
            });
        } catch (error) { }
    };
    useEffect(() => {
        getCareer();
    }, [location_id, typejob_id, locale]);

    const data = useSelector((state) => state?.Career?.sampleData?.data?.data);
    const total = useSelector(
        (state) => state?.Career?.sampleData?.data?.total,
    );
    const topdata = data?.slice(0, 3);
    const lengthdata = total;
    const lengthtopdata = topdata?.length;
    //get Location and type job
    const getLocation = () => {
        try {
            dispatch({
                type: FectchSample.GET_LOCATION_START,
            });
        } catch (error) { }
    };
    const getTypeJob = () => {
        try {
            dispatch({
                type: FectchSample.GET_TYPEJOB_START,
            });
        } catch (error) { }
    };
    useEffect(() => {
        getLocation();
        getTypeJob();
    }, []);
    const datalocation = useSelector(
        (state) => state?.Career?.sampleData?.datalocation,
    );
    const datatypejob = useSelector(
        (state) => state?.Career?.sampleData?.datatypejob,
    );
    return (

        <div className={`container ${styles['List-job']}`}>
            <h1 className={styles['Title']}>{t('recruitment.title')}</h1>
            <form className={styles['Search_job-box']}>
                <div className={styles['Frame_dropdown']}>
                    <div className={styles['Dropdown']}>
                        <Controller
                            name="developer"
                            control={control}
                            defaultValue=""
                            render={({ field: { ref, ...rest } }) => (
                                <DropDown
                                    defaultValue={t('career.Developer')}
                                    options={datatypejob}
                                    selectedOption={rest.value}
                                    onOptionSelect={rest.onChange}
                                />
                            )}
                        />
                    </div>
                    <div className={styles['Dropdown']}>
                        <Controller
                            name="address"
                            control={control}
                            defaultValue=""
                            render={({ field: { ref, ...rest } }) => (
                                <DropDown
                                    defaultValue={t('career.Address')}
                                    options={datalocation}
                                    selectedOption={rest.value}
                                    onOptionSelect={rest.onChange}
                                />
                            )}
                        />
                    </div>
                </div>
            </form>
            <div className={styles['Showing_frame']}>
                <span className={styles['Showing']}>
                    {t("tablepagination.showing")} {lengthtopdata} {t("tablepagination.of")} {lengthdata}
                </span>
                <div
                    onClick={(e) => {
                        router.push({
                            pathname: RouterPath.CAREER,
                        });
                    }}
                    className={styles['Link_listjob']}
                >
                    <span className={styles['See_more']}>
                        {t('common.seemore')}
                    </span>
                    <span className={styles['Icon_nextpage']}>
                        <IcArrow width="20" height="20" />
                    </span>
                </div>
            </div>
            <div className={styles['Frame_listjob']}>
                {locale?.selected === "JP" && topdata?.length === 0 ? (
                    <p></p>
                ) : (
                    topdata?.map((row, index) => (
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            className={styles['Job_data-frame']}
                            key={index}
                        >
                            <CareerJob row={row} />
                            <div className={styles['Line_job']}></div>
                        </motion.div>
                    ))
                )}
               
            </div>
        </div>

    );
}
