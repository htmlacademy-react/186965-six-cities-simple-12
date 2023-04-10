
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { changeCity } from '../../store/action';
import { City } from '../../types/city';
import { Link } from 'react-router-dom';

type CityItemProps = {
  city: City;
}

function CityItem({ city }: CityItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((item) => item.city.name);

  return (
    <li className='locations__item'>
      <Link className={`locations__item-link tabs__item ${city.name === currentCity ? 'tabs__item--active' : ''}`} to='/#' onClick={() => dispatch(changeCity(city))}>
        <span>{city.name}</span>
      </Link>
    </li >

  );
}

export default CityItem;
