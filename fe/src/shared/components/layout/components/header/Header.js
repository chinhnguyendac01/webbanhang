import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import logo from 'assets/images/Logo-toploop.png';
import IcVN from 'shared/components/icons/IcVN';
import Menu from 'shared/components/icons/Menu';
import IcJP from 'shared/components/icons/IcJP';
import IcClose from 'shared/components/icons/IcClose';
import Background from 'shared/components/icons/Background';
import LogoToploop from 'assets/images/LogoToploop.svg';
import { Outlet, Link, useLocation } from 'react-router-dom';
import useRouter from 'hooks/use-router';
import RouterPath from 'router/RouterPath';
import { useTranslation } from 'react-i18next';
import Navbar from 'shared/components/navbar/Navbar';
import NavbarLang from 'shared/components/navbar-language/NavbarLang';
import BgNavbar from '../../../../../assets/images/Navbar-toploop.png';
import { useSelector, useDispatch } from 'react-redux';
import AppAction from 'redux/app/action';
import { DataUsage } from '@mui/icons-material';
import IcEN from 'shared/components/icons/IcEN';
export default function Header() {
    const dispatch = useDispatch();
    const { locale } = useSelector((state) => state.App);

    const { t, i18n } = useTranslation();
    const openInNewTab = (url) => {
        window.open(url, '_target', 'noreferrer');
    };
    const changeLanguage = (lng) => {
        // if (lng === 'JP') {
        //     openInNewTab('https://toploop.jp/');
        // } else {
        //     i18n.changeLanguage(lng);
        // }
        i18n.changeLanguage(lng);
    };
    const pages = [
        {
            title: t('header.business'),
            path: RouterPath.BUSINESS,
        },
        {
            title: t('header.ai_solution'),
            path: RouterPath.AI_SOLUTION,
        },
        {
            title: t('header.companyInfo') || '企業情報',
            path: RouterPath.COMPANY_INFO,
        },
        {
            title: t('header.recruiment'),
            path: RouterPath.CAREER,
        },
        {
            title: t('header.contact'),
            path: RouterPath.CONTACT,
        },
    ];

    const languageData = [
        {
            id: 'JP',
            title: 'Japanese',
            icon: <IcJP width="24" height="18" />,
            acronym: 'JP',
        },
        {
            id: 'VN',
            title: 'Vietnamese',
            icon: <IcVN width="30" height="30" />,
            acronym: 'VN',
        },
        // {
        //     id: 'EN',
        //     title: 'English',
        //     icon: <IcEN width="24" height="18" />,
        //     acronym: 'EN',
        // },
    ];
    const defaultLanguage = {
        id: 'JP',
        title: 'Japanese',
        icon: <IcJP width="24" height="18" />,
        acronym: 'JP',
    };
    const dafault =
        languageData?.find((lang) => lang.id === locale?.selected) ||
        defaultLanguage;
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(dafault);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isNavOpenLang, setIsNavOpenLang] = useState(false);
    const router = useRouter();

    //dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const handleLanguageChange = (selectedId) => {
        const language = languageData.find((lang) => lang.id === selectedId);
        if (language) {
            setSelectedLanguage(language);
        }
        setIsNavOpenLang(false);
        setIsDropdownOpen(false);
    };
    useEffect(() => {
        if (selectedLanguage) {
            // if (selectedLanguage?.id !== 'JP') {
            //     changeLanguage(selectedLanguage?.id);
            //     dispatch({
            //         type: AppAction.SELECT_LOCALE,
            //         payload: selectedLanguage?.id,
            //     });
            // } else {
            //     openInNewTab('https://toploop.jp/');
            // }
            changeLanguage(selectedLanguage?.id);
            dispatch({
                type: AppAction.SELECT_LOCALE,
                payload: selectedLanguage?.id,
            });
        }
    }, [selectedLanguage]);
    //scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        if (window.scrollY > 1) {
            setIsScrolled(true);
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    //navbar
    const toggleNavbar = () => {
        setIsNavOpen(!isNavOpen);
    };
    const toggleNavbarLang = () => {
        setIsNavOpenLang(!isNavOpenLang);
    };
    //style
    const backgroundStyle =
        isNavOpen || isNavOpenLang
            ? {
                  backgroundImage: `url(${BgNavbar})`,
                  transition:
                      'all 0.3s cubic-bezier(0.51, 0.51, 0.79, 0.79) 0s',
              }
            : null;
    useEffect(() => {
        const navbar = document.getElementById('navbarNav');

        if (navbar) {
            if (isNavOpen) {
                navbar.classList.add('show');
            } else {
                navbar.classList.remove('show');
            }
        }
    }, [isNavOpen]);
    useEffect(() => {
        const navbar = document.getElementById('navbarNavLang');

        if (navbar) {
            if (isNavOpenLang) {
                navbar.classList.add('show');
            } else {
                navbar.classList.remove('show');
            }
        }
    }, [isNavOpenLang]);
    // const remainingLanguages = languageData.filter(
    //     (language) => language.id !== selectedLanguage.id
    // );

    return (
        <section
            style={backgroundStyle}
            className={`${isScrolled ? '' : 'bg-transparent'} ${
                styles['Header_menu']
            } ${
                isNavOpen || isNavOpenLang ? styles['Header_menu-opennav'] : ''
            } `}
        >
            <div className={`w-100 container ${styles['Header_container']}`}>
                <nav
                    className={`w-100  navbar-expand-lg navbar-light ${styles['Navbar']}`}
                >
                    <span
                        onClick={(e) => {
                            router.push({
                                pathname: RouterPath.HOME,
                            });
                        }}
                        className={styles['Header_navbarBrand']}
                    >
                        <div className={styles['Frame_navbarBrand']}>
                            <img
                                alt="Toploop.com"
                                title="Toploop.com"
                                className={styles['Header_imgLogo']}
                                src={LogoToploop}
                            />
                        </div>
                    </span>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav m-auto menu-box">
                            <li className="mx-sm-auto mx-md-2 nav-item">
                                <a
                                    onClick={(e) => {
                                        router.push({
                                            pathname: RouterPath.HOME,
                                        });
                                    }}
                                    className={`pb-0  mx-auto mx-lg-0 text-center nav-link ${
                                        styles['Nav-link']
                                    } 
                                    ${
                                        location?.pathname === RouterPath.HOME
                                            ? styles['Nav-link_active']
                                            : ''
                                    }  `}
                                >
                                    {t('header.home')}
                                </a>
                            </li>
                            {pages.map((page, index) => (
                                <li
                                    key={index}
                                    className={`mx-sm-auto mx-md-2 nav-item`}
                                >
                                    <a
                                        onClick={() => {
                                            router.push({
                                                pathname: page.path,
                                            });
                                        }}
                                        className={`pb-0 mx-auto mx-lg-0 text-center nav-link ${
                                            styles['Nav-link']
                                        } ${
                                            location?.pathname.startsWith(
                                                page?.path,
                                            )
                                                ? styles['Nav-link_active']
                                                : ''
                                        }`}
                                    >
                                        {page.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles['Frame_header_right']}>
                        <div className={styles['Header_buttonLanguage']}>
                            <div className={styles['Button_choose-mobile']}>
                                <button
                                    type="button"
                                    className={`${styles['Btn_language']}`}
                                    onClick={toggleNavbarLang}
                                >
                                    {selectedLanguage?.icon}
                                    <span className={styles['Text_language']}>
                                        {selectedLanguage?.acronym}
                                    </span>
                                </button>
                            </div>
                            <div className={styles['Button_choose']}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px',
                                        paddingTop: '7px',
                                    }}
                                >
                                    {/* <a href="https://toploop.jp/" style={{lineHeight:'0px'}}>
                                        <IcJP />
                                    </a> */}
                                    {languageData.map((language) => (
                                        <button
                                            key={language.id}
                                            className={`${styles['Btn-lang']} ${
                                                selectedLanguage.id ===
                                                language.id
                                                    ? styles['selected']
                                                    : ''
                                            }`}
                                            onClick={() =>
                                                handleLanguageChange(
                                                    language.id,
                                                )
                                            }
                                        >
                                            {language.icon}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {isNavOpen ? (
                            <>
                                {' '}
                                <button
                                    className={`navbar-toggle ${styles['Header_iconMenu']}`}
                                    type="button"
                                    onClick={toggleNavbar}
                                >
                                    <IcClose color="#FF8B13" />
                                </button>
                            </>
                        ) : (
                            <>
                                {' '}
                                <button
                                    className={`navbar-toggle ${styles['Header_iconMenu']}`}
                                    type="button"
                                    onClick={toggleNavbar}
                                >
                                    <Menu />
                                </button>
                            </>
                        )}
                    </div>
                </nav>
                {isNavOpen ? (
                    <>
                        {' '}
                        <div
                            className={styles['Header_overlay']}
                            onClick={toggleNavbar}
                        ></div>
                    </>
                ) : (
                    <></>
                )}
                <Navbar imgUrl={BgNavbar} isNavOpen={isNavOpen} pages={pages} />
                {isNavOpenLang ? (
                    <>
                        {' '}
                        <div
                            className={styles['Header_overlay']}
                            onClick={toggleNavbarLang}
                        ></div>
                    </>
                ) : (
                    <></>
                )}
                <NavbarLang
                    imgUrl={BgNavbar}
                    selectedLanguage={selectedLanguage}
                    handleLanguageChange={handleLanguageChange}
                    remainingLanguages={languageData}
                    isNavOpen={isNavOpenLang}
                />
            </div>
        </section>
    );
}
