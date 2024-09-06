import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Suspense } from 'react';
import styles from './Layout.module.scss';
import LinearProgress from '@mui/material/LinearProgress';


function HomePageLayout(props) {
    return (
        <div className={styles['HomePageLayout']}>
            <div className={styles['header']}>
                <Header />
            </div>
            <div className={styles['home-page-content']}>
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
            <div className={styles['footer']}>
                <Footer />
            </div>
        </div>
    );
}
export default HomePageLayout;
