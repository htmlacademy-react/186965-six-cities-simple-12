import { useAppSelector } from '../../hooks/use-app-selector';
import { Reviews } from '../../types/review';
import Review from '../review/review';
import ReviewForm from '../review-form/review-form';
import { AuthorizationStatus } from '../../const/const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

type ReviewListProps = {
  reviews: Reviews;
  offerId: number;
}

function ReviewsList({ reviews, offerId }: ReviewListProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <section className='property__reviews reviews'>
      <h2 className='reviews__title'>Reviews · <span className='reviews__amount'>{reviews.length}</span></h2>
      <ul className='reviews__list'>
        {reviews.map((review) => <Review review={review} key={review.id} />)}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm offerId={offerId} />}

    </section>
  );
}


export default ReviewsList;
