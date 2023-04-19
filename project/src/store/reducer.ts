import { createReducer } from '@reduxjs/toolkit';
import { changeCity, sortOffers, loadOffers, setOffersDataLoadingStatus } from './action';
import { DEFAULT_CITY , DEFAULT_SORTING } from '../const/const';
import { Offer } from '../types/offer';
import { City } from '../types/city';


type InitialState = {
  cityName: City;
  offers: Offer[];
  selectedSort: string;
  isOffersDataLoading: boolean;
}

const initialState: InitialState = {
  cityName: DEFAULT_CITY,
  offers: [],
  selectedSort: DEFAULT_SORTING,
  isOffersDataLoading: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      if (action.payload) {
        state.offers = action.payload;
        // state.offers = state.offers.filter((item) => item.city.name === action.payload);

      }
    })
    .addCase(changeCity, (state, action) => {
      if (action.payload) {
        state.cityName.city.name = action.payload.city.name;
        state.offers = state.offers.filter((item) => item.city.name === action.payload.city.name);
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
    });

});


export {reducer};
