import { AppRoute } from '../../const/const';
import { Link } from 'react-router-dom';

function HeaderLogo(): JSX.Element {
  return (
    <div className='header__left'>
      <Link className='header__logo-link header__logo-link--active' to={AppRoute.Main}>
        <img className='header__logo' src='img/logo.svg' alt='six cities logo' width='81' height='41' />
      </Link>
    </div>
  );
}


export default HeaderLogo;
