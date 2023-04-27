
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getSelectedCity } from '../../store/offers-data/selectors';
import { changeCity } from '../../store/offers-data/offers-data.slice';
import { City } from '../../types/city';
import { Link } from 'react-router-dom';

type CityItemProps = {
  cityTarget: City;
}

function CityItem({ cityTarget }: CityItemProps): JSX.Element {
  const currentCity = useAppSelector(getSelectedCity);
  const dispatch = useAppDispatch();

  const onChangeCity = (city: City) => {
    dispatch(changeCity(city));
  };

  return (
    <li className='locations__item'>
      <Link className={`locations__item-link tabs__item ${cityTarget.city.name === currentCity.city.name ? 'tabs__item--active' : ''}`} to='/#'
        onClick={() => {
          onChangeCity(cityTarget);
        }}
      >
        <span>{cityTarget.city.name}</span>
      </Link>
    </li >

  );
}

export default CityItem;
