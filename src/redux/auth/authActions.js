import { createAction } from '@reduxjs/toolkit';

export const postUserInfoFetch = createAction('auth/REGISTER_USER_Fetch');
export const postUserInfoSuccess = createAction('auth/REGISTER_USER_Success');
export const postUserInfoError = createAction('auth/REGISTER_USER_Error');

export const loginUserFetch = createAction('auth/LOGIN_USER_Fetch');

export const loginUserSuccess = createAction('auth/LOGIN_USER_Success');

export const loginUserError = createAction('auth/LOGIN_USER_Error');

export const logoutUserFetch = createAction('auth/LOGOUT_USER_Fetch');

export const logoutUserSuccess = createAction('auth/LOGOUT_USER_Success');

export const logoutUserError = createAction('auth/LOGOUT_USER_Error');

export const getCurrentUserFetch = createAction('auth/GET_CURRENT_USER_Fetch');

export const getCurrentUserSuccess = createAction(
  'auth/GET_CURREN_USER_Success',
);

export const getCurrentUserError = createAction('auth/GET_CURREN_USER_Error');
