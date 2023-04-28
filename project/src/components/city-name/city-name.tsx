
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getSelectedCity } from '../../store/offers-data/selectors';
import { changeCity } from '../../store/offers-data/offers-data.slice';
import { CityName } from '../../types/city';
import { Link } from 'react-router-dom';

type CityItemProps = {
  cityTarget: CityName;
}

function CityItem({ cityTarget }: CityItemProps): JSX.Element {
  const currentCity = useAppSelector(getSelectedCity);
  const dispatch = useAppDispatch();

  const onChangeCity = (city: CityName) => {
    dispatch(changeCity(city));
  };

  return (
    <li className='locations__item'>
      <Link className={`locations__item-link tabs__item ${cityTarget === currentCity ? 'tabs__item--active' : ''}`} to='/#'
        onClick={() => {
          onChangeCity(cityTarget);
        }}
      >
        <span>{cityTarget}</span>
      </Link>
    </li >

  );
}

export default CityItem;
