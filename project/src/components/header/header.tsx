import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { AuthorizationStatus } from '../../const/const';
import { logoutAction } from '../../store/api-actions';
import { AppRoute } from '../../const/const';


function MainPageHeader(): JSX.Element {
  const user = useAppSelector((state) => state.user);

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (

    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="six cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            {authorizationStatus === AuthorizationStatus.Auth ? (
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper" style={{ backgroundImage: `url(${user?.avatarUrl || ''})` }}></div>
                    <span className="header__user-name user__name">{user?.email}</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <Link
                    className="header__nav-link"
                    to="/"
                    onClick={(evt) => {
                      evt.preventDefault();
                      dispatch(logoutAction());
                      navigate(AppRoute.Login);
                    }}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to="/"
                    onClick={(evt) => {
                      evt.preventDefault();
                      navigate(AppRoute.Login);
                    }}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default MainPageHeader;
