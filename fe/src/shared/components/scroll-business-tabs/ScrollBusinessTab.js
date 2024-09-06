import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import useRouter from 'hooks/use-router'
import RouterPath from 'router/RouterPath';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const ScrollBusinessTab = () => {
    const route = useRouter();
    const location = useLocation();
    const history = useHistory();
    const businessPages = [
        {
            label: "main",
            url: RouterPath.BUSINESS
        },
        {
            label: "contract",
            url: RouterPath.CONTRACT
        },
        {
            label: "lab",
            url: RouterPath.LABTYPE
        },
        {
            label: "holon",
            url: RouterPath.HOLON
        }
    ];
    // const [pages, setPages] = useState([]);
    const { t } = useTranslation();
    // useEffect(() => {
    //     if (location.pathname) {
    //         setPages(businessPages.filter(item => item.url !== location.pathname))
    //     }
    // }, [location])
    const handleGoTo = (url) => {
        if (url == RouterPath.BUSINESS) {
            route.push({
                pathname: url,
                params: {
                    section: "section1"
                }
            })
        }
        else {
            history.push(url)
        }
    }
    return (
        <div className={styles['scroll-menu']}>
            {Array.isArray(businessPages) && businessPages.map((page, index) => (
                <div key={index}>
                    <div className={styles['item']}
                        onClick={() => {
                            handleGoTo(page?.url);
                        }}
                    >
                        <div className={styles['vertical-text']}>
                            {/* {t(`business-tabs.${page?.label}`).split('').map((char, charIndex) => (
                                <span key={charIndex}>{char}</span>
                            ))} */}
                            {t(`business-tabs.${page?.label}`)}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ScrollBusinessTab
