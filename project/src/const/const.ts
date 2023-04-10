import { Cities } from '../types/city';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer',

}


export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}


export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';


export const defaultCity = {
  name: 'Paris',
  location: {
    lat: 48.8534100,
    lng: 2.3488000,
  },
  zoom: 10
};


export const citiesNames: Cities = [
  {
    name: 'Paris',
    location: {
      lat: 48.8534100,
      lng: 2.3488000,
    },
    zoom: 10
  },
  {
    name: 'Cologne',
    location: {
      lat: 50.9333000,
      lng: 6.9500000,
    },
    zoom: 10
  },
  {
    name: 'Brussels',
    location: {
      lat: 50.8504000,
      lng: 4.3487800,
    },
    zoom: 10
  },
  {
    name: 'Amsterdam',
    location: {
      lat: 52.3909553943508,
      lng: 4.939309666406198,
    },
    zoom: 10
  },
  {
    name: 'Hamburg',
    location: {
      lat: 53.5753200,
      lng: 10.0153400,
    },
    zoom: 10
  },
  {
    name: 'Dusseldorf',
    location: {
      lat: 51.2217200,
      lng: 6.7761600,
    },
    zoom: 10
  },
];
