
import { Review } from '../../types/review';
import dayjs from 'dayjs';
import { memo } from 'react';

type ReviewProps = {
  review: Review;
}

function ReviewItem({ review }: ReviewProps): JSX.Element {
  const { user, comment, rating, date, id } = review;

  return (
    <li className='reviews__item' id={id.toString()}>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img className='reviews__avatar user__avatar' src={user.avatarUrl} width='54' height='54' alt='Reviews avatar' />
        </div>
        <span className='reviews__user-name'>{user.name}</span>
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <div className='reviews__stars rating__stars'>
            <span style={{ width: `${rating / 5 * 100}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <p className='reviews__text'>
          {comment}
        </p>
        <time className='reviews__time' dateTime={date}>{`${dayjs(date).format('MMMM YYYY')}`}</time>
      </div>
    </li>
  );
}


export default memo(ReviewItem);
