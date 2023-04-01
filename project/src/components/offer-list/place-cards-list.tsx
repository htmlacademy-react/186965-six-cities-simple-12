import { useState } from 'react';
import PlaceCard from '../offer-card/place-card';
import { CardOffers } from '../../types/offer';


type PlaceCardsListProps = {
  offers: CardOffers;
  className: string;
}

function PlaceCardsList(props: PlaceCardsListProps): JSX.Element {
  const { offers, className } = props;
  const [offerId, setOfferId] = useState(0);

  return (
    <>
      {offers.map((offer) => <PlaceCard offer={offer} key={offer.id} id={offerId} onMouseOverHandler={() => setOfferId(offer.id)} className={`cities__card ${className}`} />)}
    </>
  );
}


export default PlaceCardsList;
