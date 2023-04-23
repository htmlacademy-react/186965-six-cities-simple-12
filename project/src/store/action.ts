import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { SortingOption } from '../types/sort';
import { Offers } from '../types/offer';
import { AuthorizationStatus, AppRoute } from '../const/const';
import { UserData } from '../types/user-data';
import { Reviews } from '../types/review';

export const changeCity = createAction<City>('city/changeCity');

export const sortOffers = createAction<SortingOption>('offers/sortOffers');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('route/redirectToRoute');

export const setUser = createAction<UserData>('user/setUser');

export const loadReviews = createAction<Reviews>('data/loadReviews');

export const loadNearbyOffers = createAction<Offers>('data/loadNearbyOffers');
