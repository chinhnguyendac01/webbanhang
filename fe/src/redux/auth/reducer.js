import AuthAction from './action';

let initialState = {
    isLoggedIn: false,
    pendingLogin: false,
    error: {
        message: "",
    },
    loadingOTP: false,
    loading: false,
    userLogin:{}
    // user: null,
    // accessToken: null,
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthAction.LOGIN_REQUEST:
            return {
                ...state,
                pendingLogin: true,
                error: null,
            };
        case AuthAction.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                pendingLogin: false,
                error: null,
            };
        case AuthAction.LOGIN_FAILURE:
            return {
                ...state,
                pendingLogin: false,
                error: {
                    message: "Đăng nhập không thành công",
                },
            };
        case AuthAction.GET_DETAIL_USER_START:
            return {
                ...state,
                loading:true,
            }
        case AuthAction.GET_DETAIL_USER_SUCCESS:
            return {
                ...state,
                userLogin:action?.payload,
                loading:false,
            }
        case AuthAction.GET_DETAIL_USER_ERROR:
            return {
                ...state,
                loading:false,
            }
        case AuthAction.GET_OTP_REQUEST:
            return {
                ...state,
                loadingOTP: true,
            };
        case AuthAction.GET_OTP_SUCCESS:
            return {
                ...state,
                loadingOTP: false,
            };
        case AuthAction.RESET_PW_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case AuthAction.RESET_PW_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        default:
            return {
                ...state,
            };
    }
}

export default AuthReducer;