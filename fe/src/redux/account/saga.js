import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import factories from './factory';

function* watchFetchAccountList() {
    yield takeEvery(actions.FETCH_ACCOUNTS_LIST_START, function* (payload) {
        const { per_page, page } = payload
        try {
            const response = yield call(() =>
                factories.fetchAccoutsList({ per_page, page }),
            );
            yield put({
                type: actions.FETCH_ACCOUNTS_LIST_SUCCESS,
                payload: response?.data,
            });
        } catch (error) {

        } finally {
        }
    });
}
function* watchDeleteMany() {
    yield takeEvery(actions.DELETE_MANY_ACCOUNT_START, function* (payload) {
        const { data, onSuccess, onError } = payload
        try {
            const response = yield call(() =>
                factories.deleteMany({ id: data }),
            );
            if (response.success) {
                yield put({
                    type: actions.DELETE_MANY_ACCOUNT_SUCCESS,
                    payload: response?.data,
                });
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}
function* watchGetAccount() {
    yield takeEvery(actions.GET_ACCOUNT_START, function* (payload) {
        const { id, onSuccess, onError } = payload
        try {
            const response = yield call(() =>
                factories.getAccount(id),
            );
            if (response?.code === 0) {
                yield put({
                    type: actions.GET_ACCOUNT_SUCCESS,
                    payload: response?.data?.item,
                });
            }
        } catch (error) {

        } finally {
        }
    });
}
function* watchEditAccount() {
    yield takeEvery(actions.EDIT_ACCOUNT_START, function* (payload) {
        const { id, data, onSuccess, onError } = payload
        try {
            const response = yield call(() =>
                factories.editAccount(id, data),
            );
            if (response?.success === true) {
                yield put({
                    type: actions.EDIT_ACCOUNT_SUCCESS,
                    payload: response?.data,
                });
                onSuccess && onSuccess();
            }

        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}
function* watchDeleteAccount() {
    yield takeEvery(actions.DELETE_ACCOUNT_START, function* (payload) {
        const { id, onSuccess, onError } = payload
        try {
            const response = yield call(() =>
                factories.deleteAccount(id),
            );
            if (response?.success) {
                yield put({
                    type: actions.DELETE_ACCOUNT_SUCCESS,
                    payload: response?.data,
                });
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}
function* watchCreateAccount() {
    yield takeEvery(actions.CREATE_ACCOUT_START, function* (payload) {
        const { data, onSuccess, onError } = payload
        try {
            const response = yield call(() =>
                factories.createAccount(data),
            );
            if (response?.success === true) {
                yield put({
                    type: actions.CREATE_ACCOUT_SUCCESS,
                    payload: response?.data,
                });
                onSuccess && onSuccess();
            }

        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

function* watchChangePasswordByUser() {
    yield takeEvery(actions.CHANGE_PASSWORD_BY_USER_START, function* (payload) {
        const { data, onSuccess, onError } = payload
        try {
            const response = yield call(() =>
                factories.changePasswordByUser(data),
            );
            if (response?.success === true) {
                yield put({
                    type: actions.CHANGE_PASSWORD_BY_USER_SUCCESS,
                    payload: response?.data,
                });
                onSuccess && onSuccess();
            }

        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

export default function* AccountSaga() {
    yield all([
        fork(watchFetchAccountList),
        fork(watchDeleteMany),
        fork(watchGetAccount),
        fork(watchEditAccount),
        fork(watchDeleteAccount),
        fork(watchCreateAccount),
        fork(watchChangePasswordByUser),
    ]);
}
