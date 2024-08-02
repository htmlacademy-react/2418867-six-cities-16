import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFlat } from './slice';

export interface ICityLocation {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: string;
}

export interface Citys {
  IFlat: IFlat[];
  ICityLocation: ICityLocation[];
}

const initialState: Citys = {
  IFlat: [
    {
      city: {
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13,
        },
        name: 'Paris',
      },
      id: '',
      title: '',
      body: '',
      mapLocation: [],
      previewImage: '',
      location: {
        latitude: 0,
        longitude: 0,
      },
      rating: 0,
      price: 0,
      type: '',
    },
  ],
  ICityLocation: [
    {
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 180,
      },
      name: 's',
    },
  ],
};

export const citySlice = createSlice({
  name: 'citys',
  initialState,
  reducers: {
    cityChanged(state, action: PayloadAction<IFlat[]>) {
      state.IFlat = action.payload;
    },
    cityClick(state, action: PayloadAction<IFlat[]>) {
      state.IFlat = action.payload;
    },
  },
});

export const { cityChanged, cityClick } = citySlice.actions;

export default citySlice.reducer;
