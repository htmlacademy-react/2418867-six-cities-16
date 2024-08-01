import { SetStateAction, useEffect, useState } from 'react';
import { Logo } from '../../components/logo';
import { Map } from '../../components/map';
import { Point } from '../../types/point';
import { HeaderNavProfile } from '../../components/header-nav-provile';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { fetchUsers } from '../../store/action-creator';
import OffersContainer from '../../components/offers/offers-container';
import { ListOfCites } from '../../components/list-of-cities';
import { Popular } from '../../components/popular';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const { flat } = useAppSelector((state) => state.flatSlice);

  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(
    undefined
  );

  const [cityValue, setCityValue] = useState(flat);

  useEffect(() => {
    const cityFilterDefault = flat.filter((city) => city.city.name === 'Paris');

    setCityValue(cityFilterDefault);
  }, [flat]);

  const [cityNames, setCityNames] = useState('Paris');

  const handlecityFilter = (cityName: string) => {
    const cityFilter = flat.filter((city) => city.city.name === cityName);
    setCityNames(cityName);
    setCityValue(cityFilter);
  };

  const handleListItemHover = (listItemName: string) => {
    const currentPoint = flat.find((point) => point.id === listItemName);

    setSelectedPoint(currentPoint);
  };

  const [tab, setPlace] = useState(-1);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo></Logo>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <HeaderNavProfile />
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <ListOfCites handlecityFilter={handlecityFilter} />
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {cityValue.length} places to stay in {cityNames}
              </b>
              <Popular
                tab={tab}
                onClickTab={(id: SetStateAction<number>) => setPlace(id)}
              />
              <OffersContainer
                onListItemHover={handleListItemHover}
                className={'cities'}
                cityValue={cityValue}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  selectedPoint={selectedPoint}
                  cityValue={cityValue}
                  height="817px"
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export { Main };
