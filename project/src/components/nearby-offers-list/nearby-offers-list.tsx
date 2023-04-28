

import { Offers } from '../../types/offer';
import NearbyPlaceCard from '../nearby-offers/nearby-offers';

type NearbyPlaceCardsListProps = {
  offers: Offers;
  className: string;
}

function NearbyPlaceCardList({ offers, className }: NearbyPlaceCardsListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => <NearbyPlaceCard offer={offer} key={offer.id} id={offer.id} className={className} />)}
    </>
  );
}

export default NearbyPlaceCardList;
