import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainPageHeader from '../../components/header/header';
import PlaceCardList from '../../components/offer-list/place-cards-list';
import Map from '../../components/map/map';
import { Offers } from '../../types/offer';
import { Offer } from '../../types/offer';
// import { City } from '../../types/city';
import CitiesList from '../../components/cities-list/cities-list';
import { citiesNames } from '../../const/const';
import { useAppSelector } from '../../hooks/use-app-selector';
import SortingForm from '../../components/sort-form/sort-form';


type MainPageProps = {
  userEmail: string;
  offers: Offers;
  className: string;
};

function MainPage(props: MainPageProps): JSX.Element {
  const { userEmail, offers, className } = props;

  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);

  const onListItemHover = (offerId: number | null) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);

    setSelectedPoint(currentOffer);
  };


  const offersList = useAppSelector((item) => item.offers);
  const currentCity = useAppSelector((item) => item.city.name);

  return (
    <>
      <Helmet title='Find a place to stay'></Helmet>
      <MainPageHeader userEmail={userEmail} />
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <CitiesList cities={citiesNames} />
          </section>
        </div>
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>{offersList.length} places to stay in {currentCity}</b>
              <SortingForm />
              <div className='cities__places-list places__list tabs__content'>
                <PlaceCardList offers={offersList} className={className} onMouseOverHandler={onListItemHover} />
              </div>
            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'>
                <Map selectedPoint={selectedPoint} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainPage;
