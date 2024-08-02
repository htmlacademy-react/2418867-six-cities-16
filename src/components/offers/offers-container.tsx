import OffersItem from './offers-item';
import { IFlat } from '../../store/slice';

type UIProps = {
  className: string;
  onListItemHover: (listItemName: string) => void;
  cityValue: IFlat[];
};

const OffersContainer = ({
  className,
  onListItemHover,
  cityValue,
}: UIProps): JSX.Element => (
  <div className="cities__places-list places__list tabs__content">
    {cityValue &&
      cityValue.map((flat) => (
        <OffersItem
          key={flat.id}
          {...flat}
          onListItemHover={onListItemHover}
          className={className}
        />
      ))}
  </div>
);

export default OffersContainer;
