import React, { useState, useEffect } from 'react';
import styles from './AdminLayout.module.scss';
import LogoToploop from 'assets/images/LogoToploop.svg';
import IcLogoToploop from 'assets/images/LogoIcToploop.svg';
import IcToggleSidebar from '../icons/IcToggleSidebar';
import SideBar from '../sidebar/SideBar';
import HeaderAdmin from '../header-admin/HeaderAdmin';
import LinearProgress from '@mui/material/LinearProgress';
import { Suspense } from 'react';
import BreadcrumbAdmin from '../breadcrumb-admin/BreadcrumbAdmin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import FetchSample from '../../../redux/auth/action';
import useRouter from 'hooks/use-router';
import RouterPath from 'router/RouterPath';
export default function AdminLayout(props) {
    const [isOpenSidebar, setIsOpenSidebar] = useState(() => {
        const storedValue = sessionStorage.getItem('isOpenSidebar');
        return storedValue ? JSON.parse(storedValue) : false;
    });
    const dispatch = useDispatch();
    const router = useRouter();
    const token = Cookies.get('token');
   
    useEffect(() => {
        dispatch({
            type: FetchSample.GET_DETAIL_USER_START,
        });
    }, [token]);
    useEffect(() => {
        sessionStorage.setItem('isOpenSidebar', JSON.stringify(isOpenSidebar));
    }, [isOpenSidebar]);

    const handleToggleSidebar = () => {
        setIsOpenSidebar(!isOpenSidebar);
    };

    const styless = isOpenSidebar
        ? {
              paddingLeft: '3px',
              paddingRight: '3px',
          }
        : {
              paddingLeft: '25px',
          };
    const stylesImg = isOpenSidebar
        ? {
              width: '80px',
              height: '32px',
          }
        : {
              width: '103px',
              height: '32px',
          };
    return (
        <div className={styles['AdminLayout']}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                closeButton={true}
            />
            <div className={styles['Body-left']}>
                <div style={styless} className={styles['Frame-logo']}>

                    {isOpenSidebar ? (<div
                        style={stylesImg}
                        className={styles['Header_navbarBrand']}
                    >
                        <div className={styles['Frame_navbarBrand']}>
                            <img
                                alt="Toploop.com"
                                title="Toploop.com"
                                className={styles['Header_imgLogo']}
                                src={IcLogoToploop}
                            />
                        </div>
                    </div>) : (<div
                        style={stylesImg}
                        className={styles['Header_navbarBrand']}
                    >
                        <div className={styles['Frame_navbarBrand']}>
                            <img
                                alt="Toploop.com"
                                title="Toploop.com"
                                className={styles['Header_imgLogo']}
                                src={LogoToploop}
                            />
                        </div>
                    </div>)}  
                    {/* <div
                        style={stylesImg}
                        className={styles['Header_navbarBrand']}
                    >
                        <div className={styles['Frame_navbarBrand']}>
                            <img
                                alt="Toploop.com"
                                title="Toploop.com"
                                className={styles['Header_imgLogo']}
                                src={LogoToploop}
                            />
                        </div>
                    </div> */}
                    <div
                        onClick={handleToggleSidebar}
                        className={styles['Icon-toogle_sidebar']}
                    >
                        <IcToggleSidebar />
                    </div>
                </div>
                <div className={styles['Frame-Sidebar']}>
                    <SideBar isOpenSidebar={isOpenSidebar} />
                </div>
            </div>
            <div className={styles['Body-right']}>
                <div className={styles['Frame-header']}>
                    <HeaderAdmin />
                </div>
                <div className={styles['Main-content']} style={{marginLeft: isOpenSidebar ? "85px" : "265px"  }}>
                    <div className={styles['Frame-title']}>
                        <div
                            className={styles['Title-page']}
                            style={{ marginBottom: '24px' }}
                        >
                            <BreadcrumbAdmin />
                        </div>
                    </div>

                    <Suspense
                        fallback={
                            <div>
                                {' '}
                                <LinearProgress
                                    sx={{
                                        backgroundColor: 'white',
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#FF8B13',
                                        },
                                    }}
                                />
                            </div>
                        }
                    >
                        {props.children}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
