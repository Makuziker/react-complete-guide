import { takeEvery } from 'redux-saga/effects'
import { logoutSaga, checkoutAuthTimeoutSaga } from './auth';
import * as actionTypes from '../actions/actionTypes';

export function* watchAuth() {
  // when watchAuth is executed, create a listener, execute logoutSaga when it appears
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkoutAuthTimeoutSaga);
}