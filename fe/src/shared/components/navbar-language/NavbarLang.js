import React from 'react';
import useRouter from 'hooks/use-router';
import RouterPath from 'router/RouterPath';
import styles from './NavbarLang.module.scss';

export default function NavbarLang(props) {
    const router = useRouter();
    const {
        isNavOpen,
        handleLanguageChange,
        remainingLanguages,
        selectedLanguage,
        imgUrl,
    } = props;
    const backgroundStyle = {
        backgroundImage: `url(${imgUrl})`,
        transition: 'all 0.3s cubic-bezier(0.51, 0.51, 0.79, 0.79) 0s',
    };
    return (
        <div
            style={backgroundStyle}
            className={`collapse navbar-collapse ${
                isNavOpen ? styles['Sidebar_header'] : ''
            } `}
            id="navbarNavLang"
        >
            <ul className="w-100 navbar-nav  menu-box">
                {/* <a className={`mx-sm-auto mx-md-2 py-3 nav-link text-center ${false ? styles['selected-language'] : styles['language']
                            }`} href="https://toploop.jp/">
                              <span className={`mx-auto mx-lg text-center  ${styles['styles_text']}`}>
                              Japanese
                        </span></a> */}
                {remainingLanguages?.map((language, index) => (
                    <li
                        onClick={() => handleLanguageChange(language?.id)}
                        key={index}
                        className={`mx-sm-auto mx-md-2 py-3 nav-link text-center ${
                            language.id === selectedLanguage.id
                                ? styles['selected-language']
                                : styles['language']
                        }`}
                    >
                        <span
                            className={`mx-auto mx-lg text-center  ${styles['styles_text']}`}
                        >
                            {language?.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
