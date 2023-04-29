import { useState, useMemo } from 'react';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getChangeCity, getOffers, getSelectedSorting } from '../../store/offers-data/selectors';
import PlaceCardList from '../../components/offer-list/place-cards-list';
import Map from '../../components/map/map';
import { Offer } from '../../types/offer';

import CitiesList from '../../components/cities-list/cities-list';
import SortingForm from '../../components/sort-form/sort-form';
import { DEFAULT_SORTING } from '../../const/const';

type MainContentProps = {
  className: string;
}


function MainContent({ className }: MainContentProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Offer | null>(null);
  const offers = useAppSelector(getOffers);
  const currentCity = useAppSelector(getChangeCity);
  const selectedSorting = useAppSelector(getSelectedSorting);

  const filteredOffers = useMemo(
    () => offers.filter((offer) => offer.city.name === currentCity),
    [offers, currentCity]
  );

  const sortedOffers = useMemo(() => {
    if (selectedSorting === DEFAULT_SORTING) {
      return filteredOffers;
    }

    return [...filteredOffers].sort((a, b) => {
      switch(selectedSorting) {
        case 'Price: low to high':
          return a.price - b.price;
        case 'Price: high to low':
          return b.price - a.price;
        case 'Top rated first':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  }, [filteredOffers, selectedSorting]);


  return (
    <main className='page__main page__main--index'>
      <h1 className='visually-hidden'>Cities</h1>
      <div className='tabs'>
        <section className='locations container'>
          <CitiesList/>
        </section>
      </div>
      <div className='cities'>
        <div className='cities__places-container container'>
          <section className='cities__places places'>
            <h2 className='visually-hidden'>Places</h2>
            <b className='places__found'>{filteredOffers.length} places to stay in {currentCity}</b>
            <SortingForm />
            <div className='cities__places-list places__list tabs__content'>
              <PlaceCardList offers={sortedOffers} className={className} onHoverCard={setSelectedPoint} />
            </div>
          </section>
          <div className='cities__right-section'>
            <Map selectedPoint={selectedPoint} offers={filteredOffers} className={'cities__map'} city={filteredOffers[0].city} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
