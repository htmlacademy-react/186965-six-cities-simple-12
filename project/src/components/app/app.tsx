import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { AppRoute, AuthorizationStatus } from '../../const/const';
import MainPage from '../../pages/main/main-page';
import LoginPage from '../../pages/login/login';
import NoPage from '../../pages/404-page/404-page';
import PrivateRoute from '../private-route/private-route';
import OfferCard from '../../pages/room/offer-card';
import { Offers } from '../../types/offer';
import { City } from '../../types/city';
import { Reviews } from '../../types/review';

type AppProps = {
  userEmail: string;
  offers: Offers;
  city: City;
  reviews: Reviews;
  reviewsLength: number;
  className: string;
}

function App(props: AppProps): JSX.Element {
  const { userEmail, offers, city, reviews, reviewsLength, className } = props;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage userEmail={userEmail} offers={offers} className={className} />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Offer} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <OfferCard userEmail={userEmail} reviews={reviews} reviewsLength={reviewsLength} city={city} offers={offers.slice(0, 3)} className={className} />
            </PrivateRoute>
          }
          />

          <Route
            path="*"
            element={<NoPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  );
}

export default App;
