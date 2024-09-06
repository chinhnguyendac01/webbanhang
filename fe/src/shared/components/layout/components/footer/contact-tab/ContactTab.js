import styles from './index.module.scss'
import QnAImgPath from 'assets/images/contact-tab/QNA.png'
import contactImgPath from 'assets/images/contact-tab/contact.png'
import useRouter from 'hooks/use-router'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import RouterPath from 'router/RouterPath'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
const ContactTab = ({ }) => {
    const router = useRouter();
    const location = useLocation();
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0); // Di chuyển trang lên đầu khi URL thay đổi
    }, [location]);

    const props = {
        tab1: {
            title: "Q & A",
            imgPath: QnAImgPath,
            describe: t("footer.qna_description"),
            content: t("footer.qna"),
            url: ""
        },
        tab2: {
            title: "Contact",
            imgPath: contactImgPath,
            describe: t("footer.contact_description"),
            content: t("footer.contact"),
            url: ""
        },
    }
    return (
        <div className='w-100' style={{ overflow: "hidden" }}>
            <div className={`container`}>
                <div className={styles['wrapper']}>
                    <div className={`${styles['tab']} ${styles['tab1']}`}
                    >
                        <div className={styles['tab-content']}>
                            <div className={styles['tab-content-top']}>
                                <div className={styles['tab-title']}>
                                    {props?.tab1?.title}
                                </div>
                                <div className={styles['tab-subTitle']}>
                                    {props?.tab1?.describe}
                                </div>
                                <div className={styles['tab-description']}>
                                    {props?.tab1?.content}
                                </div>
                            </div>

                            <div onClick={() => { router.push({ pathname: RouterPath.QUESTION_ANSWER }) }} className={styles['tab-button']}>
                                {t("common.seemore")}
                            </div>
                        </div>

                        <div className={styles['tab-img']}

                        >
                            <img src={props?.tab1?.imgPath}></img>
                        </div>
                    </div>
                    <div className={`${styles['tab']} ${styles['tab2']}`}
                    >
                        <div className={styles['tab-content']}>
                            <div className={styles['tab-content-top']}>
                                <div className={styles['tab-title']}>
                                    {props?.tab2?.title}
                                </div>
                                <div className={styles['tab-subTitle']}>
                                    {props?.tab2?.describe}
                                </div>
                                <div className={styles['tab-description']}>
                                    {props?.tab2?.content}
                                </div>
                            </div>
                            <div onClick={() => { router.push({ pathname: RouterPath.CONTACT }) }} className={styles['tab-button']}>
                                {t("common.seemore")}
                            </div>
                            {/* <Link to={RouterPath.CONTACT} className={styles['tab-button']}>
                                {t("common.seemore")}
                            </Link> */}
                        </div>
                        <div className={styles['tab-img']}
                        >
                            <img src={props?.tab2?.imgPath}></img>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default ContactTab
