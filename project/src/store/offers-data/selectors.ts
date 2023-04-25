import { OffersData, State } from '../../types/state';
import { NameSpace } from '../../const/const';


export const getChangeCity = (state: State): OffersData['cityName'] => state[NameSpace.Data].cityName;
export const getOffers = (state: State): OffersData['offers'] => state[NameSpace.Data].offers;
export const getNearbyOffers = (state: State): OffersData['nearbyOffers'] => state[NameSpace.Data].nearbyOffers;
export const getDataLoadingStatus = (state: State): OffersData['isOffersDataLoading'] => state[NameSpace.Data].isOffersDataLoading;
export const getReviews = (state: State): OffersData['reviews'] => state[NameSpace.Data].reviews;
export const getError = (state: State): OffersData['error'] => state[NameSpace.Data].error;


