import React, { useState, useEffect } from 'react';
import styles from './SideBar.module.scss';
import IcDashboard from '../icons/sidebar/IcDashboard';
import IcImage from '../icons/sidebar/IcImage';
import IcKey from '../icons/sidebar/IcKey';
import IcProject from '../icons/sidebar/IcProject';
import IcRecruitment from '../icons/sidebar/IcRecruitment';
import IcHome from '../icons/sidebar/IcHome';
import IcSetting from '../icons/sidebar/IcSetting';
import IcContact from '../icons/sidebar/IcContact';
import IcContent from '../icons/sidebar/IcContent';
import IcUser from '../icons/sidebar/IcUser';
import './SideBar.scss';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import IcUp from '../icons/IcUp';
import IcDown from '../icons/IcDown';
import RouterPath from 'router/RouterPath';
import { Link, useLocation } from 'react-router-dom';
import IcCompany from '../icons/sidebar/IcCompany';
import IcService from '../icons/sidebar/IcService';
import { useTranslation } from 'react-i18next';
import IcQuestion from '../icons/sidebar/IcQuestion';
import IcLibrary from '../icons/sidebar/IcLibrary';
export default function SideBar(props) {
    const { pathname: currentPath } = useLocation();
    const { t, i18n } = useTranslation();

    const [menuItems, setMenuItems] = useState([
        {
            label: 'dashboard',
            icon: <IcDashboard />,
            subItems: [],
            category: 'MAIN',
            link: RouterPath.DASHBOARD_ADMIN,
        },
        {
            label: 'picture',
            icon: <IcImage />,
            link: RouterPath?.IMAGE,
            editLink: RouterPath?.IMAGE_EDIT,
            category: 'MAIN',
        },

        {
            label: 'homepage',
            icon: <IcHome />,
            subItems: [],
            category: 'MAIN',
            link: RouterPath?.HOMEPAGE_EDIT
        },
        {
            label: 'company',
            icon: <IcCompany />,
            subItems: [],
            category: 'MAIN',
            link: RouterPath?.COMPANY_EDIT
        },
        {
            label: 'business',
            icon: <IcContent />,
            subItems: [],
            category: 'MAIN',
            link: RouterPath.BUSINESS_MAIN,
        },
        {
            label: 'services',
            icon: <IcService />,
            subItems: [],
            category: 'MAIN',
            link: RouterPath.BUSINESS_MODEL,
        },
        {
            label: 'contact',
            icon: <IcContact />,
            subItems: [],
            category: 'MAIN',
            link: RouterPath?.CONTACT_ADMIN,
        },
        {
            label: 'recruitment',
            icon: <IcRecruitment />,
            subItems: [
                {
                    label: 'recruitment-list',
                    link: RouterPath?.CAREER_ADMIN,
                    editLink: RouterPath.CAREER_EDIT_ADMIN,
                },
                { label: 'candidate-list', link: RouterPath?.CANDIDATE },
                {
                    label: 'post',
                    link: RouterPath?.CAREER_ADD_ADMIN,
                },
            ],
            isOpen: false,
            category: 'MAIN',
        },
        {
            label: 'project',
            icon: <IcProject />,
            subItems: [
                {
                    label: 'project-list',
                    link: RouterPath?.PROJECT,
                    editLink: RouterPath?.PROJECT_EDIT
                },
                {
                    label: 'project-create',
                    link: RouterPath?.PROJECT_ADD,
                },
            ],
            category: 'MAIN',
            isOpen: false,
        },
        {
            label: 'technology',
            icon: <IcLibrary />,
            subItems: [
                {
                    label: 'tech-list',
                    link: RouterPath?.TECH_LIST,
                    editLink: RouterPath?.TECH_EDIT
                },
                {
                    label: 'tech-create',
                    link: RouterPath?.TECH_ADD,
                },
            ],
            category: 'MAIN',
            isOpen: false,
        },
        {
            label: 'qna_manage',
            icon: <IcQuestion />,
            category: 'MAIN',
            isOpen: false,
            subItems: [
                {
                    label: 'qna_list',
                    link: RouterPath?.QNA_MANAGE,
                    editLink: RouterPath?.EDIT_QNA,
                },
                {
                    label: 'add_qna',
                    link: RouterPath?.ADD_QNA,
                },
            ],
        },
        {
            label: 'account',
            icon: <IcUser />,
            subItems: [
                { label: 'account-list', link: RouterPath.ACCOUNT, editLink: RouterPath.ACCOUNT_EDIT },
                { label: 'account-register', link: RouterPath.ACCOUNT_REGISTER },
            ],
            category: 'SETTINGS',
            isOpen: false,
        },
        {
            label: 'change-password',
            icon: <IcKey />,
            subItems: [],
            category: 'SETTINGS',
            link: RouterPath?.ACCOUNT_CHANGE_PASSWORD,
        },
    ]);
    const { isOpenSidebar } = props;

    const styleSidebar = isOpenSidebar
        ? { padding: '25px 0px' }
        : { padding: '25px' };

    const styleMenuItem = {
        paddingLeft: '30px',
        borderLeft: '2px solid #D9D9D9',
    };

    const styleSubmenu = {
        borderRadius: '8px',
        marginBottom: '5px',
    };

    const renderSubItems = (subItems) => {
        return subItems?.map((subItem, index) => (
            <MenuItem
                key={index}
                className={styles['MenuItem']}
                style={styleMenuItem}
                component={subItem.link ? <Link to={subItem.link} /> : undefined}
                active={currentPath === subItem.link}
            >
                {t(`admin.side-bar.${subItem.label}`)}
            </MenuItem>
        ));
    };

    const renderMenuItems = (category) => {
        return menuItems?.map((menuItem, index) => {
            if (menuItem.category === category) {
                const hasSubItems =
                    menuItem.subItems && menuItem.subItems.length > 0;
                // const shouldOpen = hasSubItems
                //     ? menuItem.subItems.some(
                //         (subItem) => currentPath === subItem.link || currentPath.includes(subItem.editLink)
                //     )
                //     : false;
                let shouldOpen = hasSubItems
                    ? menuItem.subItems.some(
                        (subItem) => currentPath.startsWith(subItem.link) || currentPath.includes(subItem.editLink)
                    )
                    : false;

                // Thêm điều kiện mới cho các mục không chứa subItems nhưng có editLink
                if (!hasSubItems && menuItem.editLink) {
                    shouldOpen = currentPath.includes(menuItem.editLink);
                }
                const shouldOpenSubmenu = currentPath === menuItem?.link;

                return (
                    <SubMenu
                        key={index}
                        defaultOpen={shouldOpen}
                        component={menuItem.link ? <Link to={menuItem.link} /> : undefined}
                        className={
                            shouldOpen || shouldOpenSubmenu
                                ? styles['submenu-active']
                                : undefined
                        }
                        style={styleSubmenu}
                        icon={menuItem.icon}
                        label={t(`admin.side-bar.${menuItem.label}`)}
                        suffix={
                            menuItem.isOpen !== undefined ? (
                                <IcUp width="20px" height="20px" />
                            ) : (
                                <div style={{ width: '20px' }}></div>
                            )
                        }
                        onClick={() => handleSubMenuClick(index)}
                    >
                        <div className={styles['Frame-MenuItem']}>
                            {renderSubItems(menuItem.subItems)}
                        </div>
                    </SubMenu>
                );
            }
            return null;
        });
    };

    const handleSubMenuClick = (index) => {
        const updatedMenuItems = [...menuItems];

        if (updatedMenuItems[index].hasOwnProperty('isOpen')) {
            updatedMenuItems[index].isOpen = !updatedMenuItems[index].isOpen;
            setMenuItems(updatedMenuItems);
        }
    };



    return (
        <div style={styleSidebar} className={styles['SideBar']}>
            <Sidebar
                collapsed={isOpenSidebar}
                transitionDuration={400}
                rootStyles={{
                    width: '205px',
                    minWidth: 'auto',
                    position: 'sticky',
                    top: '0px',
                }}
            >
                <span className={styles['Title-menu']}>MAIN</span>
                <Menu className={isOpenSidebar ? '' : styles['menu-active']}>
                    {renderMenuItems('MAIN')}
                </Menu>

                <span className={styles['Title-menu']}>SETTINGS</span>
                <Menu className={isOpenSidebar ? '' : styles['menu-active']}>
                    {renderMenuItems('SETTINGS')}
                </Menu>
            </Sidebar>
        </div>
    );
}
