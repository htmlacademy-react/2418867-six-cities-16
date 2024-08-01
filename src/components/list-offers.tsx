import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';
import { IFlat } from '../store/slice';

type OfferTypes = {
  id: IFlat['id'];
  previewImage: IFlat['previewImage'];
  price: IFlat['price'];
  title: IFlat['title'];
  type: IFlat['type'];
  className: string;
  onListItemHover: (listItemName: string) => void;
};

function ListOffers(props: OfferTypes): JSX.Element {
  const { id, previewImage, price, title, type, className, onListItemHover } =
    props;

  const handleListItemHover = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onListItemHover(event.currentTarget.id);
  };

  return (
    <article
      onMouseEnter={handleListItemHover}
      className={`${className}__card place-card`}
      id={id}
    >
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to="/offer/22">
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export { ListOffers };
