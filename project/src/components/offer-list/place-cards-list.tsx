
import PlaceCard from '../offer-card/place-card';
import { Offers } from '../../types/offer';


type PlaceCardsListProps = {
  offers: Offers;
  className: string;
  onMouseOverHandler: (id: number | null) => void;
}

function PlaceCardsList(props: PlaceCardsListProps): JSX.Element {
  const { offers, className, onMouseOverHandler } = props;

  return (
    <>
      {offers.map((offer) => <PlaceCard offer={offer} key={offer.id} id={offer.id} onMouseOverHandler={onMouseOverHandler} className={`cities__card ${className}`} />)}
    </>
  );
}


export default PlaceCardsList;
