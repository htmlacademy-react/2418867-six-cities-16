import { useState } from 'react';
import { places } from '../mocks/places';

interface Popular {
  tab: number;
  onClickTab: (i: number) => void;
}

function Popular({ tab, onClickTab }: Popular) {
  const [popular, setPopular] = useState('');

  const popularClick = () => {
    if (popular === 'places__options--opened') {
      setPopular('');
    }
    if (popular === '') {
      setPopular('places__options--opened');
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={popularClick}
      >
        Popular
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${popular}`}>
        {places.map((place, i) => (
          <li
            key={place.id}
            className={`places__option ${
              tab === i ? 'places__option--active' : ''
            }`}
            onClick={() => onClickTab(i)}
            tabIndex={0}
          >
            {place.name}
          </li>
        ))}
      </ul>
    </form>
  );
}
export { Popular };
