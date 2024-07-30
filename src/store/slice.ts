import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from './action-creator';
import { MapLocation } from '../types/map-location';

export interface IUser {
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

export interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchUsers.fulfilled.type,
      (state, action: PayloadAction<IUser[]>) => {
        state.isLoading = false;
        state.error = '';
        state.users = action.payload;
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

export default userSlice.reducer;
