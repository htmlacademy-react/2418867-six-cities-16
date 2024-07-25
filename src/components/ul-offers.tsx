import { IUser } from '../store/slice';
import { ListOffers } from './list-offers';

type UlProps = {
  offers: IUser[];
  className: string;
  onListItemHover: (listItemName: string) => void;
};

function UlOffers({
  offers,
  className,
  onListItemHover,
}: UlProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <ListOffers
          key={offer.id}
          {...offer}
          onListItemHover={onListItemHover}
          className={className}
        />
      ))}
    </>
  );
}

export { UlOffers };
