import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export interface IPost {
  id: string;
  title: string;
  body: string;
  previewImage: string;
  location: {
    latitude: number;
    longitude: number;
  };
  price: number;
  type: string;
}

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://16.design.htmlacademy.pro/six-cities',
  }),
  endpoints: (build) => ({
    fetchAllUsers: build.query<IPost[], number>({
      query: (limit: number) => ({
        url: '/offers',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});
