import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { SortingOption } from '../types/sort';

export const changeCity = createAction<City>('city/changeCity');
export const fillOffersList = createAction('offers/fillOffersList');
export const sortOffers = createAction<SortingOption>('offers/sortOffers');

