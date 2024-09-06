import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import factories from './factory';

function* watchLocale() {
    yield takeEvery(actions.FETCH_LOCALE_LIST, function* () {
        try {
            const response = yield call(() =>
                factories.fetchLocales(),
            );
            yield put({
                type: actions.FETCH_LOCALE_LIST_SUCCESS,
                payload: response?.data,
            });
        } catch (error) {

        } finally {
        }
    });
}
export default function* AppSaga() {
    yield all([
        fork(watchLocale),
    ]);
}
