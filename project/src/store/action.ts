import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { SortingOption } from '../types/sort';
import { Offers } from '../types/offer';

export const changeCity = createAction<City>('city/changeCity');

export const sortOffers = createAction<SortingOption>('offers/sortOffers');

export const loadOffers = createAction<Offers>('data/loadOffers');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
