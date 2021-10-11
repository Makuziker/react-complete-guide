import * as actionTypes from './actionTypes';
import axios from 'axios';

const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  };
};

const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

const checkAuthTimeout = (expirationTime = 3600) => {
  // default value of 3600(ms)
  return {
    type: actionTypes.AUTH_CHECK_TIMEOUT,
    expirationTime: expirationTime
  };
};

export const logoutSuceed = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const logout = () => {
  // localStorage.removeItem('token');
  // localStorage.removeItem('expirationDate');
  // localStorage.removeItem('userId');
  return {
    type: actionTypes.AUTH_INITIATE_LOGOUT
  };
};

export const auth = (email, password, isSignup = true) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password
    };
    const key = 'AIzaSyCDZZKIexZciP1F1dcqmWXbr4yPWTe3HkE';
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;
    if (!isSignup) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;
    }
    axios.post(url, authData)
      .then(response => {
        // response.data.expiresIn is undefined???? Placing hacky fallbacks
        const expirationDate = new Date (new Date().getTime() + (response.data.expiresIn || 3600) * 1000);
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('userId', response.data.localId);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(error => {
        dispatch(authFail(error.response.data.error));
      });
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  }
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem('userId');
        dispatch(authSuccess(token, userId));
        dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
      }
    }
  };
};