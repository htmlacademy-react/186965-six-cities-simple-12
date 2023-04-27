import { Offer } from '../../types/offer';
import PlaceCard from '../offer-card/place-card';

type NearbyPlaceCardProps = {
  offer: Offer;
  id: number;
  className: string;
}


function NearbyPlaceCard(props: NearbyPlaceCardProps): JSX.Element {
  const { className = '', ...restProps } = props;

  return (
    <PlaceCard {...restProps} className={`near-places__card ${className}`} />
  );
}


export default NearbyPlaceCard;
