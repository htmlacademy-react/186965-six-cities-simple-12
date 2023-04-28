import { CityName } from '../types/city';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer/:id',
  Comments = '/comments/'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT =
  '/img/pin.svg';

export const URL_MARKER_CURRENT =
  '/img/pin-active.svg';


export const DEFAULT_CITY: CityName = 'Paris';

export const citiesNames = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const sortingOptions = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
];

export const DEFAULT_SORTING = 'Popular';

export const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
}


export const MAX_IMAGES_AMOUNT = 6;

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
  Offer = 'OFFER'
}


export const ReviewNumbers = {
  MIN_COMMENTS_LENGTH: 50,
  MAX_COMMENTS_LENGTH: 300,
} as const;
