import { ReactNode } from 'react';

type ReviewsLIst = {
  children: ReactNode;
};

function ReviewsList({ children }: ReviewsLIst) {
  return <ul className="reviews__list">{children}</ul>;
}
export { ReviewsList };
