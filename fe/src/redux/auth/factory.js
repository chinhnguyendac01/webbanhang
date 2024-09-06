import ApiConstants from 'adapter/ApiConstants';
import ApiOperation from 'adapter/ApiOperation';

const AuthFactory = {
    login: (data) => {
        return ApiOperation.request({
            url: ApiConstants.LOGIN,
            method: 'POST',
            data: data,
        });
    },
    getdetailuser: (data) => {
        return ApiOperation.request({
            url: ApiConstants.AUTH,
            method: 'GET',
        });
    },
    getOTP: (email) => {
        return ApiOperation.request({
            url: ApiConstants.FORGOT_PW,
            method: 'POST',
            data: email
        });
    },
    resetPw: (data) => {
        return ApiOperation.request({
            url: ApiConstants.RESET_PW,
            method: 'PUT',
            data: data
        });
    }  
}

export default AuthFactory;
