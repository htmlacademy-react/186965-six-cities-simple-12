import { createReducer } from '@reduxjs/toolkit';
import { changeCity, sortOffers } from './action';
import { DEFAULT_CITY , DEFAULT_SORTING } from '../const/const';
import { offers } from '../mock/offers';

const initialOffers = offers.filter((offer) => offer.city.name === DEFAULT_CITY.name);

const initialState = {
  city: DEFAULT_CITY ,
  offers: initialOffers,
  selectedSort: DEFAULT_SORTING
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      if (action.payload) {
        state.city.name = action.payload.name;
        state.offers = offers.filter((item) => item.city.name === action.payload.name);
        state.city.location.lat = action.payload.location.lat;
        state.city.location.lng = action.payload.location.lng;
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
    });

});


export {reducer};
