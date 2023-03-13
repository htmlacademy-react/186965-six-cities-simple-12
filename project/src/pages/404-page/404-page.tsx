import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function NoPage(): JSX.Element {
  return (
    <>
      <Helmet title='Page not found'></Helmet>
      <h1>404 page not</h1>
      <Link to='/'>Return to the main page</Link>
    </>
  );
}


export default NoPage;
