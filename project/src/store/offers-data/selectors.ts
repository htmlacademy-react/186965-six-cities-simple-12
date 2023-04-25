import { OffersData, OffersProcess, State } from '../../types/state';
import { NameSpace } from '../../const/const';


export const getChangeCity = (state: State): OffersData['cityName'] => state[NameSpace.Data].cityName;
export const getOffers = (state: State): OffersData['offers'] => state[NameSpace.Data].offers;
export const getNearbyOffers = (state: State): OffersData['nearbyOffers'] => state[NameSpace.Data].nearbyOffers;
export const getDataLoadingStatus = (state: State): OffersData['isOffersDataLoading'] => state[NameSpace.Data].isOffersDataLoading;
export const getReviews = (state: State): OffersData['reviews'] => state[NameSpace.Data].reviews;
export const getError = (state: State): OffersData['error'] => state[NameSpace.Data].error;

export const getSortedOffers = (state: State): OffersProcess['offers'] => state[NameSpace.Data].offers;
export const getSelectedCity = (state: State): OffersProcess['city'] => state[NameSpace.Data].cityName;
export const getSelectedSorting = (state: State): OffersProcess['selectedSort'] => state[NameSpace.Data].selectedSort;


export const getSendingReviewStatus = (state: State): OffersData['isSendingReviewStatus'] => state[NameSpace.Data].isSendingReviewStatus;
export const getReviewErrorStatus = (state: State): OffersData['isSendingReviewError'] => state[NameSpace.Data].isSendingReviewError;


