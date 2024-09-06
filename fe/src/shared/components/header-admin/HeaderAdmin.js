import React, { useState, useRef, useEffect } from 'react';
import styles from './HearderAdmin.module.scss';
import IcSearch from '../icons/IcSearch';
import IcBell from '../icons/IcBell';
import IcAvatar from '../icons/IcAvatar';
import Cookies from 'js-cookie';
import useRouter from 'hooks/use-router';
import RouterPath from 'router/RouterPath';
import IcLogout from '../icons/IcLogout';
import useOnClickOutside from 'hooks/use-onclick-outside';
import ChangeLangue from '../change-lang/ChangeLangue';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import IcVN from 'shared/components/icons/IcVN';
import IcJP from 'shared/components/icons/IcJP';
import IcEN from 'shared/components/icons/IcEN';
import AppAction from 'redux/app/action';
export default function HeaderAdmin() {
    const { locale } = useSelector(state => state.App)
    const [logout, setLogout] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();
    const dropdownRef = useRef(null);
    var cookieValue = Cookies.get('User');
    const { loading } = useSelector((state) => state.Auth);

    if (cookieValue) {
        var User = JSON.parse(cookieValue);
    }
    useOnClickOutside(dropdownRef, () => {
        setLogout(false);
    });
    const Logout = () => {
        const cookies = Object.keys(Cookies.get());
        cookies.forEach((cookie) => {
            Cookies.remove(cookie);
        });

        router.push({
            pathname: RouterPath.LOGIN,
        });
    };
    //logic changelangue
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const languageData = [

        {
            id: 'JP',
            title: 'Japan',
            icon: <IcJP />,
            acronym: 'JP',
        },
        {
            id: 'EN',
            title: 'English',
            icon: <IcEN />,
            acronym: 'EN',
        },
    ];
    const defaultLanguage = {
        id: 'JP',
        title: 'Japan',
        icon: <IcJP />,
        acronym: 'JP',
    };
    const dafault = languageData?.find((lang) => lang.id === locale?.selected) || defaultLanguage
    const [selectedLanguage, setSelectedLanguage] = useState(dafault);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const handleLanguageChange = (selectedId) => {
        const language = languageData.find((lang) => lang.id === selectedId);
        if (language) {
            setSelectedLanguage(language);
        }

        setIsDropdownOpen(false);
    };
    const remainingLanguages = languageData.filter(
        (language) => language.id !== selectedLanguage.id
    );
    useEffect(() => {
        if (selectedLanguage) {
            changeLanguage(selectedLanguage?.id)
            dispatch({
                type: AppAction.SELECT_LOCALE,
                payload: selectedLanguage?.id,
            })
        }
    }, [selectedLanguage]);

    return (
        <div className={styles['Header-Admin']}>
            <div className={styles['Frame-left']}>
                {/* <div className={styles['Frame-input']}>
                    <span className={styles['Icon-search']}>
                        <IcSearch
                            width="22px"
                            height="22px"
                            color="rgba(60, 60, 67, 0.60)"
                        />
                    </span>
                    <input
                        className={styles['Input-search']}
                        placeholder="Search"
                    />
                </div> */}
            </div>
            <div className={styles['Frame-right']}>
                {/* <div className={styles['Icon-notication']}>
                    <IcBell />
                    <div className={styles['notication']}></div>
                </div> */}
                <ChangeLangue selectedLanguage={selectedLanguage} toggleDropdown={toggleDropdown} isDropdownOpen={isDropdownOpen} remainingLanguages={remainingLanguages}
                    handleLanguageChange={handleLanguageChange} 
                    languageData={languageData}
                />
                <div
                    className={styles['Frame-CurrentUser']}
                    onClick={() => setLogout(!logout)}
                    ref={dropdownRef}
                >
                    <IcAvatar />
                    <span className={styles['Name-user']}>{loading ? " " : User?.name}</span>
                    {logout ? (
                        <div
                            className={styles['Frame-Logout']}
                            onClick={Logout}
                        >
                            <span className={styles['Icon-logout']}><IcLogout /></span>
                            <span className={styles['Text-logout']}>{t("header.logout")}</span>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    );
}
