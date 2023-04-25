import { NameSpace } from '../../const/const';
import { OffersProcess, State } from '../../types/state';

export const getSortedOffers = (state: State): OffersProcess['offers'] => state[NameSpace.Offer].offers;

export const getSelectedCity = (state: State): OffersProcess['city'] => state[NameSpace.Offer].city;

export const getSelectedSorting = (state: State): OffersProcess['selectedSort'] => state[NameSpace.Offer].selectedSort;

