
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CITY } from './mock/city';
import { reviews } from './mock/reviews';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchOffersAction } from './store/api-actions';

store.dispatch(fetchOffersAction());

const AppSettings = {
  UserEmail: 'Oliver.conner@gmail.com',
  // Offers: offers,
  ReviewsLength: reviews.length,
} as const;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>

    <React.StrictMode>
      <App userEmail={AppSettings.UserEmail} city={CITY} reviews={reviews} reviewsLength={AppSettings.ReviewsLength} className='' />
    </React.StrictMode>
  </Provider>

);
