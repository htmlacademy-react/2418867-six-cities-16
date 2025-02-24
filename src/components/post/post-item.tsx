import { FC } from 'react';
import { IPost } from '../../services/post-service';
import { Link } from 'react-router-dom';

interface PostItemProps {
  post: IPost;
}

const PostItem: FC<PostItemProps> = ({ post }: PostItemProps) => (
  <article
    id={post.id}
  >
    <div className="near-places__image-wrapper place-card__image-wrapper">
      <Link to="/offer/22">
        <img
          className="place-card__image"
          src={post.previewImage}
          width={260}
          height={200}
          alt="Place image"
        />
      </Link>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">€{post.price}</b>
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
        <a href="#">{post.title}</a>
      </h2>
      <p className="place-card__type">{post.type}</p>
    </div>
  </article>
);

export default PostItem;
