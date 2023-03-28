// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainPageHeader from './main-page-header';
import PlaceCardList from '../main-page/place-cards-list';
import { CardOffers, CardOffer } from '../../types/offer';
import Map from '../../components/map/map';


type MainPageProps = {
  userEmail: string;
  offers: CardOffers;
  offersAmount: number;
  city: CardOffer;
};

function MainPage({ userEmail, offers, offersAmount, city }: MainPageProps): JSX.Element {

  // const [selectedPoint, setSelectedPoint] = useState<CardOffer | undefined>(undefined);

  // const onListItemHover = (listItemName: string) => {
  //   const currentPoint = points.find((point) => point.city === listItemName);

  //   setSelectedPoint(currentPoint);
  // };

  return (
    <>
      <Helmet title='Find a place to stay'></Helmet>
      <MainPageHeader userEmail={userEmail} />

      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <ul className='locations__list tabs__list'>
              <li className='locations__item'>
                <Link className='locations__item-link tabs__item' to='#'>
                  <span>Paris</span>
                </Link>
              </li>
              <li className='locations__item'>
                <Link className='locations__item-link tabs__item' to='#'>
                  <span>Cologne</span>
                </Link>
              </li>
              <li className='locations__item'>
                <Link className='locations__item-link tabs__item' to='#'>
                  <span>Brussels</span>
                </Link>
              </li>
              <li className='locations__item'>
                <Link className='locations__item-link tabs__item tabs__item--active' to="">
                  <span>Amsterdam</span>
                </Link>
              </li>
              <li className='locations__item'>
                <Link className='locations__item-link tabs__item' to='#'>
                  <span>Hamburg</span>
                </Link>
              </li>
              <li className='locations__item'>
                <Link className='locations__item-link tabs__item' to='#'>
                  <span>Dusseldorf</span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>{offersAmount} places to stay in Amsterdam</b>
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
                <PlaceCardList offers={offers} />
              </div>
            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'>
                <Map city={city} points={offers}></Map>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainPage;
