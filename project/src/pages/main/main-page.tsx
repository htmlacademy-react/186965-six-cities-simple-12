import { Helmet } from 'react-helmet-async';
import MainPageHeader from '../../components/header/header';
import MainContent from '../../components/main/main';
import MainEmpty from '../../components/main/main-empty';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getOffers } from '../../store/offers-data/selectors';


type MainPageProps = {
  className: string;
};

function MainPage(props: MainPageProps): JSX.Element {
  const { className } = props;
  const offers = useAppSelector(getOffers);

  return (
    <>
      <Helmet title='Find a place to stay'></Helmet>
      <MainPageHeader />
      {offers.length ? <MainContent className={className} /> : <MainEmpty />}
    </>
  );
}

export default MainPage;
