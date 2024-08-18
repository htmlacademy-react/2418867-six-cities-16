import { StatusCodes } from 'http-status-codes';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import { useAppSelector } from '../hooks/store';
import Favorite from '../pages/favorite';
import Login from '../pages/login';
import Main from '../pages/main';
import MainLayout from '../pages/main-layout';
import {
  getOffersLoadingState,
  getResponseStatusCode,
} from '../store/offer-process/selectors';
import { getAuthorizationStatus } from '../store/user-process/selectors';
import Loader from './loader/loader';
import Offer from './offer';
import Page404 from './page404';
import PrivateRoute from './private-route';

function App(): JSX.Element {
  const isOffersLoading = useAppSelector(getOffersLoadingState);
  const responseStatus = useAppSelector(getResponseStatusCode);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (responseStatus === StatusCodes.NOT_FOUND) {
    return <Page404 />;
  }

  if (isOffersLoading || authorizationStatus === AuthorizationStatus.Unknown) {
    return <Loader />;
  }

  return (
    <HelmetProvider>
      <Routes>
        <Route path={AppRoute.Main} element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <Favorite />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<Offer />} />
        </Route>
        <Route path={AppRoute.Unknown} element={<Page404 />} />
      </Routes>
    </HelmetProvider>
  );
}
export default App;
