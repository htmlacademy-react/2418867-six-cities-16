import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Favorites } from '../../pages/main/favorites';
import { Login } from '../../pages/main/login';
import { Main } from '../../pages/main/main';
import { Offer } from '../../pages/main/offer';
import { NotFound } from '../../pages/404/404';
import { PrivateRoute } from '../../private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import { FavoriteType } from '../../types/favorite';

type AppProps = {
  favorites: FavoriteType[];
};

function App({ favorites }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path={AppRoute.Offer} element={<Offer />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites favorites={favorites} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
