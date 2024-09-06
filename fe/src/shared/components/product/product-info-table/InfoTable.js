import React from 'react';
import classnames from 'classnames';
import styles from './InfoTable.module.scss';
import { useTranslation } from 'react-i18next';

function InfoTable(data) {

    const getRowClass = (index) => {
        return classnames({
            [styles['even-row']]: index % 2 === 0,
            [styles['odd-row']]: index % 2 !== 0,
        });
    };
    const { t } = useTranslation();
    const product = data?.data?.item;

    return (  
        <div className={styles['wrapper']}>
            <table>
                <tbody>
                    <tr className={getRowClass(1)}>
                        <th className={styles['title-column']}>{t('infoProduct.name')}</th>
                        <td className={styles['content-column']}>{product?.name}</td>
                    </tr>
                    <tr className={getRowClass(2)}>
                        <th className={styles['title-column']}>{t('infoProduct.category')}</th>
                        <td className={styles['content-column']}>{product?.category}</td>
                    </tr>
                    <tr className={getRowClass(3)}>
                        <th className={styles['title-column']}>{t('infoProduct.device')}</th>
                        <td className={styles['content-column']}>{product?.device}</td>
                    </tr>
                    <tr className={getRowClass(4)}>
                        <th className={styles['overview']}>{t('infoProduct.projectOverview')}</th>
                        <td className={styles['content-column']}></td>
                    </tr>
                    {product?.other?.map((item, index) => (
                        <tr key={index} className={getRowClass(index + 5)}>
                            <th className={styles['title-column']}>{item.key}</th>
                            <td className={styles['content-column']}>{item.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default InfoTable;