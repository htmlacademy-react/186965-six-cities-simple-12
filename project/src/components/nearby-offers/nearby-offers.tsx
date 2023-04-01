import { CardOffer } from '../../types/offer';
import PlaceCard from '../offer-card/place-card';

type NearbyPlaceCardProps = {
  offer: CardOffer;
  id: number;
  onMouseOverHandler: (id: number) => void;
  className: string;
}

//near-places__card

function NearbyPlaceCard(props: NearbyPlaceCardProps): JSX.Element {
  const { className = '', ...restProps } = props;

  return (
    <PlaceCard {...restProps} className={`near-places__card ${className}`} />

  );
}


export default NearbyPlaceCard;
