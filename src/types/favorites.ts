import { FavoriteType } from '../mocks/favorites';

const favorites: FavoriteType[] = [
  {
    locations: 'Amsterdam',
    dataID: 0,
    data: [
      {
        id: 0,
        img: 'img/apartment-small-03.jpg',
        price: 180,
        placeName: 'Nice, cozy, warm big bed apartment',
        placeType: 'Apartment',
      },
      {
        id: 1,
        img: 'img/room-small.jpg',
        price: 80,
        placeName: 'Wood and stone place',
        placeType: 'Room',
      },
    ],
  },
  {
    locations: 'Cologne',
    dataID: 1,
    data: [
      {
        id: 2,
        img: 'img/apartment-small-04.jpg',
        price: 180,
        placeName: 'White castle',
        placeType: 'Apartment',
      },
    ],
  },
];

export { favorites };
