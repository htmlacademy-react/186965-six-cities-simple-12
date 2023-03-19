import PlaceCard from './place-card';
import { CardOffers } from '../../types/offer';


type PlaceCardsListProps = {
  offers: CardOffers;
}

function PlaceCardsList({ offers }: PlaceCardsListProps): JSX.Element {
  return (
    offers.map((offer) => {
      <PlaceCard offer={offer} />
    })
  );
}


export default PlaceCardsList;
