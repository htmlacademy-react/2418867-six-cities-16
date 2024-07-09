type DataFavorites = {
  id: number;
  img: string;
  price: number;
  placeName: string;
  placeType: string;
};

type FavoriteType = {
  dataID: number;
  locations: string;
  data: DataFavorites[];
};
export type { FavoriteType };
