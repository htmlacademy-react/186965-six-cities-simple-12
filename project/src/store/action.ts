import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';

export const changeCity = createAction<City>('city/changeCity');
export const fillOffersList = createAction('offers/fillOffersList');
