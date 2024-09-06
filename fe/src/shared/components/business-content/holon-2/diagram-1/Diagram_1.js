import React from 'react'
import styles from './index.module.scss'
import { useTranslation } from 'react-i18next'
import IcChervonDownBold from 'shared/components/icons/holon/IcChervonDownBold'
import Block from '../../block/Block'
const Diagram_1 = () => {
    const { t } = useTranslation();
    return (
        <div className={styles['diagram']}>
            <div className={styles['top']}>
                <ul>
                    <li className={styles['item']}>
                        {t("holon.diagram.item_1")}
                    </li>
                    <li className={styles['item']}>
                        {t("holon.diagram.item_2")}
                    </li>
                    <li className={styles['item']}>
                        {t("holon.diagram.item_3")}
                    </li>
                </ul>
            </div>
            <div className={styles['icon']}>
                <IcChervonDownBold />
            </div>
            <div className={styles['bottom']}>
                <div className={styles['blockwrap_fullwidth']}>
                    <Block text={t("holon.diagram.block_1")} />
                </div>
                <div className={styles['row-2']}>
                    <div className={styles['blockwrap_halfwidth']}>
                        <Block
                            text={t("holon.diagram.block_2")}
                        />
                    </div>
                    <div className={styles['blockwrap_halfwidth']}>
                        <Block
                            text={t("holon.diagram.block_3")}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Diagram_1
