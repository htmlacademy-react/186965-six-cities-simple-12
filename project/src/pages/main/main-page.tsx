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


type MainPageProps = {
  userEmail: string;
  offers: Offers;
  // city: City;
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
              <form className='places__sorting' action='#' method='get'>
                <span className='places__sorting-caption'>Sort by</span>
                <span className='places__sorting-type' tabIndex={0}>
                  Popular
                  <svg className='places__sorting-arrow' width='7' height='4'>
                    <use xlinkHref='#icon-arrow-select'></use>
                  </svg>
                </span>
                <ul className='places__options places__options--custom'>
                  <li className='places__option places__option--active' tabIndex={0}>Popular</li>
                  <li className='places__option' tabIndex={0}>Price: low to high</li>
                  <li className='places__option' tabIndex={0}>Price: high to low</li>
                  <li className='places__option' tabIndex={0}>Top rated first</li>
                </ul>
              </form>
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
