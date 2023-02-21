import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { easyMenuApi } from '../api';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { companyPersistReducer } from './persistor';
import { categoryReducers } from './slice';

const rootReducer = combineReducers({
  categories: categoryReducers,
  company: companyPersistReducer,
  [easyMenuApi.reducerPath]: easyMenuApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(easyMenuApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
