import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFlat } from './action-creator';
import { MapLocation } from '../types/map-location';


export interface IFlat {
  id: string;
  title: string;
  body: string;
  mapLocation: MapLocation[];
  previewImage: string;
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    name: string;
  };
  location: {
    latitude: number;
    longitude: number;
  };
  rating: number;
  price: number;
  type: string;
}

export interface FlatState {
  flat: IFlat[];
  count: number;
  isLoading: boolean;
  error: string;
}

const initialState: FlatState = {
  flat: [],
  count: 0,
  isLoading: false,
  error: '',
};

export const flatSlice = createSlice({
  name: 'flat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchFlat.fulfilled.type,
      (state, action: PayloadAction<IFlat[]>) => {
        state.isLoading = false;
        state.error = '';
        state.flat = action.payload;
      }
    );
    builder.addCase(fetchFlat.pending.type, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchFlat.rejected.type,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
  },
});


export default flatSlice.reducer;
