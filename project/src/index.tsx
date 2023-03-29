
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mock/offers';
import { CITY } from './mock/city';


const AppSettings = {
  UserEmail: 'Oliver.conner@gmail.com',
  Offers: offers,
  OffersAmount: offers.length,
} as const;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App userEmail={AppSettings.UserEmail} offersAmount={AppSettings.OffersAmount} offers={offers} points={offers} city={CITY} />
  </React.StrictMode>,
);
