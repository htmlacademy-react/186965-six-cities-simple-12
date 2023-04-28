import { useState, MouseEvent } from 'react';
import { useAppSelector } from '../../hooks/use-app-selector';
import { sortingOptions } from '../../const/const';
import { SortingOption } from '../../types/sort';
import { getSelectedSorting } from '../../store/offers-data/selectors';
import { sortOffers } from '../../store/offers-data/offers-data.slice';
import { memo } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';

function SortingForm(): JSX.Element {
  const [isSortListOpened, setIsSortListOpened] = useState(false);

  const selectedSort = useAppSelector(getSelectedSorting);
  const dispatch = useAppDispatch();


  const onSortListClick = (evt: MouseEvent<HTMLElement>) => {
    const sortTarget = evt.currentTarget;
    dispatch(sortOffers(sortTarget.textContent as SortingOption));
    setIsSortListOpened(!isSortListOpened);
  };

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by </span>
      <span className='places__sorting-type' tabIndex={0} onClick={() => setIsSortListOpened(!isSortListOpened)}>{selectedSort}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortListOpened ? 'places__options--opened' : ''}`}>
        {sortingOptions.map((option) => (
          <li
            className={`places__option ${option === selectedSort ? 'places__option--active' : ''}`}
            tabIndex={0} key={option}
            onClick={onSortListClick}
          >{option}
          </li>
        )
        )}

      </ul>
    </form>
  );
}

export default memo(SortingForm);
