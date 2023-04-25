import { useAppSelector } from '../../hooks/use-app-selector';
import { AuthorizationStatus } from '../../const/const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import HeaderLogo from '../header-logo/header-logo';
import UserAuthorization from '../user-authorization/user-authorization';
import UserUnknown from '../user-authorization/user-unknown';

function MainPageHeader(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (

    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <HeaderLogo />
          <nav className='header__nav'>
            {authorizationStatus === AuthorizationStatus.Auth ? <UserAuthorization /> : <UserUnknown />}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default MainPageHeader;
