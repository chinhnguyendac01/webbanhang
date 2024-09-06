import React, {useState, useEffect} from 'react';
import useRouter from 'hooks/use-router';
import { useTranslation } from 'react-i18next';
import styles from './AuthHeader.module.scss';
import RouterPath from 'router/RouterPath';
import LogoToploop from 'assets/images/LogoToploop.svg';
import IcJP from 'shared/components/icons/auth-header/IcJP';
import IcEN from 'shared/components/icons/auth-header/IcEN';

function AuthHeader() {

    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const languageData = [
        {
            id: 'JP',
            title: 'Japanese',
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
        title: 'Japanese',
        icon: <IcJP />,
        acronym: 'JP',
    };

    const router = useRouter();
    const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);

    const handleLanguageChange = (selectedId) => {
        const language = languageData.find((lang) => lang.id === selectedId);
        if (language) {
            setSelectedLanguage(language);
        }
    };

    useEffect(() => {
        if (selectedLanguage) {
            changeLanguage(selectedLanguage?.id)
        }
    }, [selectedLanguage]);

    return (  
        <div className={styles['login-header']}>
            <div
                onClick={() => {
                    router.push({
                        pathname: RouterPath.HOME,
                    });
                }} 
                className={styles['logo']}
            >
                <img
                    alt="Toploop.com"
                    title="Toploop.com"
                    className={styles['Header_imgLogo']}
                    src={LogoToploop}
                />
            </div>
            <div className={styles['Frame_header_right']}>
                <div className={styles['Header_buttonLanguage']}>
                    <div className={styles['Button_choose']}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '7px' }}>
                            {languageData.map((language) => (
                                <button
                                    key={language.id}
                                    className={`${styles['Btn-lang']} ${selectedLanguage.id === language.id ? styles['selected'] : ''}`}
                                    onClick={() => handleLanguageChange(language.id)}
                                >
                                    {language.icon}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthHeader;