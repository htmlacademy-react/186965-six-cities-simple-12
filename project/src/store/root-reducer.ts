import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const/const';
import { offersData } from './offers-data/offers-data';
import { userProcess } from './user-process/user-process';
import { offersActivityProcess } from './offers-activity-process/offers-activity-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Data]: offersData.reducer,
  [NameSpace.Offer]: offersActivityProcess.reducer,
});
