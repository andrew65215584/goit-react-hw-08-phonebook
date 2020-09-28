// import { applyMiddleware, createStore } from 'redux';
// import { phonebookReducer } from './reducers';
// import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { logger } from '../middlewares/loggers';
// import { authReducer } from './auth/authReducers';

// const middlWares = [logger];

// const store = configureStore({
// reducer: {
//     authReducer,
//     phonebookReducer,
//   },

//   composeWithDevTools(applyMiddleware(...middlWares)),

// },

// );
// export default store;

// import { configureStore } from '@reduxjs/toolkit';

/* 
!! ВТОРОЙ МЕТОД СОЗДАНИЯ СТОРА С КОМБАЙН РЕДЮСЕР
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer } from './auth/authReducers';
import { phonebookReducer } from './reducers';
import { logger } from '../middlewares/loggers'

const rootRedcer = combineReducers({

  phonebook: phonebookReducer,
  auth: authReducer ,

})

const middlWares = [logger]

const store = createStore(rootRedcer, composeWithDevTools(applyMiddleware(...middlWares)));


export default store;
  */

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import thunk from "redux-thunk"
import { authReducer } from './auth/authReducers';
import { phonebookReducer } from './reducers';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // thunk,
];

const authPersistConfig = { key: 'token', storage, whitelist: ['token'] };

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    phonebook: phonebookReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
export default store;
