import { Cities } from '../types/city';

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


export const DEFAULT_CITY = {
  city: {
    location: {
      latitude: 48.8534100,
      longitude: 2.3488000,
      zoom: 10
    },
    name: 'Paris',
  }
};

export const citiesNames: Cities = [
  {
    city: {
      location: {
        latitude: 48.8534100,
        longitude: 2.3488000,
        zoom: 10
      },
      name: 'Paris',
    }
  },
  {
    city: {
      location: {
        latitude: 50.9333000,
        longitude: 6.9500000,
        zoom: 10
      },
      name: 'Cologne',
    }
  },
  {
    city: {
      location: {
        latitude: 50.8504000,
        longitude: 4.3487800,
        zoom: 10
      },
      name: 'Brussels',
    },
  },
  {
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.939309666406198,
        zoom: 10
      },
      name: 'Amsterdam',
    }
  },
  {
    city:  {
      location: {
        latitude: 53.5753200,
        longitude: 10.0153400,
        zoom: 10
      },
      name: 'Hamburg',
    }
  },
  {
    city: {
      location: {
        latitude: 51.2217200,
        longitude: 6.7761600,
        zoom: 10
      },
      name: 'Dusseldorf',
    }
  },
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
}
