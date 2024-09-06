import React from 'react';
import styles from './Navbar.module.scss';
import useRouter from 'hooks/use-router';
import RouterPath from 'router/RouterPath';
import { useTranslation } from 'react-i18next';
export default function Navbar(props) {
    const { t } = useTranslation();
    const { isNavOpen, imgUrl, pages } = props;
    const backgroundStyle = {
        backgroundImage: `url(${imgUrl})`,
        transition: 'all 0.3s cubic-bezier(0.51, 0.51, 0.79, 0.79) 0s',
    };

    const router = useRouter();
    return (
        <div
            style={backgroundStyle}
            className={`collapse navbar-collapse ${isNavOpen ? styles['Sidebar_header'] : ''} `}
            id="navbarNav"
        >
            <ul className="w-100 navbar-nav  menu-box">
                <li className="mx-sm-auto mx-md-2 py-3 px-auto nav-link text-center">
                    <a
                        onClick={(e) => {
                            router.push({
                                pathname: RouterPath.HOME,
                            });
                        }}
                        className={`mx-auto mx-lg text-center  ${location?.pathname === RouterPath.HOME
                            ? styles['Nav-link_active']
                            : styles['Nav-link']}`}
                    >
                        {t('header.home')}
                    </a>
                </li>
                {pages.map((page, index) => (
                    <li
                        key={index}
                        className={`mx-sm-auto mx-md-2 py-3 px-auto nav-link text-center`}
                    >
                        <a
                            onClick={() => {
                                router.push({
                                    pathname: page.path,
                                });
                            }}
                            className={`mx-auto mx-lg text-center  ${location?.pathname.startsWith(page?.path)
                                ? styles['Nav-link_active']
                                : styles['Nav-link']}`}
                        >
                            {page.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
