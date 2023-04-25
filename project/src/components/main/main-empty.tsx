import MainPageHeader from '../header/header';
import { Helmet } from 'react-helmet-async';
import CitiesList from '../cities-list/cities-list';
import { citiesNames } from '../../const/const';

function MainEmpty(): JSX.Element {
  return (
    <>
      <Helmet title='No places found'></Helmet>
      <MainPageHeader />

      <main className='page__main page__main--index page__main--index-empty'>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <CitiesList cities={citiesNames} />
          </section>
        </div>
        <div className='cities'>
          <div className='cities__places-container cities__places-container--empty container'>
            <section className='cities__no-places'>
              <div className='cities__status-wrapper tabs__content'>
                <b className='cities__status'>No places to stay available</b>
                <p className='cities__status-description'>We could not find any property available at the moment in Dusseldorf</p>
              </div>
            </section>
            <div className='cities__right-section'></div>
          </div>
        </div>
      </main>
    </>
  );
}


export default MainEmpty;