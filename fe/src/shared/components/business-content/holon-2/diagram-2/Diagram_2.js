import React from 'react'
import styles from './Diagram_2.module.scss';
import Block from '../../block/Block';
import IcChervonRight from 'shared/components/icons/holon/IcChervonRightOrange';
import IcUser from 'shared/components/icons/holon/IcUser';
import BlockCase from '../../block-case/BlockCase';
import { useTranslation } from 'react-i18next'
export default function Diagram_2() {
    const { t } = useTranslation();
    return (
        <div className={styles['diagram']}>
            <h1 className={styles['title-diagram']}>
                {t("holon.diagram2.title")}
            </h1>
            <ul className={styles['ul-styles-diagram']}>
                <li> {t("holon.diagram2.item_1")}</li>
                <li>{t("holon.diagram2.item_2")}</li>
            </ul>
            <div className={styles['body-diagram']}>
                <div className={styles['body-left']}>
                    <Block text={t("holon.diagram2.block_1")} />
                    <section className={styles['body-content']}>
                        <div className={styles['frame-content-start']}>
                            <div className={styles['content-info']}>
                                <div className={styles['list-info']}>
                                    <span className={styles['title-info']}>{t("holon.diagram2.block_case_big_1.list.title")}</span>
                                    <ul className={styles['ul-styles']}>
                                        <li>{t("holon.diagram2.block_case_big_1.list.item_1")}</li>
                                        <li>{t("holon.diagram2.block_case_big_1.list.item_2")}</li>
                                        <li>{t("holon.diagram2.block_case_big_1.list.item_3")}</li>
                                        <li>...</li>
                                    </ul>
                                </div>
                                <div className={styles['frame-user']}>
                                    <div className={styles['icon-user']}>
                                        <IcUser />
                                    </div>
                                    <span className={styles['text-user']}>
                                    {t("holon.diagram2.user")}
                                    </span>
                                </div>
                            </div>

                            <div className={styles['list-block']}>
                                <BlockCase
                                    colorboder="#FF8B13"
                                    title={t("holon.diagram2.block_case_big_1.block_case_1")}
                                    listItems={['ID', t("holon.diagram2.password")]}
                                />
                                <BlockCase
                                    colorboder="#FF8B13"
                                    title={t("holon.diagram2.block_case_big_1.block_case_2")}
                                    listItems={['ID',t("holon.diagram2.password"),t("holon.diagram2.manager")]}
                                />
                                <BlockCase
                                    colorboder="#FF8B13"
                                    title={t("holon.diagram2.block_case_big_1.block_case_3")}
                                    listItems={[t("holon.diagram2.employeeid"), t("holon.diagram2.email"), t("holon.diagram2.role")]}
                                />
                                <BlockCase
                                    colorboder="#FF8B13"
                                    title={t("holon.diagram2.block_case_big_1.block_case_4")}
                                    listItems={[t("holon.diagram2.name"), t("holon.diagram2.address")]}
                                />
                            </div>
                        </div>
                    </section>
                </div>
                <div className={styles['IcChervon']}>
                    <IcChervonRight />
                </div>
                <div className={styles['body-right']}>
                    <Block text={t("holon.diagram2.block_2")} />
                    <section className={styles['body-content']}>
                        <div className={styles['frame-content-end']}>
                            <div className={styles['list-block']}>
                                <BlockCase
                                    colorboder="#2EB9E6"
                                    title={t("holon.diagram2.block_case_big_2.block_case_1")}
                                    listItems={['ID', t("holon.diagram2.password")]}
                                />
                                <BlockCase
                                    colorboder="#2EB9E6"
                                    title={t("holon.diagram2.block_case_big_2.block_case_2")}
                                    listItems={['ID',  t("holon.diagram2.password"), t("holon.diagram2.manager")]}
                                />
                                <BlockCase
                                    colorboder="#2EB9E6"
                                    title={t("holon.diagram2.block_case_big_2.block_case_3")}
                                    listItems={[t("holon.diagram2.employeeid"), t("holon.diagram2.email"), t("holon.diagram2.role")]}
                                />
                                <BlockCase
                                    colorboder="#2EB9E6"
                                    title={t("holon.diagram2.block_case_big_2.block_case_4")}
                                    listItems={[t("holon.diagram2.name"), t("holon.diagram2.address")]}
                                />
                            </div>
                            <div className={styles['boxcase-big']}>
                                <div >
                                    <span className={styles['title-info']} style={{fontWeight:'600'}}>{t("holon.diagram2.block_case_big_2.list.title")}：</span>
                                    <ul className={styles['ul-styles-bold']} >
                                    <li>{t("holon.diagram2.block_case_big_2.list.item_1")}</li>
                                        <li>{t("holon.diagram2.block_case_big_2.list.item_2")}</li>
                                        <li>{t("holon.diagram2.block_case_big_2.list.item_3")}</li>
                                        <li>...</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
