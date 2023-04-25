import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { AppRoute } from '../../const/const';
import MainPage from '../../pages/main/main-page';
import LoginPage from '../../pages/login/login';
import NoPage from '../../pages/404-page/404-page';
import OfferCard from '../../pages/room/offer-card';

import { useAppSelector } from '../../hooks/use-app-selector';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { getOffers } from '../../store/offers-data/selectors';


type AppProps = {
  className: string;
}

function App(props: AppProps): JSX.Element {
  const { className } = props;

  const offers = useAppSelector(getOffers);


  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage className={className} />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Offer} element={
            <OfferCard className={className} offers={offers} />
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
