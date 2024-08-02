import { combineReducers, configureStore } from '@reduxjs/toolkit';
import flatSlice from './slice';
import sliceCity from './sliceCity';
// import { postAPI } from '../services/post-service';

const rootReducer = combineReducers({
  flatSlice,
  sliceCity,
  // [postAPI.reducerPath]: postAPI.reducer,
});

export const store = () =>
  configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat(postAPI.middleware),
  });

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof store>;
type AppDispath = AppStore['dispatch'];

export type { RootState, AppDispath, AppStore };
