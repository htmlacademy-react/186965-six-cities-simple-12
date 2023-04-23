import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Offer, Offers } from '../types/offer';
import { loadOffers, setOffersDataLoadingStatus, requireAuthorization, redirectToRoute, setUser, loadReviews, loadNearbyOffers } from './action';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const/const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { saveToken, dropToken } from '../services/token';
import { Reviews, NewReview } from '../types/review';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));

  },
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUser(data));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));

  },
);

export const fetchOfferAction = createAsyncThunk<void, Offer['id'], {
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
    dispatch(loadReviews(comments.data));
    dispatch(loadNearbyOffers(nearby.data));
  });


export const sendNewReviewAction = createAsyncThunk<void, {
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
    dispatch(loadReviews(data));
  }
);

