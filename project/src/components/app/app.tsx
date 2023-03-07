import MainPage from '../../pages/main-page';

type AppProps = {
  userEmail: string;
}

function App({ userEmail }: AppProps): JSX.Element {
  return (
    <MainPage userEmail={userEmail} />
  );
}

export default App;
