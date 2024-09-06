import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FooterAction from 'redux/footer/action';
import IcCopyright from 'shared/components/icons/IcCopyright';
import IcAddress from 'shared/components/icons/footer/IcAddress';
import IcEmail from 'shared/components/icons/footer/IcEmail';
import IcJapanFlag from 'shared/components/icons/footer/IcJapanFlag';
import IcTel from 'shared/components/icons/footer/IcTel';
import IcVietnamFlag from 'shared/components/icons/footer/IcVietnamFlag';
import IcLogoFacebook from 'shared/components/icons/logo/IcLogoFacebook';
import IcLogoLinkedin from 'shared/components/icons/logo/IcLogoLinkedin';
import IcLogoToploop from 'shared/components/icons/logo/IcLogoToploop';
import IcLogoTwitter from 'shared/components/icons/logo/IcLogoTwitter';
import styles from './Footer.module.scss';
import ContactTab from './contact-tab/ContactTab';
function Footer() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    var contacts = useSelector((state) => state.Footer.contactsData?.data) || [];
    var links = useSelector((state) => state.Footer.linksData.data) || [];
    var loading = useSelector((state) => state.Footer?.contactsData?.loading);
    const { locale } = useSelector((state) => state.App);
    useEffect(() => {

        dispatch({
            type: FooterAction.GET_CONTACT_START,
            locale: locale?.selected
        });
    }, [locale]);
    useEffect(() => {
        dispatch({ type: FooterAction.GET_LINK_START });

    }, []);


    const menuPage = [
        { name: t('header.home'), link: '/' },
        { name: t('header.companyInfo'), link: '/company-information' },
        { name: t('header.business'), link: '/business' },
        { name: t('header.recruiment'), link: '/career' },
        { name: t('header.contact'), link: '/contact' },
    ];

    const handleOnClick = () => {
        window.scrollTo(0, 0);
    };


    var reversedContact = contacts.reduceRight((acc, cur) => {
        acc.push(cur);
        return acc;
    }, []);




    return (
        <footer className={styles['footer']}>
            <ContactTab />
            <div className={'w-100 container'}>
                <div className={styles['footer-content']}>
                    <div className={styles['main-content']}>
                        <div className={styles['introduce']}>
                            <div className={styles['connect-icon-mobile']}>
                                <div className={styles['logo-toploop']}>
                                    <IcLogoToploop />
                                </div>
                                <div className={styles['mobile']}>
                                    {links?.map(item => {
                                        return (<a
                                            key={item.id}
                                            href={item?.library_name}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >
                                            <div className={styles['img-styles']}>
                                                <img src={`${process.env.REACT_APP_STORAGE_URL}${item?.image}`} />

                                            </div>
                                        </a>)
                                    })}
                                </div>
                            </div>
                            <span className={styles['mobile']}>
                                <hr />
                            </span>
                        </div>

                        {reversedContact?.map((location, index) => (
                            <div key={location?.id} className={`${styles['contact']}`}>
                                <div className={`${index === 0 ? styles['first-tokyo'] : ''}`}>
                                    <div className={styles['location']}>
                                        <span className={styles['icon']}>
                                            <img
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                }}
                                                src={`${process.env.REACT_APP_STORAGE_URL}${location?.image}`}
                                                alt="Ảnh"
                                            />
                                        </span>
                                        {location?.library_name}
                                    </div>
                                    {location?.items?.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className={styles['contact-item']}
                                        >
                                            <span className={styles['icon-big']}>
                                                <img
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                    }}
                                                    src={`${process.env.REACT_APP_STORAGE_URL}${item?.icon}`}
                                                    alt="Ảnh"
                                                />
                                            </span>
                                            <span
                                                className={styles['contact-title']}
                                            >
                                                {item?.name}
                                            </span>
                                            <span
                                                className={styles['contact-content']}
                                            >
                                                {item?.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}


                    </div>

                    <div className={styles['menu-connect']}>
                        <div className={styles['menu-page']}>
                            {menuPage.map((item, index) => (
                                <Link

                                    to={item.link}
                                    key={index}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <div
                                        className={`${styles['page-item-name']}`}
                                        onClick={handleOnClick}
                                    >
                                        {item.name}
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className={styles['connect-icon']}>
                            {links?.map(item => {
                                return (<a
                                    key={item.id}
                                    href={item?.library_name}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <div className={styles['img-styles']}>
                                        <img src={`${process.env.REACT_APP_STORAGE_URL}${item?.image}`} />

                                    </div>
                                </a>)
                            })}


                        </div>
                    </div>
                    <hr />
                    <div className={styles['copy-right']}>
                        <div>
                            Copyright © TOP LOOP Group All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
