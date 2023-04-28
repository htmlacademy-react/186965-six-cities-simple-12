import { AuthorizationStatus } from '../const/const';
import { store } from '../store/index';
import { Offers, Offer } from './offer';
import { Reviews } from './review';
import { CityName } from './city';
import { UserData } from './user-data';
import { SortingOption } from './sort';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
}

export type OffersData = {
  cityName: CityName;
  offers: Offer[];
  selectedSort: string;
  isOffersDataLoading: boolean;
  error: boolean;
  user: UserData | null;
  reviews: Reviews;
  nearbyOffers: Offers;
  isSendingReviewStatus: boolean;
  isSendingReviewError: boolean;
}

export type OffersProcess = {
  offers: Offers;
  city: CityName;
  selectedSort: SortingOption;
}


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

