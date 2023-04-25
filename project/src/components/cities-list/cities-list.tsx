import CityItem from '../city-name/city-name';
import { Cities } from '../../types/city';
import { memo } from 'react';

type CitiesListProps = {
  cities: Cities;
}

function CitiesList({ cities }: CitiesListProps): JSX.Element {
  return (
    <ul className='locations__list tabs__list'>
      {cities.map((city) => <CityItem key={city.city.name} cityTarget={city} />)}
    </ul>
  );
}

export default memo(CitiesList);
