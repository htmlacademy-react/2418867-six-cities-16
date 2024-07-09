import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Favorites } from '../../pages/main/favorites';
import { Login } from '../../pages/main/login';
import { Main } from '../../pages/main/main';
import { Offer } from '../../pages/main/offer';
import { NotFound } from '../../pages/404/404';
import { PrivateRoute } from '../../private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import { OfferType } from '../../types/offer';
import { FavoriteType } from '../../mocks/favorites';

type AppProps = {
  numberRentals: number;
  offers: OfferType[];
  favorites: FavoriteType[];
};

function App({ numberRentals, offers, favorites }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main offers={offers} numberRentals={numberRentals} />}
        />
        <Route path={AppRoute.Offer} element={<Offer offers={offers} />} />
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
