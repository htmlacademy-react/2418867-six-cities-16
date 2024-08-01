import axios from 'axios';
import { IFlat } from './slice';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchUsers = () => async (dispatch: AppDispath) => {
//   try {
//     dispatch(userSlice.actions.userFetching());
//     const response = await axios.get<IUser[]>(
//       'https://jsonplaceholder.typicode.com/users'
//     );
//     dispatch(userSlice.actions.userFetchingSuccess(response.data));
//   } catch (e) {
//     dispatch(userSlice.actions.userFetchingErorr(e.message));
//   }
// };

export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IFlat[]>(
        'https://16.design.htmlacademy.pro/six-cities/offers'
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось');
    }
  }
);
