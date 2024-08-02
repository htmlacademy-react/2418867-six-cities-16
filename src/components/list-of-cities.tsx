import { city } from '../mocks/city';
interface CityItem {
  handlecityFilter: (cityName: string) => void;
}

function ListOfCites({ handlecityFilter }: CityItem) {
  return city.map((offer) => (
    <li
      onClick={() => handlecityFilter(offer.name)}
      key={offer.id}
      className="locations__item"
    >
      <a className="locations__item-link tabs__item" href="#">
        <span>{offer.name}</span>
      </a>
    </li>
  ));
}
export { ListOfCites };
