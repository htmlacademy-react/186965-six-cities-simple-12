import MainPageHeader from '../../components/header/header';
import ReviewsList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import { Offer, Offers } from '../../types/offer';
import NearbyPlaceCardList from '../../components/nearby-offers-list/nearby-offers-list';
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from '../../store';
import { checkAuthAction, fetchOfferAction } from '../../store/api-actions';
import { MAX_IMAGES_AMOUNT } from '../../const/const';
import { useParams } from 'react-router-dom';
import NoPage from '../404-page/404-page';
import { inflectWord } from '../../utils/utils';
import { useAppSelector } from '../../hooks/use-app-selector';


store.dispatch(checkAuthAction());

type MainPageHeaderProps = {
  offers: Offers;
  className: string;
}

function OfferCard({ offers, className }: MainPageHeaderProps): JSX.Element {
  const { id } = useParams();
  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);
  const offerItem = offers.find((item) => item.id === Number(id));
  const reviews = useAppSelector((state) => state.reviews);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);

  const dispatch = useAppDispatch();

  const onListItemHover = (offerItemId: number | null) => {
    const selectedOffer = offers.find((offer) => offer.id === offerItemId);
    setSelectedPoint(selectedOffer);

  };


  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(Number(id)));
    }
  }, [dispatch, id]);


  if (!offerItem || !nearbyOffers || !reviews) {
    return <NoPage />;
  }

  const { images, isPremium, title, rating, type, bedrooms, maxAdults, goods, price, host, description } = offerItem;

  const maxImagedAmount = images.slice(0, MAX_IMAGES_AMOUNT);


  return (
    <>
      <MainPageHeader />
      {/* <ToastContainer /> */}
      <main className='page__main page__main--property'>
        <section className='property'>
          <div className='property__gallery-container container'>
            <div className='property__gallery'>
              {maxImagedAmount.map((image) => (
                <div className='property__image-wrapper' key={image}>
                  <img className='property__image' src={image} alt='Photo studio' />
                </div>
              ))}
            </div>
          </div>
          <div className='property__container container'>
            <div className='property__wrapper'>
              {isPremium &&
                <div className='property__mark'>
                  <span>Premium</span>
                </div>}
              <div className='property__name-wrapper'>
                <h1 className='property__name'>
                  {title}
                </h1>
              </div>
              <div className='property__rating rating'>
                <div className='property__stars rating__stars'>
                  <span style={{ width: `${rating ? Math.round(rating / 5 * 100) : 0}%` }}></span>
                  <span className='visually-hidden'>{rating}</span>
                </div>
                <span className='property__rating-value rating__value'>{rating}</span>
              </div>
              <ul className='property__features'>
                <li className='property__feature property__feature--entire'>
                  {type}
                </li>
                <li className='property__feature property__feature--bedrooms'>
                  {bedrooms} {inflectWord(bedrooms, ['Bedroom', 'Bedrooms'])}
                </li>
                <li className='property__feature property__feature--adults'>
                  Max {maxAdults} {inflectWord(maxAdults, ['adult', 'adults', 'adults', 'adults'])}
                </li>
              </ul>
              <div className='property__price'>
                <b className='property__price-value'>&euro;{price}</b>
                <span className='property__price-text'>&nbsp;night</span>
              </div>
              <div className='property__inside'>
                <h2 className='property__inside-title'>What&apos;s inside</h2>
                <ul className='property__inside-list'>
                  {goods.map((goodItem) => (
                    <li className='property__inside-item' key={goodItem}>
                      {goodItem}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='property__host'>
                <h2 className='property__host-title'>Meet the host</h2>
                <div className='property__host-user user'>
                  <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                    <img className='property__avatar user__avatar' src={host.avatarUrl} width='74' height='74' alt='Host avatar' />
                  </div>
                  <span className='property__user-name'>
                    {host.name}
                  </span>
                  {host.isPro && <span className='property__user-status'>Pro</span>}
                </div>
                <div className='property__description'>
                  <p className='property__text'>{description}</p>
                </div>
              </div>
              <ReviewsList reviews={reviews} offerId={Number(id)} />
            </div>
          </div>
          <section className='property__map map'>
            <Map selectedPoint={selectedPoint} offers={nearbyOffers} />
          </section>
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>Other places in the neighbourhood</h2>
            <div className='near-places__list places__list'>
              <NearbyPlaceCardList offers={nearbyOffers} className={className} onMouseOverHandler={onListItemHover} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}


export default OfferCard;
