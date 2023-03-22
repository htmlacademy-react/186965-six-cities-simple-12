import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const/conts';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login/login';
import NoPage from '../../pages/404-page/404-page';
import PrivateRoute from '../private-route/private-route';
import OfferCard from '../place-card/offer-card';
import { CardOffers } from '../../types/offer';

type AppProps = {
  userEmail: string;
  offersAmount: number;
  offers: CardOffers;

}

function App({ userEmail, offersAmount, offers }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage userEmail={userEmail} offersAmount={offersAmount} offers={offers} />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Offer} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <OfferCard userEmail={userEmail} />
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
