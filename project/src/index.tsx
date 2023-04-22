
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CITY } from './mock/city';
import { reviews } from './mock/reviews';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchOffersAction } from './store/api-actions';
import { checkAuthAction } from './store/api-actions';
// import { ToastContainer } from 'react-toastify';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

const AppSettings = {
  ReviewsLength: reviews.length,
} as const;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ToastContainer /> */}
      <App city={CITY} reviews={reviews} reviewsLength={AppSettings.ReviewsLength} className='' />
    </Provider>
  </React.StrictMode>

);
