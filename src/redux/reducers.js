import { createReducer } from '@reduxjs/toolkit';

import {
  getFormValue,
  getFormValueFetch,
  getFormValueSuccess,
  deleteContact,
  getFilterValue,
  setFilteredArr,
  setLocalData,
  setNotify,
  removeFilteredArr,
  getDBSuccess,
} from './actions';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
  isLoading: false,
};

export const phonebookReducer = createReducer(initialState, {
  [getDBSuccess]: (state, { payload }) => ({
    ...state,
    contacts: {
      ...state.contacts,
      items: [...state.contacts.items, ...payload],
    },
  }),

  [getFormValue]: (state, { payload }) => ({
    ...state,
    contacts: {
      ...state.contacts,
      items: [...payload],
    },
  }),

  [getFormValueFetch]: (state, { payload }) => ({
    ...state,
    isLoading: !state.isLoading,
  }),

  [getFormValueSuccess]: (state, { payload }) => ({
    ...state,
    contacts: {
      ...state.contacts,
      items: [...state.contacts.items, payload],
    },
  }),

  [deleteContact]: (state, { payload }) => ({
    ...state,
    contacts: {
      ...state.contacts,
      items: state.contacts.items.filter(contact => contact.id !== payload),
    },
  }),

  [getFilterValue]: (state, { payload }) => ({
    ...state,
    contacts: {
      ...state.contacts,
      filter: payload,
    },
  }),

  [setFilteredArr]: state => ({
    ...state,
    contacts: {
      ...state.contacts,
      filteredItems: state.contacts.items.filter(el =>
        el.name.toLowerCase().includes(state.contacts.filter.toLowerCase()),
      ),
    },
  }),

  [setLocalData]: (state, { payload }) => ({
    ...state,
    contacts: {
      ...state.contacts,
      items: payload,
    },
  }),

  [setNotify]: (state, { payload }) => ({
    ...state,
    contacts: {
      ...state.contacts,
      setNotify: payload,
    },
  }),

  [removeFilteredArr]: state => ({
    ...state,
    contacts: {
      ...state.contacts,
      filteredItems: null,
    },
  }),
});
