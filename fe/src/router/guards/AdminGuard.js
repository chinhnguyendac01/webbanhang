/**
 * ****************************************************************************
 * DUNGNT ADD
 * AdminGuard.js
 *
 * description		:
 * created at		:	2023-07-09
 * created by		:	DungNT
 * package			:	src/router/guards/AdminGuard.js
 * copyright			:	Copyright (c) DungNT
 * version			:	1.0.0
 * ****************************************************************************
 */
import Cookies from 'js-cookie';

export const AdminGuard = async (guardArgs, route) => {
    const isLogin = Cookies.get('isLogin');
    if(isLogin) {
        return true;
    }else {
        return false;
    }
   
};
