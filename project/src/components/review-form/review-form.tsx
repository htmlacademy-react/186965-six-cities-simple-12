import { useState, ChangeEvent, FormEvent, Fragment } from 'react';
import { sendNewReviewAction } from '../../store/offers-data/api-actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getReviewErrorStatus, getSendingReviewStatus } from '../../store/offers-data/selectors';
import { ReviewNumbers } from '../../const/const';


type ReviewFormProps = {
  offerId: number;
}

type Form = {
  rating: number;
  comment: string;
};

function ReviewForm({ offerId }: ReviewFormProps): JSX.Element {
  const stars = new Array(5).fill(5).map((item, index) => item - index);

  const isSending = useAppSelector(getSendingReviewStatus);
  const isReviewError = useAppSelector(getReviewErrorStatus);

  const initialState = {
    comment: '',
    rating: 0
  };

  const [formData, setFormData] = useState<Form>(initialState);

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      comment: evt.target.value
    });
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      rating: Number(evt.target.value)
    });
  };

  const isFormValid = () => {
    const isTextValid = formData.comment.length > ReviewNumbers.MIN_COMMENTS_LENGTH && formData.comment.length < ReviewNumbers.MAX_COMMENTS_LENGTH;
    const isRated = Number(formData.rating) > 0;

    return isTextValid && isRated;
  };

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(sendNewReviewAction({ ...formData, offerId }));
    setFormData(initialState);
  };


  return (
    <form className='reviews__form form' action='#' method='post' onSubmit={handleSubmit}>
      {isReviewError ? <div style={{ color: 'red' }}>Sending feedback failed. Please resend review later</div> : ''}
      <label className='reviews__label form__label' htmlFor='review'>Your review</label>
      <div className='reviews__rating-form form__rating'>
        {stars.map((star) => (
          <Fragment key={star}>
            <input
              className='form__rating-input visually-hidden'
              name='rating'
              value={star}
              id={`${star}-stars`}
              type='radio'
              checked={formData.rating.toString() === star.toString()}
              onChange={handleRatingChange}
              key={star}
              disabled={isSending}
            />
            <label htmlFor={`${star}-stars`} className='reviews__rating-label form__rating-label' title='perfect'>
              <svg className='form__star-image' width='37' height='33'>
                <use xlinkHref='#icon-star'></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
        minLength={ReviewNumbers.MIN_COMMENTS_LENGTH}
        maxLength={ReviewNumbers.MAX_COMMENTS_LENGTH}
        onChange={handleCommentChange}
        value={formData.comment}
        disabled={isSending}
      >
      </textarea>
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set <span className='reviews__star'>rating</span> and describe your stay with at least <b className='reviews__text-amount'>{ReviewNumbers.MIN_COMMENTS_LENGTH} characters</b>.
        </p>
        <button className='reviews__submit form__submit button' type='submit' disabled={!isFormValid()}>Submit</button>
      </div>
    </form>
  );
}


export default ReviewForm;
