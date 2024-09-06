import React from 'react';
import styles from './Layout.module.scss';
import AuthHeader from './components/auth-header/AuthHeader';
import Bg from 'assets/images/homepage-bg.png';

function AuthLayout(props) {
    return (  
        <div 
            className={styles['AuthLayout']} 
            style={{backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
        >
            <div className={'container w-100 h-100'}>
                <div className={styles['auth-header']}>
                    <AuthHeader />
                </div>
                <div className={styles['auth-content']}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;