import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  userEmail: string;
  offersAmount: number;
}

function App({ userEmail, offersAmount }: AppProps): JSX.Element {
  return (
    <MainPage userEmail={userEmail} offersAmount={offersAmount} />
  );
}

export default App;
