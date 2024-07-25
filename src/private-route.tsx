import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from './const';

type PrivateRouterProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouterProps): JSX.Element {
  const { authorizationStatus, children } = props;

  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login}></Navigate>
  );
}

export { PrivateRoute };
