import axios from 'axios';
import {
  getFormValueFetch,
  getFormValueSuccess,
  getFormValueError,
  getDBFetch,
  getDBSuccess,
  getDBError,
} from './actions';

// import store from './store';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },

//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

export const getDataFromDB = param => async (dispatch, getState) => {
  dispatch(getDBFetch());
  try {
    // const keys = Object.keys(data.data);

    // const result = keys.reduce((acc, key) => {
    //   acc.push({ id: key, ...data.data[key] });

    //   return acc;
    // }, []);
    const data = await axios.get(`/contacts`);
    dispatch(getDBSuccess(data.data));
  } catch (e) {
    if (e) {
      getDBError(e);
    }
  }
};

export const postFormValueAsync = param => async (dispatch, getState) => {
  dispatch(getFormValueFetch());
  try {
    const data = await axios.post(`/contacts`, param);
    dispatch(getFormValueSuccess({ ...param, id: data.data.name }));
  } catch (e) {
    dispatch(getFormValueError(e));
  } finally {
    dispatch(getFormValueFetch());
  }
};

export const deleteContactAsync = param => async (dispatch, getState) => {
  try {
    await axios.delete(`/contacts/${param}`);
  } catch (e) {
    console.log(e);
  }
};
