import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import styles from './BusinessDevelopment.module.scss';
import svgTop from 'assets/images/hp-business-development/business-top.svg';
import svgBottom from 'assets/images/hp-business-development/business-bottom.svg';
import { useTranslation } from 'react-i18next';
import Sections from 'utils/Sections';
import RouterPath from 'router/RouterPath';
import defaultImage from 'assets/images/default_image.png'
function BusinessDevelopment() {
    const { sectionData } = useSelector(state => state.HomePage)
    const [contractBusiness, setContractBusiness] = useState(null);
    const [systemBusiness, setSystemBusiness] = useState(null)
    const { t } = useTranslation();
    const { locale } = useSelector(state => state.App)
    useEffect(() => {
        if (sectionData?.data) {
            const rawDataCon = sectionData?.data?.items?.find(item => item.name === Sections.top.contract_business)
            const rawDataSys = sectionData?.data?.items?.find(item => item.name === Sections.top.system_business)
            const dataContract = {
                ...rawDataCon,
                path: rawDataCon?.path ? `${process.env.REACT_APP_STORAGE_URL}${rawDataCon.path}` : ""
            }
            const dataSystem = {
                ...rawDataSys,
                path: rawDataSys?.path ? `${process.env.REACT_APP_STORAGE_URL}${rawDataSys.path}` : ""
            }
            setContractBusiness(dataContract);
            setSystemBusiness(dataSystem);
        }
    }, [sectionData])
    let history = useHistory();

    const handleContractClick = () => {
        history.push('/business?section=section1');
    }

    const handleSystemClick = () => {
        history.push('/business?section=section2');
    }

    return (
        <div className={styles['business-wrapper']}>
            <div className={'w-100 container'}>
                <div className={styles['ContractBusiness']}>
                    <div className={styles['contract']}>
                        <div className={styles['contract-image']}>
                            <img src={contractBusiness?.path || defaultImage} />
                        </div>
                        <div className={styles['contract-content']}>
                            <div className={styles['first-content']}>
                                <div className={styles['topic']}>
                                    {contractBusiness?.title}
                                </div>
                                <div className={styles['text']} >
                                    <div style={{ padding: "0px", overflow: "unset" }} className="view ql-editor" dangerouslySetInnerHTML={{ __html: contractBusiness?.content }} />
                                </div>
                            </div>
                            <div className={styles['detail-btn']}>
                                <button onClick={handleContractClick}>{t("home.clickDetail") || '詳細はこちら'}</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles['small-contract']}>
                        <div className={styles['image']}>
                            <img src={contractBusiness?.path || defaultImage} />
                        </div>
                        <div className={styles['small-contract-content']}>
                            <div className={styles['topic']}>
                                {contractBusiness?.title}
                            </div>
                            <div className={styles['mobile-contract']}>
                                <div style={{ padding: "0px", overflow: "unset" }} className="view ql-editor" dangerouslySetInnerHTML={{ __html: contractBusiness?.content }} />
                            </div>
                        </div>
                        <div className={styles['detail-btn']}>
                            <button onClick={handleContractClick}>{t("home.clickDetail")}</button>
                        </div>
                    </div>
                    <div className={styles['contract-svg']}>
                        <img src={svgTop} />
                    </div>
                </div>
                <div className={styles['SystemBusiness']}>
                    <div className={styles['system']}>
                        <div className={styles['system-content']}>
                            <div className={styles['second-content']}>
                                <div className={styles['topic']}>
                                    {systemBusiness?.title}
                                </div>
                                <div className={styles['main-content']}>
                                    <div style={{ padding: "0px" }} className="view ql-editor" dangerouslySetInnerHTML={{ __html: systemBusiness?.content }} />
                                </div>
                            </div>
                            <div className={styles['detail-btn-second']}>
                                <button onClick={handleSystemClick}>{t("home.clickDetail_2") || '事業内容はこちら'}</button>
                            </div>
                        </div>
                        <div className={styles['system-image']}>
                            <img src={systemBusiness?.path || defaultImage} />
                        </div>
                    </div>
                    <div className={styles['mobile-system']}>
                        <div className={styles['mobile-system-image']}>
                            <img src={systemBusiness?.path || defaultImage} />
                        </div>
                        <div className={styles['mobile-system-content']}>
                            <div className={styles['topic']}>
                                {systemBusiness?.title}
                            </div>
                            <div className={styles['main-content']}>
                                <div style={{ padding: "0px" }} className="view ql-editor" dangerouslySetInnerHTML={{ __html: systemBusiness?.content }} />
                            </div>
                        </div>
                        <div className={styles['detail-btn']}>
                            <button onClick={handleSystemClick}>{t("home.clickDetail_2")}</button>
                        </div>
                    </div>
                    <div className={styles['system-svg']}>
                        <img src={svgBottom}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BusinessDevelopment;