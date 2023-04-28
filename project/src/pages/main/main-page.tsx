import { Helmet } from 'react-helmet-async';
import MainPageHeader from '../../components/header/header';
import MainContent from '../../components/main/main';
import MainEmpty from '../../components/main/main-empty';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getOffers, getDataLoadingStatus } from '../../store/offers-data/selectors';
import { ThreeDots } from 'react-loader-spinner';

type MainPageProps = {
  className: string;
};

function MainPage(props: MainPageProps): JSX.Element {
  const { className } = props;
  const offers = useAppSelector(getOffers);
  const isOfferDataLoading = useAppSelector(getDataLoadingStatus);

  if (isOfferDataLoading) {
    return (<ThreeDots height='80' width='80' radius='9' color='#4481c3' ariaLabel='three-dots-loading' wrapperClass='loader' visible />);
  }

  return (
    <>
      <Helmet title='Find a place to stay'></Helmet>
      <MainPageHeader />
      {offers.length ? <MainContent className={className} /> : <MainEmpty />}
    </>
  );
}

export default MainPage;
