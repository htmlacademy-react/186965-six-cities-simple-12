import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City } from '../../types/city';
import { SortingOption } from '../../types/sort';
import { OffersProcess } from '../../types/state';
import { DEFAULT_CITY, DEFAULT_SORTING, NameSpace } from '../../const/const';

const initialState: OffersProcess = {
  offers: [],
  city: DEFAULT_CITY,
  selectedSort: DEFAULT_SORTING,
};

export const offersActivityProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
      state.city.city.location.latitude = action.payload.city.location.latitude;
      state.city.city.location.longitude = action.payload.city.location.longitude;
    },
    sortOffers: (state, action: PayloadAction<SortingOption>) => {
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
    }
  },
});

export const { changeCity, sortOffers } = offersActivityProcess.actions;
