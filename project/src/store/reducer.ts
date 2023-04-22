import { createReducer } from '@reduxjs/toolkit';
import { changeCity, sortOffers, loadOffers, setOffersDataLoadingStatus, requireAuthorization, setUser } from './action';
import { DEFAULT_CITY, DEFAULT_SORTING, AuthorizationStatus } from '../const/const';
import { Offer } from '../types/offer';
import { City } from '../types/city';
import { UserData } from '../types/user-data';


type InitialState = {
  cityName: City;
  offers: Offer[];
  selectedSort: string;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  user: UserData | null;
}

const initialState: InitialState = {
  cityName: DEFAULT_CITY,
  offers: [],
  selectedSort: DEFAULT_SORTING,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  user: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      if (action.payload) {
        state.offers = action.payload;
      }
    })
    .addCase(changeCity, (state, action) => {
      if (action.payload) {
        state.cityName.city.name = action.payload.city.name;
        state.cityName.city.location.latitude = action.payload.city.location.latitude;
        state.cityName.city.location.longitude = action.payload.city.location.longitude;
      }
    })
    .addCase(sortOffers, (state, action) => {
      state.selectedSort = action.payload;
      state.offers = state.offers.sort((a, b) => {
        switch(state.selectedSort) {
          case 'Price: low to high':
            return a.price - b.price;
          case 'Price: high to low':
            return b.price - a.price;
          case 'Top rated first':
            return b.rating - a.rating;
          default:
            return 0;
        }
      });
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });

});


export {reducer};
