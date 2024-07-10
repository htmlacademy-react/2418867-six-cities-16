import { Link } from 'react-router-dom';
import { FavoriteType } from '../mocks/favorites';

type FavoriteTypes = {
  locations: FavoriteType['locations'];
  data: FavoriteType['data'];
};

function ListFavorites({ locations, data }: FavoriteTypes): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="/">
            <span>{locations}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {data.map((item) => (
          <article key={item.id} className="favorites__card place-card">
            <div className="place-card__mark">
              <span>Premium</span>
            </div>
            <div className="favorites__image-wrapper place-card__image-wrapper">
              <a href="#">
                <img
                  className="place-card__image"
                  src={item.img}
                  width={150}
                  height={110}
                  alt="Place image"
                />
              </a>
            </div>
            <div className="favorites__card-info place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">€{item.price}</b>
                  <span className="place-card__price-text">/&nbsp;night</span>
                </div>
                <button
                  className="place-card__bookmark-button place-card__bookmark-button--active button"
                  type="button"
                >
                  <svg
                    className="place-card__bookmark-icon"
                    width={18}
                    height={19}
                  >
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">In bookmarks</span>
                </button>
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={{ width: '100%' }} />
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <a href="#">{item.placeName}</a>
              </h2>
              <p className="place-card__type">{item.placeType}</p>
            </div>
          </article>
        ))}
      </div>
    </li>
  );
}

export { ListFavorites };
