import { useEffect, useState } from 'react';
import { Logo } from '../../components/logo';
import { Map } from '../../components/map';
import { Point } from '../../types/point';
import { HeaderNavProfile } from '../../components/header-nav-provile';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { fetchUsers } from '../../store/action-creator';
import OffersContainer from '../../components/offers/offers-container';
import { ListOfCites } from '../../components/list-of-cities';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const { users } = useAppSelector((state) => state.userSlice);

  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(
    undefined
  );

  const [cityValue, setCityValue] = useState(users);

  useEffect(() => {
    const cityFilterDefault = users.filter(
      (city) => city.city.name === 'Paris'
    );

    setCityValue(cityFilterDefault);
  }, [users]);

  const handlecityFilter = (cityName: string) => {
    const cityFilter = users.filter((city) => city.city.name === cityName);

    setCityValue(cityFilter);
  };

  const handleListItemHover = (listItemName: string) => {
    const currentPoint = users.find((point) => point.id === listItemName);

    setSelectedPoint(currentPoint);
  };

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
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityValue.length} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
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
