import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchOffersAction, fetchOfferAction, sendNewReviewAction } from './api-actions';
import { OffersData } from '../../types/state';
import { NameSpace, DEFAULT_CITY, DEFAULT_SORTING } from '../../const/const';
import { SortingOption } from '../../types/sort';
import { City } from '../../types/city';

const initialState: OffersData = {
  cityName: DEFAULT_CITY,
  offers: [],
  selectedSort: DEFAULT_SORTING,
  isOffersDataLoading: false,
  error: false,
  user: null,
  reviews: [],
  nearbyOffers: [],
  isSendingReviewStatus: false,
  isSendingReviewError: false
};


export const offersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.cityName.city.name = action.payload.city.name;
      state.cityName.city.location.latitude = action.payload.city.location.latitude;
      state.cityName.city.location.longitude = action.payload.city.location.longitude;
      state.selectedSort = DEFAULT_SORTING;
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
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isOffersDataLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.error = true;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.error = false;
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        const [ comments, nearby] = action.payload;
        state.nearbyOffers = nearby;
        state.reviews = comments.sort((a, b) => {
          if (a.date < b.date) {
            return 1;
          }
          return -1;
        });
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.error = true;
        state.isOffersDataLoading = false;
      })
      .addCase(sendNewReviewAction.pending, (state) => {
        state.isSendingReviewStatus = true;
      })
      .addCase(sendNewReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload.sort((a, b) => {
          if (a.date < b.date) {
            return 1;
          }
          return -1;
        });
        state.isSendingReviewStatus = false;
      })
      .addCase(sendNewReviewAction.rejected, (state) => {
        state.isSendingReviewStatus = false;
        state.isSendingReviewError = true;
      });
  }
});


export const { changeCity, sortOffers } = offersData.actions;
