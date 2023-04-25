import { useCallback, useState } from 'react';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getChangeCity, getDataLoadingStatus, getOffers } from '../../store/offers-data/selectors';
import PlaceCardList from '../../components/offer-list/place-cards-list';
import Map from '../../components/map/map';
import { Offer } from '../../types/offer';

import CitiesList from '../../components/cities-list/cities-list';
import { citiesNames } from '../../const/const';
import SortingForm from '../../components/sort-form/sort-form';

import { ThreeDots } from 'react-loader-spinner';

type MainContentProps = {
  className: string;
}


function MainContent({ className }: MainContentProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);

  const allOffers = useAppSelector(getOffers);
  const currentCity = useAppSelector(getChangeCity);

  const isOfferDataLoading = useAppSelector(getDataLoadingStatus);

  const offers = allOffers.filter((item) => item.city.name === currentCity.city.name);

  const onListItemHover = useCallback((offerId: number | null) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);
    setSelectedPoint(currentOffer);
  }, [offers]);


  if (isOfferDataLoading) {
    return (<ThreeDots height='80' width='80' radius='9' color='#4fa94d' ariaLabel='three-dots-loading' wrapperStyle={{}} visible />);
  }

  return (
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
            <b className='places__found'>{offers.length} places to stay in {currentCity.city.name}</b>
            <SortingForm />
            <div className='cities__places-list places__list tabs__content'>
              <PlaceCardList offers={offers} className={className} onMouseOverHandler={onListItemHover} />
            </div>
          </section>
          <div className='cities__right-section'>
            <section className='cities__map map'>
              <Map selectedPoint={selectedPoint} offers={offers} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
