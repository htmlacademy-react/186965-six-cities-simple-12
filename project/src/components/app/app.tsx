import { Route, Routes } from 'react-router-dom';
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
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';


type AppProps = {
  city: City;
  reviews: Reviews;
  reviewsLength: number;
  className: string;
}

function App(props: AppProps): JSX.Element {
  const { city, reviews, reviewsLength, className } = props;

  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage className={className} />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Offer} element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <OfferCard reviews={reviews} reviewsLength={reviewsLength} city={city} className={className} />
            </PrivateRoute>
          }
          />

          <Route
            path="*"
            element={<NoPage />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>

  );
}

export default App;
