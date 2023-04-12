

import { Offers } from '../../types/offer';
import NearbyPlaceCard from '../nearby-offers/nearby-offers';

type NearbyPlaceCardsListProps = {
  offers: Offers;
  className: string;
  onMouseOverHandler: (id: number | null) => void;
}

function NearbyPlaceCardList({ offers, className, onMouseOverHandler }: NearbyPlaceCardsListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => <NearbyPlaceCard offer={offer} key={offer.id} id={offer.id} onMouseOverHandler={onMouseOverHandler} className={className} />)}
    </>
  );
}

export default NearbyPlaceCardList;
