import { createAction } from '@reduxjs/toolkit';

export const getFormValueFetch = createAction('phonebook/GET_FORM_VALUE_Fetch');
export const getFormValueSuccess = createAction(
  'phonebook/GET_FORM_VALUE_Success',
);
export const getFormValueError = createAction('phonebook/GET_FORM_VALUE_Error');

export const getFormValue = createAction('phonebook/GET_FORM_VALUE');

export const deleteContact = createAction('phonebook/DELETE_CONTACT');
export const getFilterValue = createAction('phonebook/GET_FILTER_VALUE');
export const setFilteredArr = createAction('phonebook/SET_FILTERED_ARR');
export const setLocalData = createAction('phonebook/SET_LOCAL_DATA');
export const setNotify = createAction('phonebook/SET_NOTIFY');
export const removeFilteredArr = createAction('phonebook/REMOVE_FILTERED_ARR');

export const getDBFetch = createAction('phonebook/GET_DB_Fetch');
export const getDBSuccess = createAction('phonebook/GET_DB_Success');
export const getDBError = createAction('phonebook/GET_DB_Error');
