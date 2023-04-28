
import PlaceCard from '../offer-card/place-card';
import { Offers, Offer } from '../../types/offer';


type PlaceCardsListProps = {
  offers: Offers;
  className: string;
  onHoverCard?: (offer: Offer | null) => void;
}

function PlaceCardsList(props: PlaceCardsListProps): JSX.Element {
  const { offers, className, onHoverCard } = props;

  return (
    <>
      {offers.map((offer) => <PlaceCard offer={offer} key={offer.id} id={offer.id} onHoverCard={onHoverCard} className={`cities__card ${className}`} />)}
    </>
  );
}


export default PlaceCardsList;
