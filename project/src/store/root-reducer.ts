import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const/const';
import { offersData } from './offers-data/offers-data.slice';
import { userProcess } from './user-process/user-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Data]: offersData.reducer,
});
