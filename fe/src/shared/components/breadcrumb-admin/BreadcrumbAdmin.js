// Breadcrumb.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import RouterPath from 'router/RouterPath';
import { useTranslation } from 'react-i18next';
import styles from './BeadcrumbAdmin.module.scss'
const routeNames = {
    [RouterPath?.DASHBOARD_ADMIN]: 'dashboard',
    [RouterPath?.ACCOUNT]: 'account-list',
    [RouterPath?.ACCOUNT_REGISTER]: 'account-register',
    [RouterPath?.ACCOUNT_CHANGE_PASSWORD]: 'change-password',
    [RouterPath?.CAREER_ADMIN]: 'recruitment-list',
    [RouterPath?.CAREER_ADD_ADMIN]: 'create-post',
    [RouterPath?.CAREER_EDIT_ADMIN]: 'edit-recruitment',
    [RouterPath?.ACCOUNT_EDIT]: 'edit-account',
    [RouterPath?.IMAGE_ADD]: 'add-image',
    [RouterPath?.IMAGE]: 'image-list',
    [RouterPath?.IMAGE_EDIT]: 'edit-image',
    [RouterPath?.COMPANY_EDIT]: 'edit-company',
    [RouterPath?.CANDIDATE]: 'candidate-list',
    [RouterPath?.CONTACT_ADMIN]: 'contact-list',
    [RouterPath?.HOMEPAGE_EDIT]: 'edit-homepage',
    [RouterPath?.BUSINESS_MAIN]: 'edit-business',
    [RouterPath?.BUSINESS_MODEL]: 'edit-model',
    [RouterPath?.PROJECT]: 'projects-list',
    [RouterPath?.PROJECT_ADD]: 'project-add',
    [RouterPath?.PROJECT_EDIT]: 'project-edit',
    [RouterPath?.QNA_MANAGE]: 'qna_list',
    [RouterPath?.ADD_QNA]: 'add_qna',
    [RouterPath?.EDIT_QNA]: 'edit_qna',
    [RouterPath?.TECH_LIST]: 'tech-list',
    [RouterPath?.TECH_ADD]: 'tech-add',
    [RouterPath?.TECH_EDIT]: 'tech-edit',
};
const titleStyles = {
    fontSize: "24px",
    fontWeight: "700"
}
const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    const { t } = useTranslation();
    return (
        <div>
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                const displayName = routeNames[routeTo] || name;
                return isLast ? (
                    <span className={styles['title']} key={displayName}>{t(`admin.breadcrumb.${displayName}`)}</span>
                ) : (
                    <Link key={displayName} to={routeTo}></Link>
                );
            })}
        </div>
    );
};

export default Breadcrumb;
