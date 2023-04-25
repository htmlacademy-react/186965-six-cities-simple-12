import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { APIRoute } from '../../const/const';
import { Offer, Offers } from '../../types/offer';
import { Reviews, NewReview } from '../../types/review';


export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers);

    return data;

  },
);

export const fetchOfferAction = createAsyncThunk<[Reviews, Offers], Offer['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async(hotelId, {dispatch, extra: api}) => {
    const [ comments, nearby ] = await Promise.all([
      api.get<Reviews>(`${APIRoute.Comments}/${hotelId}`),
      api.get<Offers>(`${APIRoute.Offers}/${hotelId}/nearby`)
    ]);
    return [comments.data, nearby.data];
  });


export const sendNewReviewAction = createAsyncThunk<Reviews, {
  offerId: Offer['id'];
  comment: NewReview['comment'];
  rating: NewReview['rating'];
},
{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('data/sendReview',
  async({ comment, rating, offerId }, {dispatch, extra: api}) => {
    const {data} = await api.post<Reviews>(`${APIRoute.Comments}/${offerId}`, { comment, rating});
    return data;
  }
);

