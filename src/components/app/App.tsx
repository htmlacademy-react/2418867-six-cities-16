import { Main } from '../../pages/main/main';

type AppProps = {
  numberRentals: number;
};

function App({ numberRentals }: AppProps): JSX.Element {
  return <Main numberRentals={numberRentals}></Main>;
}

export { App };
