import React from 'react';
import styles from './System.module.scss';
import { useTranslation } from 'react-i18next';
import useRouter from 'hooks/use-router';
import IcArrowBlue from 'shared/components/icons/home-page/IcArrowBlue';
import RouterPath from 'router/RouterPath';
import { useHistory } from 'react-router-dom';

function System(props) {
    const {
        imageOnboarding,
        imageImplement,
        imageAiSolution,
        aiSolutionTitle,
    } = props;
    const { t } = useTranslation();
    const router = useRouter();
    const history = useHistory();

    const handleClickOnboarding = () => {
        history.push('/ai-solution#diagram1');
    };

    const handleCLickImplement = () => {
        history.push('/ai-solution#diagram2');
    };

    return (
        <div className={`${styles['system']}`}>
            <div className={'w-100 container'}>
                <div className={styles['system-wrapper']}>
                    <div className={styles['system-item']}>
                        <div className={styles['system-image']}>
                            <img src={imageOnboarding}></img>
                        </div>
                        <div className={styles['arrow']}>
                            <IcArrowBlue />
                        </div>
                        <div className={styles['arrow-mobile']}>
                            <IcArrowBlue width={25} height={25} />
                        </div>
                        <div
                            onClick={handleClickOnboarding}
                            className={styles['top-page-button']}
                            style={{ width: '210px' }}
                        >
                            {t('home.onboarding')}
                        </div>
                    </div>
                    <div className={styles['system-item']}>
                        <div className={styles['system-image']}>
                            <img src={imageImplement}></img>
                        </div>
                        <div className={styles['arrow']}>
                            <IcArrowBlue />
                        </div>
                        <div className={styles['arrow-mobile']}>
                            <IcArrowBlue width={25} height={25} />
                        </div>
                        <div
                            onClick={handleCLickImplement}
                            className={styles['top-page-button']}
                            style={{ width: '210px' }}
                        >
                            {t('home.implementation')}
                        </div>
                    </div>
                </div>
                <div className={styles['ai-solution-title']}>
                    {aiSolutionTitle}
                </div>
                <div className={styles['ai-solution']}>
                    <img src={imageAiSolution}></img>
                </div>
            </div>
        </div>
    );
}

export default System;
