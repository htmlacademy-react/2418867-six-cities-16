import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Favorites } from '../../pages/main/favorites';
import { Login } from '../../pages/main/login';
import { Main } from '../../pages/main/main';
import { Offer } from '../../pages/main/offer';
import { NotFound } from '../../pages/main/404';
import { PrivateRoute } from '../../private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import { HelmetProvider } from 'react-helmet-async';

type AppProps = {
  numberRentals: number;
};

function App({ numberRentals }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main numberRentals={numberRentals}></Main>}
          />
          <Route path={AppRoute.Offer} element={<Offer></Offer>} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <Favorites></Favorites>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Login} element={<Login></Login>} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export { App };
