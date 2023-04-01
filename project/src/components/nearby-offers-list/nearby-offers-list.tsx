
import { useState } from 'react';
import { CardOffers } from '../../types/offer';
import NearbyPlaceCard from '../nearby-offers/nearby-offers';

type NearbyPlaceCardsListProps = {
  offers: CardOffers;
  className: string;
}

function NearbyPlaceCardList({ offers, className }: NearbyPlaceCardsListProps): JSX.Element {
  const [offerId, setOfferId] = useState(0);
  return (
    <>
      {offers.map((offer) => <NearbyPlaceCard offer={offer} key={offer.id} id={offerId} onMouseOverHandler={() => setOfferId(offer.id)} className={className} />)}
    </>
  );
}

export default NearbyPlaceCardList;
