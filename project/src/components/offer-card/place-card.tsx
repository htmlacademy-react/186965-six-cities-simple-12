import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { memo } from 'react';

type PlaceCardProps = {
  offer: Offer;
  id: number;
  onHoverCard?: (offer: Offer | null) => void;
  className: string;
}


function PlaceCard(props: PlaceCardProps,): JSX.Element {
  const { offer, className, onHoverCard } = props;
  const { previewImage, isPremium, price, title, id, rating, type } = offer;

  const handleOfferHover = (value: Offer | null) => {
    if (typeof onHoverCard === 'function') {
      onHoverCard(value);
    }
  };


  return (
    <article id={id.toString()} onMouseOver={(evt: MouseEvent<HTMLElement>) => handleOfferHover(offer)} onMouseLeave={(evt: MouseEvent<HTMLElement>) => handleOfferHover(null)} className={`place-card ${className}`}>
      {isPremium ? <div className='place-card__mark'><span>Premium</span></div> : ''}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to={`/offer/${id}`}>
          <img className='place-card__image' src={previewImage} width='260' height='200' alt={title} />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>€{price}</b>
            <span className='place-card__price-text'>/&nbsp;night</span>
          </div>

        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${rating / 5 * 100}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className='place-card__type'>{type}</p>
      </div>
    </article >
  );
}

export default memo(PlaceCard);
