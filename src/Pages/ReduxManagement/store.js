import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './signupSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, signupReducer);

export const store = configureStore({
  reducer: {
    signup: persistedReducer,
  },
});

export const persistor = persistStore(store);
