import { all, call, fork, put, takeEvery,takeLatest,delay } from '@redux-saga/core/effects';
import actions from './action';
import factories from './factory';
import Cookies from 'js-cookie';
function* login() {
    yield takeLatest(actions.LOGIN_REQUEST, function* (payload) {
        const { onSuccess } = payload;
        try {
            const response = yield call(() => factories.login(payload.payload));
            // yield call(handleResponse, response);
            // if (response.status === 200)

            // luu token
            const token = response.data.access_token;
            Cookies.set('token', token);
            Cookies.set('isLogin', true);
            yield put({
                type: actions.LOGIN_SUCCESS,
                payload: response.Data,
            });
            yield delay(200)
            onSuccess && onSuccess();
        } catch (error) {
            yield put({
                type: actions.LOGIN_FAILURE,
                payload: error,
            });
        } finally {
        }
    });
}
function* getdetailuser() {
    yield takeEvery(actions?.GET_DETAIL_USER_START, function* (payload) {
        try {
            const response = yield call(() => factories.getdetailuser());
            Cookies.set('User', JSON.stringify(response.data?.item));

            if (response?.message === 'OK') {
                yield put({
                    type: actions.GET_DETAIL_USER_SUCCESS,
                    payload: response.data?.item,
                });
            }
        } catch (error) {
          
            Cookies.remove('isLogin', false);
        } finally {
        }
    });
}

function* otp(){
    yield takeEvery(actions.GET_OTP_REQUEST, function* (payload) {
        try {
            const response = yield call(() =>
                factories.getOTP(payload.payload),
            );      
            if (response) {
                yield put({
                    type: actions.GET_OTP_SUCCESS,
                    payload: response.Data,
                });
            }          
        } catch (error) {

        } finally {
        }
    });
}

function* resetPw(){
    yield takeEvery(actions.RESET_PW_REQUEST, function* (payload) {
        try {
            const response = yield call(() =>
                factories.resetPw(payload.payload),
            );        
            if (response) {
                yield put({
                    type: actions.RESET_PW_SUCCESS,
                    payload: response.Data,
                });
            }          
        } catch (error) {

        } finally {
        }
    });
}

export default function* AuthSaga() {
    yield all([fork(login), fork(otp), fork(resetPw), fork(getdetailuser)]);
}
