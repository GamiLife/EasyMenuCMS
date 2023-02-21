import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { companyReducers } from '../slice';

const companyPersistConfig = {
  key: 'company',
  storage,
};

export const companyPersistReducer = persistReducer(
  companyPersistConfig,
  companyReducers
);
