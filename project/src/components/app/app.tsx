import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { AppRoute, AuthorizationStatus } from '../../const/const';
import MainPage from '../../pages/main/main-page';
import LoginPage from '../../pages/login/login';
import NoPage from '../../pages/404-page/404-page';
import PrivateRoute from '../private-route/private-route';
import OfferCard from '../../pages/room/offer-card';

import { City } from '../../types/city';
import { Reviews } from '../../types/review';
import { useAppSelector } from '../../hooks/use-app-selector';
import LoadingScreen from '../../pages/loading-screen/loading-screen';


type AppProps = {
  userEmail: string;
  city: City;
  reviews: Reviews;
  reviewsLength: number;
  className: string;
}

function App(props: AppProps): JSX.Element {
  const { userEmail, city, reviews, reviewsLength, className } = props;

  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage userEmail={userEmail} className={className} />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Offer} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <OfferCard userEmail={userEmail} reviews={reviews} reviewsLength={reviewsLength} city={city} className={className} />
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
