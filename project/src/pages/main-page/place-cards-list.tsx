import { useState } from 'react';
import PlaceCard from './place-card';
import { CardOffers } from '../../types/offer';


type PlaceCardsListProps = {
  offers: CardOffers;
}

function PlaceCardsList({ offers }: PlaceCardsListProps): JSX.Element {
  const [offerId, setOfferId] = useState(0);

  return (
    <>
      {offers.map((offer) => <PlaceCard offer={offer} key={offer.id} id={offerId} onMouseOverHandler={() => setOfferId(offer.id)} />)}
    </>
  );
}


export default PlaceCardsList;
