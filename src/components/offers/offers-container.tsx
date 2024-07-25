import OffersItem from './offers-item';
import { IUser } from '../../store/slice';

type UIProps = {
  className: string;
  onListItemHover: (listItemName: string) => void;
  cityValue: IUser[];
};

const OffersContainer = ({
  className,
  onListItemHover,
  cityValue,
}: UIProps): JSX.Element => (
  <div className="cities__places-list places__list tabs__content">
    {cityValue &&
      cityValue.map((user) => (
        <OffersItem
          key={user.id}
          {...user}
          onListItemHover={onListItemHover}
          className={className}
        />
      ))}
  </div>
);

export default OffersContainer;
