import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './TechnologyStack.module.scss';
import HomePageAction from 'redux/home-page/action';
import Sections from 'utils/Sections';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';
function TechnologyStack() {

    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [selectedTab, setSelectedTab] = useState('Backend');

    const technologyItem = ['Backend', 'Frontend', 'Mobile', 'Database'];

    const handleTabClick = (tab, type) => {
        setSelectedTab(tab);
        dispatch({ type: HomePageAction.GET_TECHNOLOGY_START, payload: type })
    };

    const technology = useSelector((state) => state.HomePage.technologyData.data?.items) || [];
    const { sectionData } = useSelector(state => state.HomePage)
    const [techStack, setTechStack] = useState(null);
    useEffect(() => {
        if (sectionData?.data) {
            const rawData = sectionData?.data?.items?.find(item => item.name === Sections.top.tech_stack)
            const data = {
                ...rawData,
                content: JSON.parse(rawData?.content || '{}')
            }
            setTechStack(data);
        }
    }, [sectionData])
    return (
        <div>
            <div className={styles['TechnologyStack']}>
                <div className={'w-100 container'}>
                    <div className={styles['technology-stack']}>
                        <div className={styles['title']}>
                            <div className={styles['topic']}>
                                {t("home.tech_stack")}
                            </div>
                            <div className={styles['tabs']}>
                                {technologyItem?.map((job, index) => (
                                    <React.Fragment key={index}>
                                        <label
                                            className={`${styles['tab-item']} ${job === selectedTab ? styles['active'] : ''}`}
                                            onClick={() => handleTabClick(job, index + 2)}
                                        >
                                            {job}
                                            {index < technologyItem.length - 1 && <span className={styles['separator']}>|</span>}
                                        </label>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        <div className={styles['jobs-wrapper']}>
                            <div className={styles['jobs']}>
                                {technology?.map((item, index) => (
                                    <Fade top key={index}>
                                        <div className={styles['image-container']}>
                                            <img
                                                className={styles['job-img']}
                                                src={`${process.env.REACT_APP_STORAGE_URL}${item.image}`}
                                                // src={item.image}
                                                alt={item.name}
                                            />
                                        </div>

                                    </Fade>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechnologyStack;