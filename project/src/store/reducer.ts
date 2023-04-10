import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';
import { defaultCity } from '../const/const';
import { offers } from '../mock/offers';

const initialOffers = offers.filter((offer) => offer.city.name === defaultCity.name);

const initialState = {
  city: defaultCity,
  offers: initialOffers
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
    });
});


export {reducer};
