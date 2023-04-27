import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useRef, FormEvent, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { loginAction } from '../../store/user-process/api-actions';
import { AuthData } from '../../types/auth-data';
import { getChangeCity } from '../../store/offers-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { redirectToRoute } from '../../store/action';
import { checkAuthAction } from '../../store/user-process/api-actions';


function LoginPage(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const selectedCity = useAppSelector(getChangeCity);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };


  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Unknown) {
      dispatch(checkAuthAction());
    }

    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.Main));
    }
  }, [authorizationStatus, dispatch]);


  return (
    <section className='page page--gray page--login'>
      <Helmet title='Log in'></Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required ref={loginRef} />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required ref={passwordRef} pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$" title="Password must contain at least one letter and number" />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>{selectedCity.city.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </section>

  );
}

export default LoginPage;
