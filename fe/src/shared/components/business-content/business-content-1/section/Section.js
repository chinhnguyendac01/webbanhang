import React from 'react';
import styles from './index.module.scss'
import IcChervonRight from 'shared/components/icons/IcChervonRight'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import RouterPath from 'router/RouterPath';
import { useTranslation } from 'react-i18next';
import "react-quill/dist/quill.core.css";
import useRouter from 'hooks/use-router';
const Section = ({ props }) => {
    const history = useHistory();
    const route = useRouter();
    // let formattedText = null;
    const { t } = useTranslation();
    // if (props?.content) {
    //     const textSegments = props?.content?.split('\n');
    //     formattedText = textSegments?.map((segment, index) => (
    //         <React.Fragment key={index}>
    //             {segment}
    //             {index < textSegments?.length - 1 && <br />}
    //         </React.Fragment>
    //     ));
    // }
    return (
        <div className={styles['section-container']}>
            <div className={styles['section-title']}>
                {props?.title}
            </div>
            <div className={styles['section-content']}>
                <div className={styles['content']}>
                    <div className={styles['text-block']}>
                        {/* {formattedText} */}
                        <div style={{ padding: "0px", overflow: "unset" }} className="view ql-editor" dangerouslySetInnerHTML={{ __html: props?.content }} />
                    </div>
                    <div className={styles['action-block']}>
                        <div className={styles['btn-link']} onClick={() => { route.push({ pathname: RouterPath.CONTRACT }) }}>
                            <span className={styles['chervon-icon']} >
                                <IcChervonRight props={{ width: 20, height: 20 }} />
                            </span>
                            <span className={styles['text']}>
                                {t('business.clickContractPage')}
                            </span>
                        </div>
                        <div className={styles['btn-link']} onClick={() => { route.push({ pathname: RouterPath.LABTYPE }) }}>
                            <span className={styles['chervon-icon']}>
                                <IcChervonRight props={{ width: 20, height: 20 }} />
                            </span>
                            <span className={styles['text']}>
                                {t('business.clickLagPage')}
                            </span>
                        </div>
                        <div className={styles['btn-link']} onClick={() => { route.push({ pathname: RouterPath.HOLON }) }}>
                            <span className={styles['chervon-icon']}>
                                <IcChervonRight props={{ width: 20, height: 20 }} />
                            </span>
                            <span className={styles['text']}>
                                {t('business.clickHolonPage')}
                            </span>
                        </div>
                        <div className={styles['btn-link']} onClick={() => {
                            route.push({
                                pathname: RouterPath.CONTACT,
                                params: {
                                    content: "holon"
                                }
                            })
                        }}>
                            {/* <span className={styles['chervon-icon']}>
                                <div style={{ width: 20, height: 20 }}></div>
                                <IcChervonRight props={{ width: 20, height: 20 }} />
                            </span> */}
                            <span className={styles['text']}>
                                {t('business.clickHolonContract')}
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles['section-img']}>
                    <img src={props?.image}></img>
                </div>
            </div>
        </div>
    )
}
Section.defaultProps = {
    props: {
        content: ``,
        title: ``,
        image: ""
    }
}
export default Section
