import React from 'react';
import styles from './CareerJob.module.scss';
import IcCalendar from 'shared/components/icons/IcCalendar';
import IcLocation from 'shared/components/icons/IcLocation';
import IcMoney from 'shared/components/icons/IcMoney';
import IcArrow from 'shared/components/icons/IcArrow';
import useRouter from 'hooks/use-router';
import RouterPath from 'router/RouterPath';
import Utils from 'utils/Utils';
import { useTranslation } from 'react-i18next';
export default function CareerJob({ row }) {
    const router = useRouter();
    const { t } = useTranslation();
    const handleClick = () => {
        router.push({
            pathname: `/career/info/${row?.id}`,
        });

        // window.scrollTo(0, 0);
    };
    const formattedDate = row?.created_at ? new Date(row.created_at).toISOString().split('T')[0] : null;
    return (
        <div className={styles['Job_data']}>
            <div className={styles['Frame_title-job']}>
                <h1 className={styles['Title_job']} onClick={handleClick}>{row?.title}</h1>
                <span className={styles['Time_job']}>
                    {t(`career.${row?.work_type_name}`)}
                    {/* {row?.work_type_name} */}
                </span>
            </div>
            <div className={styles['Data_job']}>
                <div className={styles['Data_job-start']}>
                    <div className={styles['Frame_post-time-news']}>
                        <IcCalendar />

                        <span className={styles['Time_post']}>
                            {formattedDate}
                        </span>
                    </div>
                    <div className={styles['Frame-location_news']}>
                        <IcLocation />

                        <span className={styles['Address']}>
                            {t(`career.${row?.location_name}`)}
                        </span>
                    </div>
                </div>
                <div className={styles['Data_job-end']}>
                    <div className={styles['Frame_salary-job']}>
                        <IcMoney />

                        <span className={styles['Money_job']}>
                            {t("career.salary")}: {Utils?.formatCurrencyString(row?.salary)}
                        </span>
                    </div>
                    <div
                        onClick={handleClick}
                        className={styles['Icon_detail-job']}
                    >
                        <IcArrow className={styles['Arrow-icon']} />
                    </div>
                </div>
            </div>
        </div>
    );
}
