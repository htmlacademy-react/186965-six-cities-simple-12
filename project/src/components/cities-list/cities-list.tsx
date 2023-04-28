import CityItem from '../city-name/city-name';
import { memo } from 'react';
import { citiesNames } from '../../const/const';


function CitiesList(): JSX.Element {
  return (
    <ul className='locations__list tabs__list'>
      {citiesNames.map((city) => <CityItem key={city} cityTarget={city} />)}
    </ul>
  );
}

export default memo(CitiesList);
