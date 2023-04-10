import CityItem from '../city-name/city-name';
import { Cities } from '../../types/city';

type CitiesListProps = {
  cities: Cities;
}

function CitiesList({ cities }: CitiesListProps): JSX.Element {
  return (
    <ul className='locations__list tabs__list'>
      {cities.map((city) => <CityItem key={city.name} city={city} />)}
    </ul>
  );
}

export default CitiesList;
