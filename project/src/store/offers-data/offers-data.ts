import { createSlice } from '@reduxjs/toolkit';
import { fetchOffersAction, fetchOfferAction, sendNewReviewAction } from './api-actions';
import { OffersData } from '../../types/state';
import { NameSpace, DEFAULT_CITY, DEFAULT_SORTING } from '../../const/const';


const initialState: OffersData = {
  cityName: DEFAULT_CITY,
  offers: [],
  selectedSort: DEFAULT_SORTING,
  isOffersDataLoading: false,
  error: null,
  user: null,
  reviews: [],
  nearbyOffers: []
};


export const offersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
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

      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.error = null;
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        const [ comments, nearby] = action.payload;
        state.nearbyOffers = nearby;
        state.reviews = [...comments].sort((a, b) => {
          if (a.date < b.date) {
            return 1;
          }
          return -1;
        }).slice(0, 10);
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.error = 'There has been an error';
        state.isOffersDataLoading = false;
      })
      .addCase(sendNewReviewAction.pending, (state) => {
        state.error = null;
      })
      .addCase(sendNewReviewAction.fulfilled, (state, action) => {
        state.reviews = [...action.payload].sort((a, b) => {
          if (a.date < b.date) {
            return 1;
          }
          return -1;
        }).slice(0, 10);
      })
      .addCase(sendNewReviewAction.rejected, (state) => {
        state.error = 'Error';
      });
  }
});
