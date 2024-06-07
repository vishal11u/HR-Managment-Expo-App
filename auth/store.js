// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer, { loadAuthState } from './authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

store.dispatch(loadAuthState());

export default store;
