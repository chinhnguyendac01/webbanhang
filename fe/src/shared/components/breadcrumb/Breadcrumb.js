import React, { useEffect } from 'react';
import styles from './Beadcrumb.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
export default function Breadcrumb({ data, product }) {
    const location = useLocation();
    const { t } = useTranslation();

    const pathSegments = location.pathname
        .split('/')
        .filter((segment) => segment !== '');


    const routeNames = {
        career: t('breadcrumb.career'),
        business: t('breadcrumb.business'),
        lab: t('breadcrumb.lab'),
        contract: t('breadcrumb.contract'),
        product: t('breadcrumb.product'),
        holon: t('breadcrumb.holon')
    };


    return (
        <ul className={styles['Breadcrumb_ul']}>
            {' '}
            {pathSegments.map((segment, index) => {
                if (segment === 'info') {
                    return null;
                }
                return (
                    <li key={index}>
                        <span className={styles['Space_page']}> {'>'} </span>
                        <Link
                            to={`/${pathSegments
                                .slice(0, index + 1)
                                .join('/')}`}
                        >
                            {routeNames[segment] || data?.title || product?.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
