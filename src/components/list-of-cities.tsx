import { city } from '../mocks/city';

interface CityItem {
  handlecityFilter: (cityName: string) => void;
}

function ListOfCites({ handlecityFilter }: CityItem) {
  const cityNameValue = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    handlecityFilter(event.target.textContent);
  };

  return city.map((offer) => (
    <li onClick={cityNameValue} key={offer.id} className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{offer.name}</span>
      </a>
    </li>
  ));
}
export { ListOfCites };
