import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from './action-creator';
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
  price: number;
  type: string;
}

export interface FlatState {
  flat: IFlat[];
  isLoading: boolean;
  error: string;
}

const initialState: FlatState = {
  flat: [],
  isLoading: false,
  error: '',
};

export const flatSlice = createSlice({
  name: 'flat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchUsers.fulfilled.type,
      (state, action: PayloadAction<IFlat[]>) => {
        state.isLoading = false;
        state.error = '';
        state.flat = action.payload;
      }
    );
    builder.addCase(fetchUsers.pending.type, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchUsers.rejected.type,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
  },
});

export default flatSlice.reducer;
