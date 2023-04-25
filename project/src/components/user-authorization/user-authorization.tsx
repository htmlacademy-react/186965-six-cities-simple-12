import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { logoutAction } from '../../store/user-process/api-actions';
import { getUserData } from '../../store/user-process/selectors';
import { AppRoute } from '../../const/const';


function UserAuthorization(): JSX.Element {
  const user = useAppSelector(getUserData);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <ul className='header__nav-list'>
      <li className='header__nav-item user'>
        <div className='header__nav-profile'>
          <div className='header__avatar-wrapper user__avatar-wrapper' style={{ backgroundImage: `url(${user?.avatarUrl || ''})` }}></div>
          <span className='header__user-name user__name'>{user?.email}</span>
        </div>
      </li>
      <li className='header__nav-item'>
        <Link
          className='header__nav-link'
          to='/'
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
            navigate(AppRoute.Login);
          }}
        >
          <span className='header__signout'>Sign out</span>
        </Link>
      </li>
    </ul>
  );
}

export default UserAuthorization;
